package com.seosam.edusetpo.children.repository;

import com.seosam.edusetpo.children.entity.Children;
import com.seosam.edusetpo.parent.entity.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChildrenRepository extends JpaRepository<Children, Long> {
    List<Children> findAllByParent_ParentId(Long parentId);

}
//parent id 받고 중복된 자식 이름 중복제거 / 카테고리