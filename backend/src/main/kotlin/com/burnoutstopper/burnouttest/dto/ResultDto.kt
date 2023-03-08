package com.burnoutstopper.burnouttest.dto

import com.fasterxml.jackson.annotation.JsonProperty
import java.sql.Timestamp
import java.util.*

/**
 * Result for researcher
 */
class ResultDto(
    @JsonProperty("respondent_id")
    val respondentId: Int,

    @JsonProperty("datatime")
    val dataTime: Long,

    @JsonProperty("emotional_exhaustion")
    val emotionalExhaustion: Int,

    @JsonProperty("depersonalization")
    val depersonalization: Int,

    @JsonProperty("reduction_of_professionalism")
    val reductionOfProfessionalism: Int,

    @JsonProperty("burnout_p")
    val burnoutP: Double,

    @JsonProperty("quiz_id")
    val quizId: Int?
) {
    val burnoutScore: Int
        @JsonProperty("burnout_score")
        get() = emotionalExhaustion + depersonalization + reductionOfProfessionalism
    val burnoutIndex: Int
        @JsonProperty("burnout_index")
        get() = emotionalExhaustion + depersonalization + 48 - reductionOfProfessionalism
}