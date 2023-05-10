package com.seosam.edusetpo.parent.entity;


//import com.seosam.edusetpo.member.entity.Member;
import com.seosam.edusetpo.parent.dto.request.NameUpdateDto;
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

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Builder
@Table(name = "parent")
public class Parent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "parent_id", nullable = false)
    private Long parentId;

    @Column(name = "email", nullable = false, length = 50)
    private String email;

    @Column(name = "password", nullable = false, length = 68)
    private String password;

    @Column(name = "parent_name", nullable = false, length = 10)
    private String parentName;

    @Column(name = "created_at", nullable = false)
    private LocalDate createdAt;

    @Column(name = "is_withdraw", nullable = false)
    private Boolean isWithdraw = false;

    public void withdrawParent() {
        this.isWithdraw = true;
    }

    public void changePassword(String password) {
        this.password = password;
    }
}
