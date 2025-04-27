## Comparador de Combustível

## Execução

1. Clone o repositório ou baixe os arquivos do projeto.
2. No terminal, navegue até a pasta do projeto e instale as dependências:

    ```bash
    npm install
    ```

3. Execute o comando abaixo para rodar o projeto:

    ```bash
    npm start
    ```

O resultado será exibido no terminal, mostrando qual combustível é mais vantajoso em cada posto.

## Estrutura dos arquivos principais

- `combustivel.ts`: Define os tipos e classes de combustível.
- `posto.ts`: Define a classe do posto e a lógica de sugestão.
- `index.ts`: Script principal que instancia os postos e exibe os resultados.

## Descrição do problema

Crie um script usando os conceitos da Orientação a Objetos na linguagem TypeScript para calcular se é mais vantajoso abastecer o carro com Gasolina ou Etanol em certos postos de combustíveis. Você deverá usar os conceitos de classes do TypeScript. 

Basicamente, o programa deve fazer o mesmo que foi solicitado no exercício anterior. Mais precisamente, ele precisa possuir as classes Posto e Combustível. A classe Combustível precisa ter os atributos tipo (GASOLINA ou ETANOL) e preço. Os valores de tipos de combustíveis (GASOLINA e ETANOL) precisam ser declarados como constantes. O atributo preço deve ser um número, uma vez que será usado para cálculo. Por sua vez, a classe Posto precisa ter os atributos nome(nome do posto), gasolina e etanol, sendo que estes dois últimos precisam referenciar os respectivos objetos da classe Combustível.

O cálculo é o seguinte: se "Preço do Etanol"/"Preço da Gasolina" < 0,7 (70%) então é vantajoso abastecer com Etanol. Logicamente, neste cálculo simplista, se está desconsiderando a variação de consumo de cada automóvel com ambos combustíveis. Feito o cálculo, deve ser impresso no console.log() se é vantajoso ou não abastecer com ETANOL no posto. A impressão deve ocorrer usando a notação de String Template/Template Literals (uso de crase ao invés de aspas e uso de ${} para acessar as variáveis). O cálculo e a impressão devem ocorrer dentro do método sugereCombustivel() da classe Posto. Na frase a ser impressa, deve constar o resultado (porcentagem calculada) da equação.

Após a definição da estrutura de classes, o script precisa instanciar/criar pelo menos três objetos postos com seus respectivos combustíveis, passando os valores por construtor. Então, imprimir as sugestões de combustível por meio da chamada do método sugereCombustivel().  