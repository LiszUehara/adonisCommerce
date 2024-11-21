# Commerce Com Adonis

## 🏃 Executando

Para executar a aplicação, siga estas etapas:

1. Baixando o Repositorio [LiszUehara](https://github.com/LiszUehara/adonisCommerce):
```bash
     git clone
        https://github.com/LiszUehara/adonisCommerce
```

2. Instalando as dependências:
```bash
    $ npm install
```

3. Crie um arquivo para suas variaveis de ambiente (.env), tomando como base o arquivo .env.example

4. Execute as migrações: 
```bash
      npm run dev
```

5. Executando com npm:
```bash
      npm run dev
```

## 🎲 Banco de Dados

Para atender aos requisitos da aplicação, foram desenvolvidas três tabelas principais: users, products e sales. Cada uma desempenha um papel essencial no sistema, armazenando informações relacionadas a usuários, produtos disponíveis e vendas realizadas.

#### **1. User** 👤
Representa os usuários cadastrados no sistema. Ele contém informações pessoais, dados de contato e endereço.

  **Campos:**
  - **id**: Identificador único do usuário.
  - **name**: Nome do usuário.
  - **cpf**: Cadastro de Pessoa Física (CPF).
  - **phone**: Telefone de contato.
  - **email**: Endereço de e-mail do usuário.
  - **password**: Senha de acesso ao sistema.
  - **Endereço**:
    - **street**: Rua do endereço do usuário.
    - **neighborhood**: Bairro.
    - **city**: Cidade.
    - **state**: Estado.
    - **country**: País.
    - **cep**: Código postal.
    - **numberHouse**: Número da residência.
    - **complement**: Informação complementar do endereço (opcional).
  - **createdAt e updatedAt**: Controle de criação e última atualização do registro.


#### **2. Product** 🛍️
Representa os produtos cadastrados no sistema. Ele armazena informações sobre os itens disponíveis para venda, incluindo nome, descrição, preço e estoque.

**Campos:**
- **id**: Identificador único do produto.
- **name**: Nome do produto.
- **description**: Descrição detalhada do produto (opcional).
- **value**: Preço do produto.
- **quantity**: Quantidade disponível em estoque.
- **createdAt e updatedAt**: Controle de criação e última atualização do registro.


#### **3. Sale** 🧾
Representa as vendas realizadas no sistema. Ele é responsável por registrar informações de cada transação, como valores, quantidades e os itens vendidos, além de associar as vendas aos respectivos usuários e produtos.

**Campos:**
- **id**: Identificador único da venda.
- **unityValue**: Valor unitário do produto no momento da venda.
- **quantity**: Quantidade de produtos vendidos.
- **totalValue**: Valor total da venda (calculado com base na quantidade e valor unitário).
- **userId**: Referência ao usuário que realizou a compra (chave estrangeira).
- **productId**: Referência ao produto vendido (chave estrangeira).
- **createdAt e updatedAt**: Controle de criação e última atualização do registro.
