package com.seosam.edusetpo.tutor.controller;


import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
public class LogInForm {

    @Email
    private String email;

    @NotBlank
    private String password;
}
