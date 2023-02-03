package com.burnoutstopper.burnouttest.service

import com.burnoutstopper.burnouttest.model.Answer
import com.burnoutstopper.burnouttest.model.Result


interface ResultService {
    fun getAllResults(): List<Result>

    fun getRespondentResult(token: String): Result

    fun calculateResult(answer: Answer): Result
}