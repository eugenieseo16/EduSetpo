package com.seosam.edusetpo.children.service;

import com.seosam.edusetpo.children.dto.ChildrenDto;
import com.seosam.edusetpo.children.entity.Children;
import com.seosam.edusetpo.children.repository.ChildrenRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChildrenServiceImpl implements ChildrenService{
    private final ChildrenRepository childrenRepository;
    public ChildrenServiceImpl(ChildrenRepository childrenRepository){
        this.childrenRepository = childrenRepository;
    }


    @Override
    public List<Children> findAllChildren() {
        return childrenRepository.findAll();
    }

    @Override
    public List<Children> findAllByParentId(Long parentId) {
        List<Children> children=childrenRepository.findAllByParentId(parentId);
        return children;
    }

    @Override
    public Optional<Long> childrenAdd(Long parentId, ChildrenDto childrenDto) {
        Children children =toEntity(childrenDto);
        childrenRepository.save(children);
        return Optional.of(children.getChildId());
    }



    @Override
    public void childrenRemove(Long childId) {
        childrenRepository.deleteById(childId);
    }
}
