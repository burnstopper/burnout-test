package com.burnoutstopper.burnouttest.service

import com.burnoutstopper.burnouttest.model.Answer
import com.burnoutstopper.burnouttest.model.Result

interface ResultService {

    fun saveResult(answer: Answer): Result

    fun getRecentResults(fromTimestamp: Long): List<Result>

    fun getResult(id: Int): Result?

    fun getResults(token: String): List<Result>
}