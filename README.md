# Atividade-N2-Web3✴️
<h2>This is a short file Readme for an exercise.</h2>
<p>Como proposto na atividade, aqui consta a documentação de uma api fictícia. Um exercício desenvolvido como forma de treinar os conhecimentos ao longo da disciplina. A api consiste em um CRUD para um sistema de gerenciamento de clientes cujos atributos são: <code><strong>nome</strong></code>, <code><strong>cpf</strong></code>, <code><strong>email</strong></code>, <code><strong>cidade</strong></code> e <code><strong>telefone</strong></code> </p>

<nav>
  <strong>Sumário </strong>
  <ol>
    <li><a href="#init">Iniciar projeto</a></li>
    <li><a href="#endpoints">End Points</a></li>
    <li><a href="#exemplos">Exemplos</a></li>
    <li><a href="#requisitos">Requisitos</a></li>
  </ol>
</nav>
<br/>
<h2 id="init">Iniciar Projeto</h2>

<p>Este projeto foi desenvolvido em Node.js, sobretudo utilizando Express. Assim, para sua execução é necessário garantir que sua máquina já possua o node instalado e configurado, bem como todas as dependências presentes na aplicação</p>
<h3>Passos para execução</h3>
<ul>
  <li><i>Instalar dependências: <code>npm install</code> </i></li>
  <li><i>Rodar projeto: </i><code>node ./app.js</code></li>
</ul>
<br/>
<h2 id="endpoints">EndPoints</h2>

<p>Aplicação, como já anunciado, destaca-se pela apresentação de um CRUD. Dessa forma, ele conta com os seguintes endpoints: </p>
<ul>
  <li>Create: <code> https://atividade.n2.com/client/create </code>, method: <mark>POST</mark> </li>
  <li>Read: <code> https://atividade.n2.com/client/all </code>, method: <mark>GET</mark> </li>
  <li>Read: <code> https://atividade.n2.com/client/one/:id </code>, method: <mark>GET</mark> </li>
  <li>Update: <code> https://atividade.n2.com/client/update/:id </code>, method: <mark>PUT</mark> </li>
  <li>Delete: <code> https://atividade.n2.com/client/delete/:id </code>, method: <mark>DELETE</mark> </li>
</ul>
<br/>

<h2 id="exemplos">Exemplos</h2>

<table>
  <thead>
    <th>Endpoint</th>
    <th>Descrição</th>
    <th>Parâmetros</th>
    <th>Retorno</th>
  </thead>
  <tbody>
    <tr>
      <td> https://atividade.n2.com/client/create </td>
      <td> Adicionar cliente ao banco </td>
      <td> { nome, cpf, email, cidade, telefone }  </td>
      <td>
        <pre>
          <code>
              {
                nome: "José",
                cpf: "123.456.789-01"
                email: "jose@gmail.com"
                cidade: "Farias Brito"
                telefone: "88 0007-2956"
              }
          </code>
        </pre>
      </td>
    </tr>
    <tr>
      <td> https://atividade.n2.com/client/all </td>
      <td> Requisitar todos os clientes do banco </td>
      <td> - </td>
      <td>
        <pre>
          <code>
            [
              {
                nome: "José",
                cpf: "123.456.789-01"
                email: "jose@gmail.com"
                cidade: "Farias Brito"
                telefone: "88 0007-2956"
              },
              {
                nome: "Alisson",
                cpf: "000.111.444-10"
                email: "alisson@gmail.com"
                cidade: "Crato"
                telefone: "88 4002-8922"
              },
            ]
          </code>
        </pre>
      </td>
    </tr>
    <tr>
      <td> https://atividade.n2.com/client/one/:id </td>
      <td> Requisitar um cliente específico </td>
      <td> id </td>
      <td>
        <pre>
          <code>
              {
                nome: "José",
                cpf: "123.456.789-01"
                email: "jose@gmail.com"
                cidade: "Farias Brito"
                telefone: "88 0007-2956"
              }
          </code>
        </pre>
      </td>
    </tr>
    <tr>
      <td> https://atividade.n2.com/client/update/:id </td>
      <td> Atualizar dados do cliente </td>
      <td> id - { nome, cpf, email, cidade, telefone } </td>
      <td>
        <pre>
          <code>
              {
                nome: "José",
                cpf: "123.456.789-01"
                email: "jose@gmail.com"
                cidade: "Farias Brito"
                telefone: "88 0007-2956"
              }
          </code>
        </pre>
      </td>
    </tr>
    <tr>
      <td> https://atividade.n2.com/client/delete/:id </td>
      <td> Deletar cliente </td>
      <td> id </td>
      <td>
        <pre>
          <code>
              {
                message: "cliente deletado com sucesso"
              }
          </code>
        </pre>
      </td>
    </tr>
  </tbody>
</table>
<br/>

<h2 id="requisitos">Requisitos</h2>

<ul>
  <li><i>Node instalado</i></li>
  <li><i>Dependências do projeto instaladas</i></li>
  <li><i>Ambiente capaz de consumir a api</i></li>
</ul>
