package com.burnoutstopper.burnouttest.service

import com.burnoutstopper.burnouttest.model.Answer
import com.burnoutstopper.burnouttest.model.AnswerType
import com.burnoutstopper.burnouttest.model.Result
import com.burnoutstopper.burnouttest.repository.ResultRepository
import com.burnoutstopper.burnouttest.repository.TempRespondentRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.time.*
import kotlin.jvm.optionals.getOrNull
import kotlin.math.round
import kotlin.math.sqrt

@Service
class ResultServiceImpl @Autowired
constructor(
    private val resultRepository: ResultRepository,
    private val tempRepo: TempRespondentRepository
) : ResultService {

    override fun saveResult(answer: Answer): Result {
        val result = calculateResult(answer)
        resultRepository.save(result)
        return result
    }

    override fun getRecentResults(fromTimestamp: Long): List<Result> {
        val start = OffsetDateTime.ofInstant(Instant.ofEpochSecond(fromTimestamp), ZoneId.of("UTC"))
        val end = start.with(LocalTime.MAX)
        return resultRepository.findAllByDateTimeBetween(start, end)
    }

    override fun getResult(id: Int): Result? {
        return resultRepository.findById(id.toLong()).getOrNull()
    }

    override fun getResults(token: String): List<Result> {
        // val id = Utils.getRespondentId(token) TODO uncomment after integration with respondent microservice
        val id = tempRepo.findByToken(token).id!!
        return resultRepository.findAllByRespondentIdOrderByDateTimeDesc(id)
    }

    private fun calculateResult(answer: Answer): Result {
        val exhaustionSum = exhaustionSum(answer)
        val depersonalizationSum = depersonalizationSum(answer)
        val reductionSum = reductionSum(answer)
        val index = integralBurnoutIndex(exhaustionSum, depersonalizationSum, reductionSum)
        return Result(
            respondentId = answer.respondentId,
            dateTime = answer.dateTime,
            quizId = answer.quizId,
            exhaustion = exhaustionSum,
            depersonalization = depersonalizationSum,
            reduction = reductionSum,
            integralIndex = index
        )
    }

    private fun exhaustionSum(answer: Answer): Int {
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

    private fun depersonalizationSum(answer: Answer): Int {
        return answer.answer5.point + answer.answer10.point + answer.answer11.point + answer.answer15.point +
                answer.answer22.point
    }

    private fun reductionSum(answer: Answer): Int {
        return answer.answer4.point + answer.answer7.point + answer.answer9.point + answer.answer12.point +
                answer.answer17.point + answer.answer18.point + answer.answer19.point + answer.answer21.point
    }

    private fun integralBurnoutIndex(first: Int, second: Int, third: Int): Double {
        val one = first / 54.0
        val two = second / 30.0
        val tree = (1 - third / 48.0)
        val result = sqrt((one * one + two * two + tree * tree) / 3.0)
        return round(result * 100.0) / 100.0
    }
}