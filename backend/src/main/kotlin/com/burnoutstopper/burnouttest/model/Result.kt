package com.burnoutstopper.burnouttest.model

data class Result(
    val exhaustion: Int,
    val deperson: Int,
    val reduction: Int,
    val burnoutIndex: Double,
) {
    val exhaustionLevel: Level
        get() {
            if (exhaustion <= 15)
                return Level.LOW

            if (exhaustion <= 24)
                return Level.MEDIUM

            return Level.HIGH
        }

    val depersonLevel: Level
        get() {
            if (deperson <= 5)
                return Level.LOW
            if (deperson <= 10)
                return Level.MEDIUM
            return Level.HIGH
        }

    val reductionLevel: Level
        get() {
            if (reduction >= 37)
                return Level.LOW
            if (reduction >= 31)
                return Level.MEDIUM
            return Level.HIGH
        }

    val exhaustionPercent: Int get() = (exhaustion / 54.0 * 100).toInt()

    val depersonPercent: Int get() = (deperson / 30.0 * 100).toInt()

    val reductionPercent: Int get() = ((1 - reduction / 48.0) * 100).toInt()

    val burnoutIndexPercent: Int get() = (burnoutIndex * 100).toInt()
}