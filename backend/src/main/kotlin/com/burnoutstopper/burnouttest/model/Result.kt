package com.burnoutstopper.burnouttest.model

import jakarta.persistence.*
import java.time.OffsetDateTime

@Entity
@Table(name = "results")
data class Result(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,
    val respondentId: Int,
    val dateTime: OffsetDateTime,
    val quizId: Int?,
    val exhaustion: Int,
    val depersonalization: Int,
    val reduction: Int,
    val integralIndex: Double,

//    @OneToOne(fetch = FetchType.LAZY)
//    val answerId: NewAnswer,
)
