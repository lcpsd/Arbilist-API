# <h4>Arbilist é uma API que recupera e compara valores de diversas exchanges para mostrar os melhores preços de compra e vende de criptomoedas</h4> 

<div>
  <h1 align="center"> Simple Projects API </h1>
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
    <li>Criar relacionamento no banco de dados para cadastrar exchanges de acordo com o usuário logado<li>
  </ul>
</div>
