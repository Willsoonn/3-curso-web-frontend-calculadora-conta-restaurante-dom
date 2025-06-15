## 🍕 Desafio Restaurante Delícias Express

<img src="https://github.com/user-attachments/assets/7cfd5a5e-017a-4d99-a7c5-ec87989c879a" alt="Post Instagram Pagamento Pix Desconto Simples Azul" width="300">

O restaurante `Delícias Express` quer proporcionar aos seus garçons `uma maneira mais rápida` de calcular o valor total da conta e garantir uma maior agilidade no pagamento. Para isso precisam de um programa que receba:

~~~
1. Receber o número de pessoas na mesa.
2. Receber o valor total da conta.
3. Permitir a escolha do método de pagamento (PIX, dinheiro ou cartão).
4. Aplicar um desconto de 10% se o pagamento for via PIX ou dinheiro.
5. Calcular o valor que cada pessoa deve pagar e exiba o resultado.

~~~

⚠️ O restaurante oferece um desconto de 10% se o pagamento for feito via PIX ou em dinheiro, então o programa precisa ter a opção de inserir o meio de pagamento e calcular automaticamente esse desconto antes de exibir a conta final aos clientes.

## 🚀 Atualização: 
Inclusão de DOM e CSS
Este projeto vai além da simples captura de dados no terminal e utiliza DOM para manipulação dos elementos HTML e CSS para estilização, garantindo que o programa tenha uma interface visual amigável, de acordo com as melhores práticas de design.

## :bulb: Dica

Para esse projeto, você vai aprender um conteúdo novo que é **estruturas condicionais**, como o **`if`**. Essa estrutura permite ao seu programa tomar decisões com base nas condições que você definir. No caso desse desafio, vamos usar o **`if`** para aplicar o desconto de 10% quando o método de pagamento for "PIX" ou "dinheiro".

Além disso, embora esse projeto não exija diretamente, é interessante você entender o conceito de **loops** (ou laços de repetição) em JavaScript. Os **loops** permitem que um bloco de código seja executado várias vezes, e podem ser muito úteis em situações onde precisamos repetir ações (como calcular contas para várias mesas, por exemplo).

Você pode aprofundar mais nos conceitos de **condicionais** e **loops** nos links sugeridos abaixo para melhorar sua solução.

### O seu código precisa funcionar da seguinte maneira: 
<img width="1037" alt="Captura de Tela 2024-09-23 às 18 42 33" src="https://github.com/user-attachments/assets/abb601cb-7816-4b34-9fca-badeed788c74">



## O objetivo deste projeto é praticar os seguintes conceitos:

- **Manipulação de variáveis e constantes** em JavaScript.
- **Operações matemáticas** para cálculos de valores e descontos.
- **Versionamento de código** usando Git e GitHub para colaborar e compartilhar o código do projeto.
- **HTML e CSS** Criação de formulários HTML para coleta de dados.
Estilização com CSS para garantir uma boa usabilidade e design agradável.
Uso de classes e IDs para selecionar e estilizar elementos.

#### O figma

O Figma é uma ferramenta de design colaborativa baseada na web, amplamente utilizada para criar interfaces de usuário, protótipos e layouts para websites e aplicativos. Ele é especialmente popular entre designers e desenvolvedores devido às suas funcionalidades que permitem uma colaboração em tempo real, semelhante a como o Google Docs funciona para textos.

[Link do Figma](https://www.figma.com/design/6zbbS5omjpwit9JACnd9aF/Untitled?node-id=0-1&t=Q5pjufkBxOdCIz4J-1)  



## Instruções

### 1. Fork do Repositório
   - Um "fork" é uma cópia de um repositório que fica no seu perfil GitHub. Você faz um fork para ter uma versão própria do projeto na qual você pode trabalhar. Isso permite que você modifique e experimente o código sem afetar o repositório original.

     
#### Como forkar?

Faça o fork desse repo: [https://github.com/campinho-digital/Como-fazer-um-Fork](https://github.com/campinho-digital/Como-fazer-um-Fork)  


### 2. Após o Fork

- Clonar o Repositório Forkado
  
Abra o terminal ou o Git Bash em seu computador.


### Clone o repositório forkado para o seu computador com o seguinte comando:

~~~javascript
git clone seu_repositorio
~~~


### Navegue até a pasta do repositório clonado:

~~~javascript
cd seu_repositorio
~~~

#### ⚠️ Atenção 

Quando você clona um repositório, o Git cria uma nova pasta no seu sistema contendo todos os arquivos e a estrutura do projeto. Para trabalhar com esse projeto (editar arquivos, rodar scripts, instalar dependências, etc.), você precisa estar dentro dessa pasta. Se não navegar para essa pasta, você estará em uma localização diferente no seu sistema e os comandos que tentar rodar (como npm install ou git) não funcionarão corretamente, pois eles precisam ser executados no diretório correto.


### 3. Instalar Dependências
Se o projeto utiliza npm, você deve instalar as dependências:

~~~javascript
npm install

~~~

#### ⚠️ Atenção 
Se o projeto utiliza o Node.js e tem um arquivo package.json, você precisa rodar npm install para instalar todas as bibliotecas e dependências que o projeto necessita para funcionar. Sem isso, o projeto pode não rodar corretamente.




## :thinking: Cuidado com os dados...

No JavaScript, ao capturar entradas de dados do usuário o retorno dos valores poder ser como **strings** (texto). Isso significa que, mesmo que o usuário digite um número, ele será tratado como uma string pelo programa. 


No entanto, para realizar **operações matemáticas** (como somas, subtrações ou divisões), você precisa trabalhar com **números** (inteiros ou decimais). Tentar realizar operações matemáticas com strings pode gerar resultados inesperados ou erros.

#### O JavaScript nativamente TAMBÉM oferece funções de conversão de dados como parseInt() e parseFloat() para converter strings em números:
~~~javascript

let valor = parseInt(readline.question('Digite um número: '));
console.log(valor + 10); // Agora o resultado será 30, se o usuário digitar 20

~~~

## DOM

O DOM é uma interface de programação que permite ao JavaScript interagir e manipular os elementos HTML de uma página de forma dinâmica. Isso significa que você pode alterar o conteúdo, o estilo e até o comportamento dos elementos HTML em tempo real.

**getElementById()**: Seleciona um elemento com base no seu ID.
Por exemplo:
~~~javascript
const elemento = document.getElementById('meuElemento');
~~~


**querySelector()**: Seleciona o primeiro elemento que corresponde a um seletor CSS. É muito versátil porque você pode usar IDs, classes ou tags.

~~~javascript
const elemento = document.querySelector('.minhaClasse'); // Seleciona o primeiro elemento com a classe "minhaClasse"
const elemento = document.querySelector('#meuID'); // Seleciona o elemento com o ID "meuID"

~~~

**querySelectorAll()**: Seleciona todos os elementos que correspondem ao seletor CSS e retorna uma NodeList.

~~~javascript
const elementos = document.querySelectorAll('.minhaClasse'); // Seleciona todos os elementos com a classe "minhaClasse"

~~~

### Html 

Depois de selecionar um elemento, você pode alterar o seu conteúdo.

innerHTML: Altera o conteúdo HTML de um elemento.
~~~javascript
document.getElementById('meuElemento').innerHTML = 'Novo Conteúdo';

~~~


### 5. Rodando o Projeto
Use o comando `npm start` no terminal para executar o projeto e testar as respostas que você implementou no arquivo index.js.

~~~javascript
npm start
~~~


### 7. Versionamento com Git
Depois de responder às questões e adicionar comentários ao código, você precisa versionar essas alterações usando o Git.

### 8. Enviar o Repositório para o Moodle

Você deve enviar o link do repositório com as questões respondidas para o Moodle, para que o instrutor possa revisar o seu trabalho. O link do GitHub facilita o acesso ao código e também permite que o instrutor veja todo o histórico de commits (versões anteriores do código), o que é útil para acompanhar seu progresso.



#### Links
[Constantes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const)

[Sintaxe e tipos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)

[Diferenças de var const e let](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript)

[Convertendo String para Inteiro](https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript)

[If and Else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)

### Dica Extra:
Quanto mais clara e bem documentada for sua solução, mais chances você tem de impressionar os revisores e aumentar suas chances de aprendizado.

**Boa sorte e bom código!** 🚀📘

