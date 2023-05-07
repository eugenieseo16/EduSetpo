package com.seosam.edusetpo.tutor.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.experimental.Delegate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;


@Getter
@AllArgsConstructor
public class TutorDetail implements UserDetails {

    @Delegate
    private Tutor tutor;

    private Collection<? extends GrantedAuthority> authorities;

    public TutorDetail(Tutor tutor) {
        super();
        this.tutor = tutor;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return this.tutor.getPassword();
    }

    @Override
    public String getUsername() {
        return this.tutor.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
