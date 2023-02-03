package com.burnoutstopper.burnouttest.model

enum class AnswerType(val point: Int) {
    NEVER(0),
    VERY_RARELY(1),
    RARELY(2),
    SOMETIMES(3),
    OFTEN(4),
    VERY_OFTEN(5),
    DAILY(6)
}