<table>
<tr>
<td>
<a href= "https://www.rockwellautomation.com/pt-br.html"><img src="./docs/img/logo-rockwell.png" alt="Rockwell Automation" border="0" width="70%"></a>
</td>
<td><a href= "https://www.inteli.edu.br/"><img src="./docs/img/logo-inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="30%"></a>
</td>
</tr>
</table>

# Projeto: *Roots*

# Grupo: *GraphHopper*

# Integrantes:

* [Gabriel Gallo] <Gabriel.Coutinho@sou.inteli.edu.br>
* [Giuliano Bontempo] <Giuliano.Domiciano@sou.inteli.edu.br>
* [Henrique Burle] <Henrique.ferreira@sou.inteli.edu.br>
* [Marcelo Maia] <Marcelo.Filho@sou.inteli.edu.br>
* [Raab Iane] <Raab.Silva@souinteli.edu.br>
* [Vinicius Kenji] <Vinicius.Kumagai@sou.inteli.edu.br>

# Descrição

Desenvolvido em colaboração com a ROCKWELL AUTOMATION, o ROOTS é um algoritmo gráfico de alto desempenho. Ele agiliza a produção de cerveja otimizando as rotas de transferência, minimizando o trânsito estágio a estágio e aproveitando os recursos existentes de forma eficaz.

Link do site: l2z4p6-5173.csb.app

# Documentação

Os arquivos da documentação deste projeto estão na pasta [/docs](/docs).

# Artigo

Os arquivos do artigo estão na pasta [/artigo](/artigo). 

O conteúdo deste artigo foi elaborado como parte das atividades de aprendizado dos alunos, mas precisa ser revisto e modificado caso haja a intenção de submetê-lo para uma eventual publicação.

# Configuração para desenvolvimento

## Front-end

Para acessar e editar o front-end da aplicação, é necessário um programa editor de código-fonte (ex: Visual Code Studio). Após a instalação do ambiente de edição de código, deve-se abrir a pasta do projeto, instanciar um terminal e adicionar os códigos:

```
cd codigo\frontend\roots\src
npm install --force
npm run dev
```

Após a execução as linhas de código acima (uma por vez) caso haja erro, verifique os guias de instalação do React e JSX e as permissões do programa. Se todas as linhas forem executadas sem erro, o front-end está pronto para ser editado e executado.

## Back-End

### Pré-requisitos

- Instalação do [Neo4j Desktop](https://neo4j.com/download/).
- Conexão ativa com a internet (para download de dependências).

### Configurando no Neo4j Desktop

1. **Instalação do Neo4j Desktop**:
   - Após o download, siga as instruções de instalação.
   - Inicie o Neo4j Desktop após a instalação.

2. **Criação do Banco de Dados**:
   - Clique em "New Project" e nomeie-o.
   - No projeto, clique em "Add Database" e "Create a Local DBMS".
   - Forneça um nome, defina uma senha e selecione a versão desejada do Neo4j.
   - Clique em "Create".

3. **Inicialização**:
   - Clique no botão "Start" para inicializar.
   - Após a inicialização, clique em "Open with Neo4j Browser".
   - No navegador, insira a senha definida anteriormente.
   
4. **Conexão ao Projeto**:
   - Use a URL: `bolt://localhost:7687`
   - Usuário: `neo4j`
   - Senha: Definida na criação.

5. **Encerrando**: Lembre-se de parar o banco de dados após o uso.

### Usando o Neo4j Aura

Se você está buscando uma solução baseada na nuvem, o Neo4j Aura é uma excelente opção:

1. **Registro e Login**:
   - Acesse [Neo4j Aura](https://neo4j.com/cloud/aura/).
   - Se ainda não tiver uma conta, crie uma. Caso contrário, faça o login.

2. **Criação do Banco de Dados**:
   - No painel de controle, clique em "Create Database".
   - Escolha a configuração desejada (versão do Neo4j, tamanho da instância, região de hospedagem etc.).
   - Defina um nome e uma senha para seu banco de dados e clique em "Create".

3. **Conexão ao Projeto**:
   - Uma vez criado o banco de dados, você receberá detalhes de conexão. Anote o URL de conexão BOLT ou NEO4j, usuário e senha.
   - No seu projeto, configure a conexão utilizando esses detalhes. A URL de conexão BOLT geralmente tem o formato: `bolt+routing://<your-db-id>.databases.neo4j.io`
   
4. **Administração e Monitoramento**:
   - Utilize o painel de controle do Neo4j Aura para monitorar a saúde, o desempenho e os recursos utilizados pelo seu banco de dados. Aqui, você também pode fazer backups, restaurar instâncias e ajustar configurações conforme necessário.

5. **Importante**: O Neo4j Aura é uma solução paga com diferentes planos de preços. Certifique-se de escolher o plano que melhor se adapta às necessidades e ao orçamento do seu projeto.

# Tags

- SPRINT 1:
    - Entendimento do contexto do problema: modelagem e representação
    - Entendimento de Negócio
    - Entendimento da Experiência do Usuário
- SPRINT 2:
    - Entendimento do contexto do problema
    - Gerenciamento do Grafo
    - Artigo - versão inicial
    - Repositório do Código
- SPRINT 3:
    - Back-end da aplicação
    - Front-end da aplicação
    - Repositório de código da aplicação
    - Artigo - Motivação, metodologia e revisão bibliográfica
- SPRINT 4:
    - Complexidade e corretude do algoritmo
    - Aplicação integrada
    - Repositório de código da aplicação
    - Artigo - Resultados e conclusões
- SPRINT 5:
    - Refinamento da aplicação
    - Artigo completo
    - Apresentação Final
    - Refinamento e validação dos artefatos de negócio


# Licença

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/2023M5T5-Inteli/grupo4">graphhopper</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.inteli.edu.br">Gabriel Gallo, Giuliano Bontempo, Henrique Burle, Marcelo Maia, Raab Iane, Vinicius Kenji, Inteli</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>
