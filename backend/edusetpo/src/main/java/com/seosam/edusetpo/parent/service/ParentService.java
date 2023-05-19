package com.seosam.edusetpo.parent.service;

import com.seosam.edusetpo.parent.dto.request.ChangePwdReqDto;
import com.seosam.edusetpo.parent.dto.request.LoginReqDto;
import com.seosam.edusetpo.parent.dto.request.SignUpReqDto;
import com.seosam.edusetpo.parent.dto.request.WithdrawParentReqDto;
import org.springframework.http.ResponseEntity;

public interface ParentService {

    ResponseEntity<?> signUpParent(SignUpReqDto signUpReqDto);

    boolean duplicateEmailCheck(String email);

    ResponseEntity<?> login(LoginReqDto loginReqDto);

    ResponseEntity<?> checkDuplicateEmail(String email);

    ResponseEntity<?> withdrawParent(WithdrawParentReqDto reqDto);

    ResponseEntity<?> changePassword(ChangePwdReqDto reqDto);

    ResponseEntity<?> getParentInfo(Long parentId);
}
