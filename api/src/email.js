import nodemailer from 'nodemailer'

const sender = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: 'mailing.tcc.info@acaonsfatima.org.br', 
    pass: 'mailing#tcc',
  },
});


async function enviarEmail(para, assunto, mensagem) {
  const response = await sender.sendMail({
    from: '"BOOKLY | TCC INSF" <mailing.tcc.info@acaonsfatima.org.br>',
    to: para, 
    subject: assunto,
    html: mensagem
  })
  return response;
}


export default enviarEmail;