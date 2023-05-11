package com.seosam.edusetpo.parent.service;

import com.seosam.edusetpo.common.Response;
import com.seosam.edusetpo.config.handler.JwtTokenProvider;
import com.seosam.edusetpo.parent.dto.request.ChangePwdReqDto;
import com.seosam.edusetpo.parent.dto.request.LoginReqDto;
import com.seosam.edusetpo.parent.dto.request.SignUpReqDto;
import com.seosam.edusetpo.parent.dto.response.LoginResDto;
import com.seosam.edusetpo.parent.dto.response.ParentInfoRespDto;
import com.seosam.edusetpo.parent.dto.response.SignUpResDto;
import com.seosam.edusetpo.parent.entity.Parent;
import com.seosam.edusetpo.parent.repository.ParentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ParentServiceImpl implements ParentService{

    private final ParentRepository parentRepository;
    private final Response response;
    @Autowired
    private PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    public ParentServiceImpl(ParentRepository parentRepository,
                             Response response,
                             JwtTokenProvider jwtTokenProvider) {
        this.parentRepository = parentRepository;
        this.response = response;
        this.jwtTokenProvider = jwtTokenProvider;
    }


    @Override
    public ResponseEntity<?> signUpParent(SignUpReqDto signUpReqDto) {
        if (signUpReqDto.getEmail().equals("")) {
            return response.fail("이메일을 입력해주세요.", HttpStatus.BAD_REQUEST);
        }
        if (signUpReqDto.getPassword().equals("")) {
            return response.fail("비밀번호를 입력해주세요.", HttpStatus.BAD_REQUEST);
        }
        if (signUpReqDto.getParentName().equals("")) {
            return response.fail("이름을 입력해주세요", HttpStatus.BAD_REQUEST);
        }
        if (duplicateEmailCheck(signUpReqDto.getEmail())) {
            return response.fail("이미 회원가입된 이메일입니다.", HttpStatus.BAD_REQUEST);
        }

        signUpReqDto.setPassword(passwordEncoder.encode(signUpReqDto.getPassword()));
        Parent parent = Parent.builder()
                .email(signUpReqDto.getEmail())
                .password(signUpReqDto.getPassword())
                .parentName(signUpReqDto.getParentName())
                .createdAt(LocalDate.now())
                .isWithdraw(false)
                .build();
        SignUpResDto signUpResDto = new SignUpResDto(signUpReqDto);
        parentRepository.save(parent);
        return response.success(signUpResDto, "회원가입에 성공했습니다.", HttpStatus.OK);
    };

    @Override
    public boolean duplicateEmailCheck(String email) {
        if (parentRepository.existsByEmail(email)) {
            List<Parent> forCheckParents = parentRepository.findParentsByEmail(email);
            for (Parent parent : forCheckParents) {
                if (!parent.getIsWithdraw()) {
                    return true;
                }
            }
        }
        return false;
    };

    @Override
    public ResponseEntity<?> login(LoginReqDto loginReqDto) {
        List<Parent> parents = parentRepository.findParentsByEmail(loginReqDto.getEmail());

        for (Parent parent : parents) {
            if (parent.getIsWithdraw()) {
                continue;
            }
            if (!passwordEncoder.matches(loginReqDto.getPassword(), parent.getPassword())) {
                return response.fail("비밀번호가 틀렸습니다.", HttpStatus.BAD_REQUEST);
            }
            String accessToken = jwtTokenProvider.generateJwtTokenForParent(parent.getEmail(), parent.getParentId());
            LoginResDto resDto = new LoginResDto(parent, accessToken);
            return response.success(resDto, "로그인 성공", HttpStatus.OK);
        }
        return response.fail("가입되지 않은 이메일 입니다.", HttpStatus.BAD_REQUEST);
    };

    @Override
    public ResponseEntity<?> checkDuplicateEmail(String email) {
        if (parentRepository.existsByEmail(email)) {
            List<Parent> forCheckParents = parentRepository.findParentsByEmail(email);
            for (Parent parent : forCheckParents) {
                if (!parent.getIsWithdraw()) {
                    return response.fail("이미 사용중인 이메일입니다.", HttpStatus.BAD_REQUEST);
                }
            }
        }
        return response.success(email, "사용 가능한 이메일입니다.", HttpStatus.OK);
    };

    @Override
    public ResponseEntity<?> withdrawParent(String token) {
        String email = jwtTokenProvider.getEmail(token);
        List<Parent> targetParents = parentRepository.findParentsByEmail(email);

        for (Parent parent : targetParents) {
            if (parent.getIsWithdraw()) {
                continue;
            }
            parent.withdrawParent();
            parentRepository.save(parent);
            return response.success("회원탈퇴가 완료되었습니다.");
        }
        return response.fail("존재하지 않는 회원입니다.", HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<?> changePassword(String token, ChangePwdReqDto reqDto) {
        String email = jwtTokenProvider.getEmail(token);
        List<Parent> targetParents = parentRepository.findParentsByEmail(email);

        for (Parent parent : targetParents) {
            if (parent.getIsWithdraw()) {
                continue;
            }
            if (passwordEncoder.matches(reqDto.getOldPassword(), parent.getPassword())) {
                String encoderdPwd = passwordEncoder.encode(reqDto.getNewPassword());
                parent.changePassword(encoderdPwd);
                parentRepository.save(parent);
                return response.success("비밀번호가 변경되었습니다.");
            } else {
                return response.fail("비밀번호가 틀렸습니다.", HttpStatus.BAD_REQUEST);
            }
        }
        return response.fail("맞는 계정이 존재하지 않습니다.", HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<?> getParentInfo(String token) {
        String email = jwtTokenProvider.getEmail(token);
        List<Parent> targetParents = parentRepository.findParentsByEmail(email);

        for (Parent parent : targetParents) {
            if (!parent.getIsWithdraw()) {
                ParentInfoRespDto respDto = ParentInfoRespDto.builder()
                        .email(parent.getEmail())
                        .name(parent.getParentName())
                        .build();
                return response.success(respDto, "성공", HttpStatus.OK);
            }
        }
        return response.fail("존재하지 않는 계정입니다.", HttpStatus.BAD_REQUEST);
    }

}
