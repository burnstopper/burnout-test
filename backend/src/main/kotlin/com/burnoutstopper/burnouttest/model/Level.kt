package com.burnoutstopper.burnouttest.model

import com.fasterxml.jackson.annotation.JsonProperty

enum class Level {
    @JsonProperty("high")
    HIGH,
    @JsonProperty("medium")
    MEDIUM,
    @JsonProperty("low")
    LOW
}