package com.seosam.edusetpo.parent.service;

import com.seosam.edusetpo.parent.entity.Parent;

import java.util.Optional;

public interface ParentService {

    Optional<Parent> findByParentId(Long parentId);
}
