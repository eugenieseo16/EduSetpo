package com.seosam.edusetpo.tutor.entity;

import com.seosam.edusetpo.tutor.dto.request.NicknameUpdateDto;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor // 파라미터가 없는 기본 생성자 생성
@NoArgsConstructor // 모든 필드값을 파라미터로 받는 생성자 생성
@Getter
@Setter
@Entity
@Builder
@Table(name = "tutor")
public class Tutor implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tutor_id", nullable = false)
    private Long tutorId;

    @Column(name = "email", nullable = false, length = 50)
    private String email;

    @Column(name = "password", nullable = false, length = 68)
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

    @Column(name = "is_authenticated", nullable = false)
    private Boolean isAuthenticated;

    @Column(name = "refresh_token")
    private String refreshToken;

    @ElementCollection(fetch = FetchType.EAGER)
    @Builder.Default
    private List<String> roles = new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


    public void updateNickname(NicknameUpdateDto updateDto) {
        this.nickname = updateDto.getNickname();
    }

    public void withdrawTutor() {
        this.email = "deleted_email";
        this.isWithdraw = true;
    }

    public void changePassword(String newPassword) {
        this.password = newPassword;
    }

    public void changeProfileUrl(String profileUrl) {
        this.profileUrl = profileUrl;
    }

    public void changeThemeColor(Short themeIndex) {
        this.themeIndex = themeIndex;
    }
}
