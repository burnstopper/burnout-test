package com.burnoutstopper.burnouttest.model

import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonSubTypes
import jakarta.persistence.*
import org.hibernate.annotations.Type
import java.util.UUID

@Entity
@Table(name = "answers")
data class Answer(
    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int = 0,
    @JsonIgnore
    var respondentId: Int,
    @Enumerated(EnumType.STRING)
    val answer1: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer2: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer3: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer4: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer5: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer6: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer7: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer8: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer9: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer10: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer11: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer12: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer13: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer14: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer15: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer16: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer17: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer18: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer19: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer20: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer21: AnswerType,
    @Enumerated(EnumType.STRING)
    val answer22: AnswerType
)
