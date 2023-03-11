package com.burnoutstopper.burnouttest.dto

import com.burnoutstopper.burnouttest.model.Answer
import com.fasterxml.jackson.annotation.JsonProperty

data class AnswerRequest(
    @JsonProperty("token")
    val token: String = "",

    @JsonProperty("answer")
    val answer: Answer
)