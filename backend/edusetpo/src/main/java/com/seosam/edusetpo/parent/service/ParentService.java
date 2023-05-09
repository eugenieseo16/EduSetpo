package com.seosam.edusetpo.parent.service;

import com.seosam.edusetpo.parent.dto.request.LoginReqDto;
import com.seosam.edusetpo.parent.dto.request.NameUpdateDto;
import com.seosam.edusetpo.parent.dto.request.SignUpReqDto;
import org.springframework.http.ResponseEntity;

public interface ParentService {

    ResponseEntity<?> signUpParent(SignUpReqDto signUpReqDto);

    boolean duplicateEmailCheck(String email);

    ResponseEntity<?> login(LoginReqDto loginReqDto);

    ResponseEntity<?> changeName(String email, NameUpdateDto nameUpdateDto);
//
//    ResponseEntity<?> checkDuplicateEmail(String email);
//
//    ResponseEntity<?> changePassword();


}
