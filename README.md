<h1 align="center"> Arbilist API </h1>

# <h4>API que recupera e compara valores de diferentes exchanges com as moedas que fazem par com o Bitcoin ( BTC ) para mostrar os melhores preços de compra e venda com o intuíto de ajudar em operações de arbitragem com criptomoedas.</h4> 

<h4>Instruções</h4>
  <ul>
    <li>Baixe o docker </li>
    <li>crie um container com o comando "docker run --name /nomeContainer/ -e POSTGRES_PASSWORD=/senha/ -p 5432:5432  -d postgres"</li>
    <li>Acesse o container com o pgAdmin e crie um banco de dados chamado "arbilist"
    <li>no arquivo ".env" na raiz do projeto, coloque os dados de conexão com o banco de dados
    <li>Execute os seguintes comandos na pasta do projeto através terminal:</li>
    <ul>
      <li>npm i  ( instala todos os pacotes )</li>
      <li>npx sequelize-cli db:migrate</li>
      <li>npx sequelize-cli db:seed:all ( Preenche o banco de dados com api's para o consumo ) e um usuário: "test@test":"123</li>
      <li>npm run start ( inicia a aplicação na porta 8787 )</li>
    </ul>
  </ul>
</h4>
<div>
  <table>
    <caption>Rotas de usuário </caption>
    <tbody>
      <tr>
        <th>Método</th>
        <th>Rota</th>
        <th>Descrição</th>
        <th>Parâmetros ( JSON )</th>
      </tr>
      <tr>
        <td>POST</td>
        <td>/user/new</td>
        <td>Cria um novo usuário</td>
        <td>name: string, email: string, passwd: string</td>
      </tr>
      <tr>
        <td>POST</td>
        <td>/user/login</td>
        <td>Efetua o login</td>
        <td>email: string, passwd: string</td>
      </tr>
      <tr>
        <td>DELETE</td>
        <td>/user/delete</td>
        <td>Deleta a conta do próprio usuário logado</td>
        <td>passwd: string</td>
      </tr>
      <tr>
        <td>PUT</td>
        <td>/user/update/passwd</td>
        <td>Atualiza a senha do usuário logado</td>
        <td>newPass:string, passwd: string</td>
      </tr>
      <tr>
        <td>PUT</td>
        <td>/user/update/email</td>
        <td>Atualiza o email do usuário logado</td>
        <td>newEmail: string, passwd: string</td>
      </tr>
    </tbody>
  </table>
  <hr/>
  
  <table>
    <caption>Rotas de exchanges</caption>
    <tbody>
      <tr>
        <th>Método</th>
        <th>Rota</th>
        <th>Descrição</th>
        <th>Parâmetros ( JSON )</th>
      </tr>
      <tr>
        <td>POST</td>
        <td>/exchange/new</td>
        <td>Cria uma nova exchange na conta do usuário</td>
        <td>name: string, publicKey: string, privateKey: string</td>
      </tr>
      <tr>
        <td>DELETE</td>
        <td>/exchange/delete</td>
        <td>Deleta uma exchange da conta do usuário </td>
        <td>name: string</td>
      </tr>
      <tr>
        <td>PUT</td>
        <td>/exchange/update/name</td>
        <td>Atualiza o nome de uma exchange</td>
        <td>name: string, newName: string</td>
      </tr>
      <tr>
        <td>PUT</td>
        <td>/exchange/update/keys</td>
        <td>Atualiza as chaves de uma exchange</td>
        <td>publicKey: string, privateKey: string</td>
      </tr>
      <tr>
        <td>GET</td>
        <td>/exchange/list</td>
        <td>Lista as exchanges existentes na conta do usuário</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td>POST</td>
        <td>/exchange/search</td>
        <td>Retorna os preços nas exchanges cadastradas na conta do usuário do menor ao maior com a diferença percentual entre eles</td>
        <td>symbol: string (Apenas pares com btc, ex: LTC/BTC), btcQty: float / int</td>
      </tr>
    </tbody>
  </table>
  
  
  <h4>Bibliotecas Utilizadas</h4>
  <ul>
    <li>Express</li>
    <li>mysql2</li>
    <li>Sequelize</li>
    <li>Nodemon (dev)</li>
    <li>Sequelize-cli (dev)</li>
    <li>CCXT</li>
    <li>Express-session</li>
    <li>Bcryptjs</li>
  </ul>
</div>


