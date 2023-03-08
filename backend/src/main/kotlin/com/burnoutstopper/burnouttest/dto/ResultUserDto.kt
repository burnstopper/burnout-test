package com.burnoutstopper.burnouttest.dto

import com.burnoutstopper.burnouttest.model.Level
import com.fasterxml.jackson.annotation.JsonProperty

/**
 * Result for user
 */
class ResultUserDto(
    @JsonProperty("exhaustion")
    val exhaustion: Int,
    @JsonProperty("depersonalization")
    val depersonalization: Int,
    @JsonProperty("reduction")
    val reduction: Int,
    @JsonProperty("integral_index")
    val integralIndex: Double,
) {
    val exhaustionLevel: Level
        @JsonProperty("exhaustion_level")
        get() {
            if (exhaustion <= 15)
                return Level.LOW

            if (exhaustion <= 24)
                return Level.MEDIUM

            return Level.HIGH
        }

    val depersonalizationLevel: Level
        @JsonProperty("depersonalization_level")
        get() {
            if (depersonalization <= 5)
                return Level.LOW
            if (depersonalization <= 10)
                return Level.MEDIUM
            return Level.HIGH
        }

    val reductionLevel: Level
        @JsonProperty("reduction_level")
        get() {
            if (reduction >= 37)
                return Level.LOW
            if (reduction >= 31)
                return Level.MEDIUM
            return Level.HIGH
        }

    val exhaustionPercent: Int
        @JsonProperty("exhaustion_percent")
        get() = (exhaustion / 54.0 * 100).toInt()

    val depersonalizationPercent: Int
        @JsonProperty("depersonalization_percent")
        get() = (depersonalization / 30.0 * 100).toInt()

    val reductionPercent: Int
        @JsonProperty("reduction_percent")
        get() = ((1 - reduction / 48.0) * 100).toInt()

    val burnoutIndexPercent: Int
        @JsonProperty("integral_index_percent")
        get() = (integralIndex * 100).toInt()
}