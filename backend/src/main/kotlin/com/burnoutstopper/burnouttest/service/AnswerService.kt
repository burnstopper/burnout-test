package com.burnoutstopper.burnouttest.service

import com.burnoutstopper.burnouttest.model.Answer
import com.burnoutstopper.burnouttest.model.Result
import com.burnoutstopper.burnouttest.model.SaveResponse

interface AnswerService {

    fun saveAnswer(token: String, answer: Answer): SaveResponse

    fun getRespondentAnswer(token: String): Answer

    fun getAllAnswers(): List<Answer>
}