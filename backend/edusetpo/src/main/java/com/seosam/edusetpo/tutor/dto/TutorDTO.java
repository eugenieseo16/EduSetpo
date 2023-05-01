package com.seosam.edusetpo.tutor.dto;

import java.time.LocalDate;

public class TutorDTO {

    private String email;
    private String password;
    private String name;
    private String nickname;
    private String profileUrl;
    private Boolean isWithdraw;
    private Short themeIndex;
    private LocalDate createdAt;

    public void TutorDto(
            String email,
            String password,
            String name,
            String nickname,
            String profileUrl,
            Boolean isWithdraw,
            Short themeIndex,
            LocalDate createdAt) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.nickname = nickname;
        this.profileUrl = profileUrl;
        this.isWithdraw = isWithdraw;
        this.themeIndex = themeIndex;
        this.createdAt = createdAt;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public void setProfileUrl(String profileUrl) {
        this.profileUrl = profileUrl;
    }

    public void setThemeIndex(Short themeIndex) {
        this.themeIndex = themeIndex;
    }

    public void setWithdraw(Boolean withdraw) {
        isWithdraw = withdraw;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {
        return name;
    }

    public String getNickname() {
        return nickname;
    }

    public String getProfileUrl() {
        return profileUrl;
    }

    public Boolean getWithdraw() {
        return isWithdraw;
    }

    public Short getThemeIndex() {
        return themeIndex;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }
}

