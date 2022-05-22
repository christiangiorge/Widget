import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from './../adapters/mail-adapter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "",
      pass: ""
    }
  });


export class NodeMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <contato@feedget.com>',
            to: 'James Bond <james.bond@gmail.com>',
            subject: subject,
            html: body,
        })
    };
}
