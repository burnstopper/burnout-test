package com.burnoutstopper.burnouttest.service

import Answer
import com.burnoutstopper.burnouttest.model.*
import com.burnoutstopper.burnouttest.repository.AnswerRepository
import com.burnoutstopper.burnouttest.repository.TempRespondentRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.ValueConstants
import java.util.UUID

@Service
class AnswerServiceImpl @Autowired
constructor(
    private val answerRepository: AnswerRepository,
    private val resultService: ResultService,
    private val tempRepo: TempRespondentRepository
) : AnswerService {

    override fun saveAnswer(token: String, answer: Answer): Pair<Result, String> {
        val respondent = if (token == ValueConstants.DEFAULT_NONE) {
            tempRepo.save(TempRespondent(token = UUID.randomUUID().toString()))
//            Utils.createRespondent() TODO uncomment after integration with respondent microservice
        } else {
//            val id = Utils.getRespondentId(token) TODO uncomment after integration with respondent microservice
            val id = tempRepo.findByToken(token).id
            TempRespondent(id, token)
        }
        answer.respondentId = respondent.id!!
        answerRepository.save(answer)
        return resultService.saveResult(answer) to token
    }

    override fun getAnswer(token: String): Answer {
        val id = tempRepo.findByToken(token).id!!
        //  val id = Utils.getRespondentId(token) TODO uncomment after integration with respondent microservice
        return answerRepository.findByRespondentId(id)
    }
}
