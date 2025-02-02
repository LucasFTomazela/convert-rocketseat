// Cotação de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP =  6.08

// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Quero capturar o valor do input conforme a pessoa insere conteúdo
amount.addEventListener("input", () => {

  const hasCharectersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharectersRegex, "")
})

// Captura o evento de submit(enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault()
//  console.log(currency.value)
  switch (currency.value) {
    case "USD": 
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR": 
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP": 
      convertCurrency(amount.value, GBP, "£")
      break
  }

}

// Função para converter a moeda
function convertCurrency(amount, price, symbol){
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calcula o total.
    // let total = String(amount * price).replace(".", ",")
    let total = amount * price

    // Verifica se o resultado não é um número.
    if(isNaN(total)){
      return alert("Por favor, digite o valor corretamente para converter")
    }

    // Formata o valor total.
    total = formatCurrencyBRL(total).replace("R$", "")

    // Exibir o resultado total.
    result.textContent = `${total} Reais`

    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result")
    
  } catch (error) {
    // Remove a classe do footer removendo ele da tela.
    footer.classList.remove("show-result")
    
    console.log(error)
    alert("Não foi possivel converter. Tente novamente mais tarde!")
  }
}

// Formata a moeda para real Brasileiro.
function formatCurrencyBRL(value){
  // Converte para nímero para utilizar o toLocaleString para formatar para o padrão BRL(R$ 00,00).
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  }) 
}