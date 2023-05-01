package com.seosam.edusetpo.tutor.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@AllArgsConstructor // 파라미터가 없는 기본 생성자 생성
@NoArgsConstructor // 모든 필드값을 파라미터로 받는 생성자 생성
@Getter
@Setter
@Entity
@Table(name = "tutor")
public class Tutor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tutor_id", nullable = false)
    private Long tutorId;

    @Column(name = "email", nullable = false, length = 50)
    private String email;

    @Column(name = "password", nullable = false, length = 64)
    private String password;

    @Column(name = "name", nullable = false, length = 10)
    private String name;

    @Column(name = "nickname", nullable = false, length = 20, unique = true)
    private String nickname;

    @Column(name = "profile_url", nullable = false)
    private String profileUrl;

    @Column(name = "is_withdraw", nullable = false)
    private Boolean isWithdraw = false;

    @Column(name = "theme_index", nullable = false)
    private Short themeIndex;

    @Column(name = "created_at", nullable = false)
    private LocalDate createdAt;

    public void update(String nickname, String profileUrl) {
        this.nickname = nickname;
        this.profileUrl = profileUrl;
    }
    @Builder
    public Tutor(Long tutorId, String email, String password, String name, String nickname, String profileUrl, Boolean isWithdraw, short themeIndex, LocalDate createdAt) {
        this.tutorId = tutorId;
        this.email = email;
        this.password = password;
        this.name = name;
        this.nickname = nickname;
        this.profileUrl = profileUrl;
        this.isWithdraw = isWithdraw;
        this.themeIndex = themeIndex;
        this.createdAt = createdAt;
    }
}
