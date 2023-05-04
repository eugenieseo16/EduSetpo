package com.seosam.edusetpo.children.service;

import com.seosam.edusetpo.children.dto.ChildrenAddDto;
import com.seosam.edusetpo.children.entity.Children;
import com.seosam.edusetpo.children.repository.ChildrenRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ChildrenServiceImpl implements ChildrenService{
    private final ChildrenRepository childrenRepository;
    public ChildrenServiceImpl(ChildrenRepository childrenRepository){
        this.childrenRepository = childrenRepository;
    }


    @Override
    public Optional<Long> childrenAdd(Long parentId, ChildrenAddDto childrenAddDto) {
        Children children =toEntity(childrenAddDto);
        childrenRepository.save(children);
        return Optional.of(children.getChildId());
    }

    @Override
    public void childrenRemove(Long childId) {
        childrenRepository.deleteById(childId);
    }
}
