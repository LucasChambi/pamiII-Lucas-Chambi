1º deletar a pasta App e dentro do assets o Fonts, pois não será necessario.

2 - criar a pasta src, logo o app e criar arquivo index.tsx e user+api.ts

3 - iremos criar uma logica dentro do back-end para receber uma mensagem indicando que o servidor está funcionando pesquisando http://localhost:8081/user

POST - Envio de dados 
GET - Coletar dados

4 - após ter feito isso, devemos instalar uma extensão do vscode o thunder client - requisições de APIs.

5 - iremos criar uma chave para login:
email: admin@email.com
password: 1234

e também criar uma condição caso o usuario coloque suas credencias incorretas.

6 - depois da parte visual do layout, precisamos criar uma pasta chamada server e criar um arquivo api.ts: inserir o link do servidor e a porta (http://localhost:8081/) com o axios que será responsavel.

7 - na parte visual, daremos atenção ao inputs que enviará os dados para funcionar, como o handleSignIn.

8 - Depois de termos finalizado o projeto, será necessario fazer o deploy (envio de projeto para nuvem) e criar uma pasta api para que o backend continue funcionando.