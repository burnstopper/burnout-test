package com.burnoutstopper.burnouttest.dto

import com.burnoutstopper.burnouttest.model.Answer

data class AnswerRequest(val token: String, val answer: Answer)