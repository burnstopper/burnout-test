package com.burnoutstopper.burnouttest.repository

import com.burnoutstopper.burnouttest.model.Answer
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query

interface AnswerRepository : JpaRepository<Answer, Long> {

    fun findByRespondentId(respondentId: Int): Answer
}

