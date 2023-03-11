package com.burnoutstopper.burnouttest.dto

import com.fasterxml.jackson.annotation.JsonProperty

data class AnswerResponse(
    @JsonProperty("token")
    val token: String,

    @JsonProperty("result")
    val resultUserDto: ResultUserDto
)