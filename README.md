# DevBank-BackEnd 🚀

## Sobre

Esse projeto tem como intuição o estudo de autenticação utilizando o um servidor NodeJS para tratativas de Registro e Login.



## Getting Started ✨


### 📋 Pré-requisitos
O que você precisa para instalar o software?
```
  Node.js Versão 18.16.0 (Que no momento é a versão LTS)
```

### Instalação ⬇️

1. Para baixar esse repositório utilize o comando em seu terminal:

```
$ git clone https://github.com/gransottodev/DevBank-BackEnd.git
```

2. Instalando as dependencias:

```bash
npm install
#or
yarn install
```

### Rodando o projeto ✅

```
node index.js
```
Estará disponível em : http:localhost:8080 após a inicialização

### End Points API ⚛️


* Register (POST): /v1/user/register <br>
Envie os seguintes dados no corpo da requisição:  <br> <br>
![image](https://github.com/gransottodev/DevBank-BackEnd/assets/101595139/17ffe167-0b21-4fca-afae-0d1a4e6d01fc)

* Login (POST) : /v1/user/login
Envie os dados de login no corpo da requisição: <br> <br>
![image](https://github.com/gransottodev/DevBank-BackEnd/assets/101595139/e37e2e0f-6f51-4395-b6ae-479d29eb97e2)

⬇️ Se o login for realizado com sucesso a API retornará um token JWT para realização dos processos a seguir

* GetByID(GET) : /v1/user
Para utilizar essa rota é necessário enviar o token mencionado anteriormente no header da requisição para
assim conseguir os dados do seu usuário <br> <br>
![image](https://github.com/gransottodev/DevBank-BackEnd/assets/101595139/96329e34-4f2e-4d45-a68e-1f1d947e216c)


* Lembrando que essa API ainda está em fase de desenvolvimento, conforme mais funcionalidades ficarem prontas os dados serão atualizados
para melhor utilização!





## Tecnologias utilizadas 💻:

```
 NodeJS ✅
 Express ✅
 MongoDB ✅
 JsonWebToken✅
 Bcrypt ✅
```

<hr>

## Referências para esse projeto ℹ️ :

* [Express](expressjs.com)
* [NodeJS](https://nodejs.org/en)
* [MongoDB](https://www.mongodb.com)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
<hr>

### Observações !
* Para esse projeto utilizei algumas váriaveis de ambiente em um arquivo ".env", por isso o projeto necessitará de algumas configurações
principalmente na conexão com banco de dados.

* Acesse o arquivo ".env" e faça as alterações necessárias para realizar a conexão com seu MongoDB Atlas e bons estudos 🚀.

