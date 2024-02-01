Repositório do curso: https://github.com/cod3rcursos/angular-crud

# Introdução
> Esse resumo é também parte da documentação de um projeto que irei implementar com Angular. Se trata de um CRUD focado no estudo do Angular 17. A parte de back-end do projeto será algo mais simples e para constrir-la será usado JSON Server.

# O que é angular
> **Angular** é um Framework, desenvolvido pela Google, focado no desenvolvimento de aplicações Web SPA (single page application), baseadas no uso de componentes.
> ![[0001.png]]

> Componentes são os elementos que exibidos na tela, cada componente no **Angular** possui em si um comportamento (**Typescript**), uma estrutura (**HTML**,) e um estilo (**CSS**).

> Dentro do **Angular** um componente é uma especie de _tag_ personalizada, por exemplo, imaginando um componente chamado "home", teríamos:
> ```
 > <app-home></apphome>
> ```

> E dentro desse componente teríamos a estrutura:
> ![[0002.png]]
> Sendo os componentes organizados dentro de módulos (pacotes).

> As primeiras versões do Angular rodavam com base no **Javascript**, mas boa parte dele foi reescrito para rodar usando **Typescript**.
> ![[0003.png]]

> Assim como o React js ou Next Js as configurações do Angular são feitas por linha de comando, uma _CLI_. A _CLI_ do Angular deve instalada primeiro para que ele possa ser usado.

> 1. Para instalar a CLI do Angular.
> ```
> npm i -g @angular/cli
> ```
> 2. Para criar um projeto Angular.
> ```
> ng new  nome-do-app
> ```
# Inciando o projeto
>```
> npm init -y 
>```

> ![[0004.png]]
> ![[0005.png]]
# Criando o Back-end do projeto

> Com o JSON Server teremos quase uma API Rest pronta para uso com os recursos mais simples como get, put, delete e etc.

- ## Adicionando o JSON Server como uma dependência do projeto.
> ```
> npm i json-server
> ```
> ![[0006.png]]
> ![[0007.png]]
- ## Criando o arquivo de Banco de Dados.
	>Para simular o uso de um banco de dados e uma API Rest iremos utilizar diretamente o arquivo **db.json**.
	>
	> ```
	> {
	> 	"products": [
	> 		{
	> 			"id": 1,
	> 			"name": "Caneta Bic Preta",
	> 			"price": 5.89
	> 		},
	> 		{
	> 			"id": 2,
	> 			"name": "Notebook Mac Pro",
	> 			"price": 12000.89
	> 		},
	> 		{
	> 			"id": 3,
	> 			"name": "Samsumg S20+",
	> 			"price": 5000.89
	> 		}
	> 	]
	> }
	> ```

- ## Inicializando a API
	1. **Definindo o comando de inicialização do** **db.json**.
	> ```
	> "start": "json-server --watch db.json --port 3001"
	> ```
	> ![[0008.png]] 

	2. **Iniciando a API**.
	> ```
	> npm start
	> ```
	> ![[0009.png]]
	> Como o único _"products"_ foi definido como um atributo na API, então esse será o único _endpoint_ encontrado. 

	3. **Testando a chamada com o Postman**.
	> ![[0010.png]]
	> ![[0011.png]]

A

# Preparando o Angular
## Inicio
1. **Instalando o CLI do Angular**
>```
> npm i -g @angular/cli
> ```
> ![[0012.png]]
> No caso do Linux é necessário executar como _sudo_

2. **Criando o projeto**
> ```
> ng new nome-da-pasta --no-standalone --routing --ssr=false
> ```
> 
> Nesse projeto temos:
> ```
> ng new frontend --minimal --no-standalone --routing --ssr=false
> ```
> ![[0013.png]]
> ![[0014.png]]

3. **Verificando a versão do Angular**
> ![[0015.png]]

5. **Executando o projeto**
> Dentro da pasta onde foi criado o projeto Angular, execute:
> ```
> npm start
> ```
> ![[0016.png]]
> ![[0017.png]]

## Configuração no arquivo _angular.json_
> Como esse projeto foi criado utilizando o parâmetro "-- minimal", para ter possuir arquivos mais enxutos. O nosso arquivo de configuração do **Angular** configura a criação das parte em HTML, CSS e Typescript  dos componentes
>  dentro de um único arquivo.
>![[0018.png]]
>E por uma questão de organização e facilidade na escrita de código é interessante mante-los separados.
>![[0019.png]]

## Entendo os arquivos

> Todos os arquivos do projeto ficam dentro da pastar _src_. E os arquivos de configuração dos componentes e dos módulos ficam dentro da pasta _app_.
> ![[0020.png]]

1. **Arquivo de inicialização**
> O arquivo responsável por carregar o nosso componente é o **main.ts***.
> ![[0021.png]]
> Ele aponta para o nosso componente **AppComponent**.
2. **Componente**
> Essa é um exemplo de componente
>![[0022.png]]
> O _templateUrl_ é a propriedade que aponta para o arquivo _html_ que possui as propriedas do nosso componente.
> ![[0023.png]]
> ![[0024.png]]
3. **Arquivo HTML**
> O arquivo HTML é responsável por chamar os componentes que serão exibidos na tela através da propriedade _selector_.
> 
> Como esse um projeto SPA, então só teremos o **index.html**.
>![[0025.png]]
## Instalando o Material Design
> O material Design vai ser uma dependência no projeto que irá nos fornecer uma biblioteca de ícones, parecido com o Framework Bootstrap.

1. **Instalação**
> ```
> ng add @angular/material
> ```
2. **Selecionando a coleção**
> 1.  Antes de inciar a instalação é perguntado qual coleção você deseja adicionar ao projeto, eu vou optar pelo padrão azul.
> ![[0026.png]]
> ---------------------------------------------------------
> 2. Depois é perguntando se também queremos incluir a coleção de tipografia do Material.
> ![[0027.png]]
>---------------------------------------------------------
> 3. E por fim é perguntado se queremos também incluir a biblioteca de animações.
> ![[0028.png]]

# Criando o Front-end do projeto
> Na construção do Front-end iremos explorar muitas propriedades que são providas para o Angular a partir do uso do Material Design, aplicando apenas algumas customizações quando for interessante.
>
> Alguns detalhes do **CSS** da aplicação irão ficar de fora do resumo, por não serem tão relevantes, nas tudo pode ser consultado dentro do repositório do projeto.  
## Aparência do projeto
> A partir desse ponto é isso que iremos construir. 
> 
> **IMG**
>
> **OBS**: A lógica para criar um componente usando o Angular CLI é:
> ```
> ng g c nomeda_pasta/nome-do-componente
> ``` 
> A letra "g" informar para o Angular CLI que queremos o recurso _generet_.
> A letra "c" informar que queremos um _component_.
## Componente Header
>
>```
> ng g c components/template/header
>```
>
> 
>
> ![[0029.png]]
>
> Algo interessante de ser observado é que todas vez que criado algum componente desse tipo, o nosso arquivo **app.modules.ts** é atualizado.
> 
![[0030.png]]

 - **Tool bar**
> Um recursos do _material design_ que iremos adicionar no _header_ é a _tool bar_.
> Para isso devemos ir no nosso arquivo **app.modules.ts** e inserir:
> ```
> import { MatToolbarModule } from '@angular/material/toolbar';
> ```
> Inserindo também a chamada na proprieda _imports_ do arquivo.
>
>![[0031.png]]
 
> ![[0032.png]]
## Componente Footer
> ```
> ng g c components/template/footer
> ```
>![[0033.png]]
>![[0034.png]]
## Componente de navegação
> ```
> ng g c components/template/nav
> ```
> 
> ![[0035.png]]> ![[0036.png]]

## Componente Home
>```
> ng g c views/home
>```

> ![[0037.png]]
> ![[0038.png]]

## Navegação entre componentes

1.  **Instalando a propriedade view**:
>```
>ng g c views/product-crud
>```
>![[0039.png]]
2. **Configurando as rotas**
> No arquivo _app-routing.module.ts_ informe os diretórios.
> - Antes: 
> ![[0040.png]]
> - Depois:
> ![[0041.png]]
> Para finalizar, adicione a propriedade _routerLink_ no link do componente.
> Indo em _nav.component.html_
> 
> ![[0042.png]]
## Componente de criação
> Adicionando o componente para acessar o menu de cadastro no sistema.
> ```
> ng g c components/products/product-create
> ```
> ![[img/0044.png]]
>  1. **Adicionando o botão**
>  Em _app.modules.ts_:
>  ```
>  import { MatButtonModule } from '@angular/material/button';
>  ```
>  ![[0045.png]]
>  2. **Implementando a função**
>  ![[0046.png]]
>  ![[0047.png]]
>  ![[0048.png]]
>  ![[0049.png]]
## Criando o componente de cadastro
> Aqui é interessante a aplicar o padrão de projeto _singleton_ para garantir um melhor reuso dos componentes.
> 
> 1. **Criando a interface do produto.**
> ![[0050.png]]
> O reenchimento do **id**  é opcional no front-end, mas será ele será autoincrementado no back-end.
> ---
>
> 2. **Criando o meu _angular service_.**
> ```
> ng g s components/pasta/nome_do_service
> ``` 
> 
> ```
> ng g s components/product/product
> ``` 
> ![[0051.png]]
> ![[0052.png]]
>  ![[0053.png]]
> ---
> 3. **Implementando os componentes.**
> ![[0054.png]]
> --- 
> 4. **Cirando o componente**
> ![[0055.png]]
> ![[0056.png]]
## Implementando o método create
> Aqui vamos implementar a conexão do Front-end e do Back-end para quando o houver uma a opção "criar" for chamada pelo usuário.
> Aqui também será aplicado o padrão "observer" de forma bem simples para monitorar as requisições.
> 
> 1. Chamando o _modulo_ http do **Angular**.
>![[0057.png]]
>---
>1. **Implementando o método _create_**.
> ![[0058.png]]
> ---
> 1. **Adicionando  a requisição de _create()_ no componente _criar produto_**.
> ![[0059.png]]
> O método _subscribe(...)_ serve para monitorar a chegada da requisição ao Back-end, quando tudo ocorre bem ela exibe a mensagem "Produto adicionado" e retorna para a tela de produto.
>----
> 4. **Resultado**.
>![[0060.png]]
>![[0061.png]]

## Criando o formulário de cadastro
> Aqui será realizada a construção do menu de cadastro dos produtos, em forma de formulário.
> 
> 1. **Fazendo os _imports_ necessários.**
> ![[0062.png]]
> ----
> 2. **Exibindo os componentes na tela.**
> ![[0063.png]]
> _[(ngModel)]="product...";_ serve como uma diretiva não estrutural  para conectar o elemento ao componente _Product_.
> ---
> 3. **Resultado.**
> ![[0064.png]]![[0065.png]]

## Criando o componente de leitura.
> Nessa etapa vamos implementar a parte de **Read** do CRUD.
> 
>1.  **Criando o componente**
> ```
>  ng g c components/product/product-read
> ```
> ![[0066.png]]
> ----
> 2. **Implementando o método no service.**
> ![[0067.png]]
> ----
> 3. **Implementando o componente.** 
> ![[0068.png]]
> ---
> 4. **Testando a requisição.**
> ![[0069.png]]
>----
> 5. **Exibindo produtos na tela.**
> Usando uma diretiva estrutural para testar a chamada
>![[0070.png]]
> ![[0071.png]]
>---
> 6. **Criando a tabela.**
> Para criar a tabela vamos utilizar um template fornecido pelo Angular schematics.
> ```
> ng generate @angular/material:table components/product/nome-componente
> ```
> ```
> ng generate @angular/material:table components/product/product-read-table
> ```
>![[0072.png]]
> ![[0073.png]]
> ![[0074.png]]
> ---
>  7. **Customizando a tabela.**
> Para facilitar o processo algumas coisas foram removidas por enquanto, por exemplo a remoção da função de _Sort_.
> ![[0075.png]]
> ![[0076.png]]
## Criando o componente de edição.
> Agora vamos criar a função de _update_ do nosso crud, usando uma operação de _put_.
> 
> 1. **Cirando o componente.**
> ```
> ng g c components/product/product-update
> ```
> ![[0077.png]]
> ---
> 2. **Implementando o service.**
> ![[0078.png]]
> ----
> 3. **Criando a rota do componente.**
> ![[0079.png]]
> ---
> 4. **Implementando o método update.**
> ![[0080.png]]
> ---
> 5. **Criando o componente na tela.**
> ![[0081.png]]
> ![[0082.png]]
> ---
> 6. **Implementando o componente.**
> ![[0083.png]]
> ![[0084.png]]
> ![[0086.png]]
## Criando o componente de exclusão.
> Nesse ponto iremos criar a função de _Delete_ do nosso crud.
> 1. **Implementando o service.**
> ![[0086.png]]
> ---
> 2. **Criando o componente.**
> ```
> ng g c components/product/product-delete
> ```
> ![[0087.png]]
>---
> 3. **Implementando a rota.**
> ![[0088.png]]
> ----
> 4. **Implementando o método delete.**
> ![[0089.png]]
> ----
> 5. **Escrevendo o componente.**
> ![[0090.png]]
>  ---
> 6. **Exibindo o componente na tela.**
> ![[0091.png]]
> ![[0092.png]]
> ![[0093.png]]
> ---
## Criando mensagens de erro.
> 1. **Escrevendo a função de erro.**
> ![[0094.png]]
> ----
> 2. **Fazendo a chamada da função que trata o erro.**
> ![[0095.png]]
> ---
## Editando o cabeçalho das janelas.
> 1. **Criando a interface model.**
> ![[0096.png]]
> ----
> 2. **Criando o service.**
> ```
> ng g s components/template/header/header
> ```
> ![[0097.png]]
> ---
> 3. **Implementando o service.**
> ![[0098.png]]
> ----
> 4. **Criando o componente header.**
> ```
> ng g c components/template/header/header
> ```
> ![[0099.png]]
----
> 
> 5. **Implementando o componente.**
> ![[0100.png]]
> ---
> 6. **Implementando a interface no componente Home.**
> ![[0101.png]]
> ---
> 7. **Implementando a interface no componente CRUD.**
> ![[0102.png]]
> ----
> 8.**Ajustando o componente Header.**
> ![[0103.png]]
> ![[0105.png]]
> ![[0106.png]]