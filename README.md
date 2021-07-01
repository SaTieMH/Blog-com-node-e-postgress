# Blog
Node.js + Postgres

## Pastas
Route - Armazenar as rotas, tratar requisições que estão chegando e fazer o repasse disso para outras camadas da aplicação

Service - Responsável pelas regras de negócio

Data - Interação com a base de dados, restringindo a responsabilidade dessa camada para isso

Infra - Criação, gestão da conexão com o banco. Configurações

Test - Criação de testes automatizados que facilitam e evita que seja necessário o postman

### Sobre as funções
res.end() - Está encerrando (a response, no caso)

app.use(***) - método midware (aplicada a app)
         ^- ('/', require('./route/postsRoute')) - função de roteamento (que chama postsRout)

### Observações
#### Chamada do script de testes
Posso alterar a chamada do meu script de testes no arquivo .json
```command
    >"scripts": {
        "test": "jest --env node --watchAll"
    }
```
Dessa maneira estou indicando que vou utilizar o node (como enviroment) junto do jest

Além disso também vou deixar o teste rodando sempre sem precisar chamá-lo sempre

#### Whats is Axios
O Axios é uma biblioteca cliente de requisições HTTP leve baseado no serviço $http dentro do Angular. js v1. x e é semelhante à API Fetch nativa do JavaScript. O Axios é baseado em promessas, o que oferece a capacidade de aproveitar o async e await do JavaScript para um código assíncrono mais legível.

Realiza requisições, recebe respostas. Ele realiza essas conexões.

Pode ser utilizado no client (navegador) para fazer chamadas pro backend, mas também pode ser utilizado no backend para realizar chamadas.

#### Base para construção deste projeto
https://www.youtube.com/watch?v=sLx00kXPoTg&t=1212s