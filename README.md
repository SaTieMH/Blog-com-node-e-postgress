Blog
------------
Node.js + Postgres

Pastas
----------
Route - Armazenar as rotas, tratar requisições que estão chegando e fazer o repasse disso para outras camadas da aplicação

Service - Responsável pelas regras de negócio

Data - Interação com a base de dados, restringindo a responsabilidade dessa camada para isso

Infra - Criação, gestão da conexão com o banco. Configurações

Test - Criação de testes automatizados que facilitam e evita que seja necessário o postman

Sobre as funções
---------------------
res.end() - Está encerrando (a response, no caso)

app.use(***) - método midware (aplicada a app)
         ^- ('/', require('./route/postsRoute')) - função de roteamento (que chama postsRout)