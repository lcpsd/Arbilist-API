<h1 align="center"> Arbilist API </h1>

# <h4>API que recupera e compara valores de diferentes exchanges cadastradas para mostrar os melhores preços de compra e venda com o intuíto de ajudar em operações de arbitragem com criptomoedas</h4> 

<h4>Instruções</h4>
  <ul>
    <li>npm install: instala todos os pacotes</li>
    <li>nodemon index: inicia a aplicação na porta 8787</li>
  </ul>
</h4>

<div>
  <table>
    <tbody><tr>
      <th>Método</th>
      <th>Rota</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>POST</td>
      <td>/finder</td>
      <td>Procura por preços. body: {"symbol":"str/str"}. Ex: "LTC/BTC"</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/newexchange</td>
      <td>Adiciona uma nova exchange. body:{"name":"string", "apikey":"string", "secretKey":"string"}</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/listexchanges</td>
      <td>Lista as exchanges cadastradas. </td>
    </tr>
  </tbody></table>
  
  <h4>Bibliotecas Utilizadas</h4>
 
  <ul>
    <li>Express</li>
    <li>Mysql2</li>
    <li>Sequelize</li>
    <li>Nodemon (dev)</li>
  </ul>
</div>


