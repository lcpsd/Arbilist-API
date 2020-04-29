<h1 align="center"> Arbilist API </h1>

# <h4>API que recupera e compara valores de diferentes exchanges cadastradas para mostrar os melhores preços de compra e venda com o intuíto de ajudar em operações de arbitragem com criptomoedas</h4> 

<div>
  <p>Projeto api simples que registra projetos e tarefas para os mesmos.</p>
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
  
  <h2>Pendências</h2>
  <ul>
    <li>Criar relacionamento no banco de dados para cadastrar exchanges de acordo com o usuário logado</li>
  </ul>
</div>
