package com.seosam.edusetpo.tutor.dao;

import com.seosam.edusetpo.tutor.entity.Tutor;

public interface TutorDAO {

    Tutor insertTutor(Tutor tutor);

    Tutor selectTutor(Long tutorId);

    Tutor updateTutorName(Long tutorId, String name) throws Exception;
}
