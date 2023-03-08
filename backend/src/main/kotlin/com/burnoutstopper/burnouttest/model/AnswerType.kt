package com.burnoutstopper.burnouttest.model

import com.fasterxml.jackson.annotation.JsonProperty

enum class AnswerType(val point: Int) {
    @JsonProperty("never")
    NEVER(0),
    @JsonProperty("very_rarely")
    VERY_RARELY(1),
    @JsonProperty("rarely")
    RARELY(2),
    @JsonProperty("sometimes")
    SOMETIMES(3),
    @JsonProperty("often")
    OFTEN(4),
    @JsonProperty("very_often")
    VERY_OFTEN(5),
    @JsonProperty("daily")
    DAILY(6)
}