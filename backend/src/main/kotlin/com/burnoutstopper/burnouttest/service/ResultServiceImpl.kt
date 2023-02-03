package com.burnoutstopper.burnouttest.service

import com.burnoutstopper.burnouttest.model.Answer
import com.burnoutstopper.burnouttest.model.AnswerType
import com.burnoutstopper.burnouttest.model.Result
import com.burnoutstopper.burnouttest.model.TempRespondent
import com.burnoutstopper.burnouttest.repository.AnswerRepository
import com.burnoutstopper.burnouttest.repository.TempRespondentRepository
import com.burnoutstopper.burnouttest.util.Utils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.stream.Collectors
import kotlin.math.round
import kotlin.math.roundToInt
import kotlin.math.sqrt

@Service
class ResultServiceImpl @Autowired
constructor(
    private val repository: AnswerRepository,
    private val tempRepo: TempRespondentRepository
) : ResultService {

    override fun getAllResults(): List<Result> {
        return repository.findAll().parallelStream().map(::calculateResult).collect(Collectors.toList())
    }

    override fun getRespondentResult(token: String): Result {
//        val id = Utils.getRespondentId(token) TODO uncomment
        val id = tempRepo.findByToken(token).id!!
        val answer = repository.findByRespondentId(id)
        return calculateResult(answer)
    }

    override fun calculateResult(answer: Answer): Result {
        val firstSum = firstIndicatorSum(answer)
        val secondSum = secondIndicatorSum(answer)
        val thirdSum = thirdIndicatorSum(answer)
        val burnoutIndex = burnoutIndex(firstSum, secondSum, thirdSum)
        return Result(firstSum, secondSum, thirdSum, burnoutIndex)
    }

    private fun firstIndicatorSum(answer: Answer): Int {
        val answer6Point = when (answer.answer6) {
            AnswerType.NEVER -> 6
            AnswerType.VERY_RARELY -> 5
            AnswerType.RARELY -> 4
            AnswerType.SOMETIMES -> 3
            AnswerType.OFTEN -> 2
            AnswerType.VERY_OFTEN -> 1
            AnswerType.DAILY -> 0
        }
        return answer.answer1.point + answer.answer2.point + answer.answer3.point + answer.answer8.point +
                answer.answer13.point + answer.answer14.point + answer.answer16.point + answer.answer20.point +
                answer6Point
    }

    private fun secondIndicatorSum(answer: Answer): Int {
        return answer.answer5.point + answer.answer10.point + answer.answer11.point + answer.answer15.point +
                answer.answer22.point
    }

    private fun thirdIndicatorSum(answer: Answer): Int {
        return answer.answer4.point + answer.answer7.point + answer.answer9.point + answer.answer12.point +
                answer.answer17.point + answer.answer18.point + answer.answer19.point + answer.answer21.point
    }

    private fun burnoutIndex(first: Int, second: Int, third: Int): Double {
        val one = first / 54.0
        val two = second / 30.0
        val tree = (1 - third / 48.0)
        val result = sqrt((one * one + two * two + tree * tree) / 3.0)
        return round(result * 100.0) / 100.0
    }
}