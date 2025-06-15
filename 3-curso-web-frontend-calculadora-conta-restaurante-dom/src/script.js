/* Desafio: Criar uma calculadora de conta de restaurante
    Requisitos:
    1. Receber o número de pessoas na mesa.
    2. Receber o valor total da conta.
    3. Permitir a escolha do método de pagamento (PIX, dinheiro ou cartão).
    4. Aplicar um desconto de 10% se o pagamento for via PIX ou dinheiro.
    5. Calcular o valor que cada pessoa deve pagar e exiba o resultado.
*/

// Constante com o valor do desconto (10%)
const desconto = 0.10 

// Array com as formas de pagamento que têm direito a desconto
const formaDesconto = ["pix", "dinheiro"] 

// Função que verifica se a forma de pagamento está no array (tem desconto)
const temDesconto = (formaPagamento) => {
    // Converte para minúsculo e verifica se está no array formaDesconto
    return formaDesconto.includes(formaPagamento.toLowerCase());
};

// Função que calcula o valor total com desconto (se aplicar)
const aplicaDesconto = (valorTotal, formaPagamento) => {
    // Se a forma tem desconto, aplica 10% de desconto, senão retorna valor normal
    return temDesconto(formaPagamento) ? valorTotal * (1 - desconto) : valorTotal;
};

// Função que calcula quanto cada pessoa deve pagar
const calculaValorPorPessoa = (valorTotalComDesconto, numeroPessoas) => {
    // Se número de pessoas for maior que zero, divide o valor pelo número
    // Caso contrário, retorna 0 (evita divisão por zero)
    return numeroPessoas > 0 ?  valorTotalComDesconto / numeroPessoas : 0;
};

// Função que valida os dados recebidos no formulário
const validarDados = ({ numeroPessoas, valorTotal }) => {
    // Verifica se número de pessoas e valor total são números válidos e maiores que zero
    return !isNaN(numeroPessoas) && numeroPessoas > 0 && !isNaN(valorTotal) && valorTotal > 0;
};

// Função principal que calcula a conta e retorna resultado ou erro
function calcularConta( {numeroPessoas, valorTotal, formaPagamento} ) {
    // Se dados inválidos, retorna um objeto com a propriedade "error" contendo a mensagem
    if (!validarDados({ numeroPessoas, valorTotal })) {
        return { 
            error: "Dados inválidos. Preencha os dados corretamente." 
        };
    }

    // Aplica desconto conforme forma de pagamento
    const totalComDesconto = aplicaDesconto(valorTotal, formaPagamento);
    // Calcula o valor que cada pessoa deve pagar
    const valorPorPessoa = calculaValorPorPessoa(totalComDesconto, numeroPessoas);

    // Retorna os valores formatados com duas casas decimais
    return {
        totalComDesconto: parseFloat(totalComDesconto.toFixed(2)),
        valorPorPessoa: parseFloat(valorPorPessoa.toFixed(2))
    }
}

// DOM
// Evento que escuta o envio do formulário (submit)
document.querySelector(".formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página

    // Pega os valores do formulário, tratando vírgula para ponto decimal
    const valorTotal = parseFloat(document.getElementById("valorConta").value.replace(",", "."));
    const metodoPagamento = document.getElementById("metodoPagamento").value;
    const numeroPessoas = parseInt(document.getElementById("numPessoas").value);

    // Chama a função que calcula a conta
    const resultado = calcularConta({ numeroPessoas, valorTotal, formaPagamento: metodoPagamento });

    // Pega os elementos do modal para mostrar mensagem e resultados
    const modalResultado = document.getElementById("modalResultado");
    const mensagemErro = document.getElementById("mensagemErro");
    const resultadoTotal = document.getElementById("resultadoTotal");
    const resultadoPorPessoa = document.getElementById("resultadoPorPessoa");

    // Se a função retornar erro, mostra mensagem de erro no modal
    if (resultado.error) {
        mensagemErro.textContent = resultado.error; // coloca texto do erro
        mensagemErro.style.display = "block"; // mostra mensagem de erro

        resultadoTotal.textContent = ""; // limpa resultado total
        resultadoPorPessoa.textContent = ""; // limpa valor por pessoa

        modalResultado.style.display = "flex"; // abre o modal
        document.getElementById("containerPrincipal").classList.add("escurecido"); // escurece fundo

        return; // para a execução para não mostrar resultados
    }

    // Se não houve erro, esconde a mensagem de erro
    mensagemErro.style.display = "none";

    // Preenche os resultados com os valores calculados
    resultadoTotal.textContent = `Total com desconto: R$ ${resultado.totalComDesconto}`;
    resultadoPorPessoa.textContent = `Valor por pessoa: R$ ${resultado.valorPorPessoa}`;

    modalResultado.style.display = "flex"; // abre o modal para mostrar resultados
    document.getElementById("containerPrincipal").classList.add("escurecido"); // escurece fundo
});

// Evento que fecha o modal quando botão "Concluir" é clicado
document.getElementById("fecharModal").addEventListener("click", function() {
    const modalResultado = document.getElementById("modalResultado");
    modalResultado.style.display = "none"; // esconde o modal

    // Remove o escurecimento do fundo
    document.getElementById("containerPrincipal").classList.remove("escurecido");
});