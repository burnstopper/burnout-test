package com.burnoutstopper.burnouttest.dto

import com.fasterxml.jackson.annotation.JsonProperty

data class ResultRecentDto(
    @JsonProperty("result_id")
    val resultId: Long,

    @JsonProperty("respondent_id")
    val respondentId: Int,

    @JsonProperty("datatime")
    val dateTime: Long,

    @JsonProperty("quiz_id")
    val quizId: Int?
)
