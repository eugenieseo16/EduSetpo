package com.seosam.edusetpo.tutor.dao.impl;


import com.seosam.edusetpo.tutor.dao.TutorDAO;
import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class TutorDAOImpl implements TutorDAO {

    private final TutorRepository tutorRepository;

    @Autowired
    public TutorDAOImpl(TutorRepository tutorRepository) {
        this.tutorRepository = tutorRepository;
    }

    @Override
    public Tutor insertTutor(Tutor tutor) {
        Tutor savedTutor = tutorRepository.save(tutor);

        return savedTutor;
    }

    @Override
    public Tutor selectTutor(Long tutorId) {
        Tutor selectedTutor = tutorRepository.getById(tutorId);

        return selectedTutor;
    }

    @Override
    public Tutor updateTutorName(Long tutorId, String name) throws Exception {
        Optional<Tutor> selectedTutor = tutorRepository.findById(tutorId);

        Tutor updatedTutor;

        if (selectedTutor.isPresent()) {
            Tutor tutor = selectedTutor.get();

            tutor.setName(name);

            updatedTutor = tutorRepository.save(tutor);
        } else {
            throw new Exception();
        }
        return updatedTutor;
    }


}
