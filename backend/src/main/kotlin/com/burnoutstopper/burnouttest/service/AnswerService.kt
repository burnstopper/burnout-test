package com.burnoutstopper.burnouttest.service

import com.burnoutstopper.burnouttest.model.Answer
import com.burnoutstopper.burnouttest.model.Result

interface AnswerService {

    fun saveAnswer(token: String, answer: Answer): Pair<Result, String>

    fun getAnswer(token: String): Answer
}