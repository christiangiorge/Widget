import { NodeMailAdapter } from './nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedback-repository';
import express from 'express'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';


export const routes = express.Router();

routes.post('/feedbacks', async (req, res) =>{
    const { type, comment, screenshot } = req.body;

    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodemailerMailAdapter = new NodeMailAdapter

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbackRepository,
      nodemailerMailAdapter
    )

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    });

    return res.status(201).send();
})