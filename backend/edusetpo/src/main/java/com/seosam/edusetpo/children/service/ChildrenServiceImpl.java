package com.seosam.edusetpo.children.service;

import com.seosam.edusetpo.children.dto.ChildrenDto;
import com.seosam.edusetpo.children.entity.Children;
import com.seosam.edusetpo.children.repository.ChildrenRepository;
import com.seosam.edusetpo.parent.entity.Parent;
import com.seosam.edusetpo.parent.repository.ParentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChildrenServiceImpl implements ChildrenService {
    private final ChildrenRepository childrenRepository;
    private final ParentRepository parentRepository;

    public ChildrenServiceImpl(ChildrenRepository childrenRepository, ParentRepository parentRepository) {
        this.childrenRepository = childrenRepository;
        this.parentRepository = parentRepository;
    }

    @Override
    public List<Children> findAllChildren() {
        return childrenRepository.findAll();
    }

    @Override
    public List<Children> findAllByParentId(Long parentId) {
        List<Children> children = childrenRepository. findAllByParent_ParentId(parentId);
        return children;
    }

    @Override
    public Optional<Long> childrenAdd(ChildrenDto childrenDto) {
        Long parentId = childrenDto.getParentId();
        Parent parent = parentRepository.findById(parentId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid parent ID."));
        Children children = toEntity(childrenDto, parent);
        childrenRepository.save(children);
        return Optional.of(children.getChildId());
    }

    @Override
    public void childrenRemove(Long childId) {
        childrenRepository.deleteById(childId);
    }
}
