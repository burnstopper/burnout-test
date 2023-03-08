package com.burnoutstopper.burnouttest.repository

import Answer
import org.springframework.data.jpa.repository.JpaRepository

interface AnswerRepository : JpaRepository<Answer, Int> {

    fun findByRespondentId(respondentId: Int): Answer
}

