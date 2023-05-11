package com.seosam.edusetpo.parent.service;

import com.seosam.edusetpo.parent.dto.request.ChangePwdReqDto;
import com.seosam.edusetpo.parent.dto.request.LoginReqDto;
import com.seosam.edusetpo.parent.dto.request.SignUpReqDto;
import org.springframework.http.ResponseEntity;

public interface ParentService {

    ResponseEntity<?> signUpParent(SignUpReqDto signUpReqDto);

    boolean duplicateEmailCheck(String email);

    ResponseEntity<?> login(LoginReqDto loginReqDto);

    ResponseEntity<?> checkDuplicateEmail(String email);

    ResponseEntity<?> withdrawParent(String token);

    ResponseEntity<?> changePassword(String token, ChangePwdReqDto reqDto);

    ResponseEntity<?> getParentInfo(String token);
}
