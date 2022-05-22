![README](/README/feedback-widget.png)

<h1 align="center">
 Next Level Week: Trilha Impulse
</h1>

<p align="center">
 <img alt="GitHub" src="https://img.shields.io/github/license/christiangiorge/nlw-return?color=0d7ebe"/>

 <a href="https://github.com/christiangiorge">
    <img alt="Made by Christian Giorge" src="https://img.shields.io/badge/Made%20by-Christian%20Giorge-0d7ebe">
 </a>

 <a href="https://www.linkedin.com/in/christian-giorge-20648714a" target="_blank">
    <img alt="Follow me Linkedin" src="https://img.shields.io/badge/Follow%20up-christiangiorge-0d7ebe?style=social&logo=linkedin">
 </a>
</p>

## 💻 Tecnologias Utilizadas:

- Vite
- NodeJS
- ReactJS
- TailWindCSS
- Expo
- React native
- Prisma
- Nodemailer
- Jest


## 🚀 Project

Nesse projeto desenvolvemos um Component Widget para o usuário enviar um feedback que vai chegar no e-mail e também é salvo no banco de dados, podendo ser utilizado em qualquer site, nele é possível enviar uma imagem e um comentário, de um posssível problema, uma ideia entre outros.

## Instalando o projeto em sua máquina

Clonando o projeto

~~~
git clone https://github.com/christiangiorge/Widget.git
~~~

Instalando dependências

Primeiro instale todas as dependências nas pastas `/Widget` `/server` `/web` `/mobile` do projeto:

~~~
npm install
~~~

## Variáveis de ambiente

No diretório /server altere o arquivo .env.example para .env e informe a porta que vai rodar seu servidor e onde está o diretório de seu arquivo ./dev.db do prisma, exemplo:

~~~
DATABASE_URL="file:./dev.db"
PORT=3333
~~~

No diretório /web altere o arquivo .env.local.example para .env.local e informe o endereço que está rodando seu servidor , exemplo:

~~~
VITE_API_URL=http://localhost:3333
~~~

## Envio de email

Para testar o email utilizamos o serviço <a href="https://mailtrap.io/">Mailtrap</a>, faça um login e crie uma caixa de entrada, ao criar vai gerar um usuário e senha para seu email de teste, aloque ele no arquivo `/server/srv/nodemailer/nodemailer-mail-adapter.ts` segue um exemplo:

~~~
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "your-user",
      pass: "your-pass"
    }
  });
~~~

## Rodando o projeto em sua máquina

Primeiro execute o comando na pasta /server

~~~
npm run dev

//Para visualizar o feedback sendo salvo no banco de dados via Prisma
npx prisma studio
~~~

Segundo execute o comando na pasta /web

~~~
npm run dev
~~~

Terceiro execute o comando na pasta /mobile

~~~
expo start
~~~

Qualquer dúvida entre em contato 😀👍
