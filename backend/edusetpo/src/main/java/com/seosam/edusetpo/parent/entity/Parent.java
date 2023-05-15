package com.seosam.edusetpo.parent.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;


// Lombok 애너테이션을 사용하여 Getter, Setter, 생성자 등을 자동으로 생성
@AllArgsConstructor // 파라미터가 없는 기본 생성자 생성
@NoArgsConstructor // 모든 필드값을 파라미터로 받는 생성자 생성
@Getter
@Setter
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Builder
@Table(name = "parent") // "parent" 테이블과 매핑되는 Entity
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

    // parentName 필드를 업데이트하는 메소드
    public void updateParentName(String parentName) {
        this.parentName = parentName;
    }

    @Builder
    public Parent(Long parentId, String email, String password, String parentName, Boolean isWithdraw, LocalDate createdAt) {
        this.parentId = parentId;
        this.email = email;
        this.password = password;
        this.parentName = parentName;
        this.isWithdraw = isWithdraw;
        this.createdAt = createdAt;
    }

}
