// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Quero capturar o valor do input conforme a pessoa insere conteúdo
amount.addEventListener("input", () => {

  const hasCharectersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharectersRegex, "")
})

// Captura o evento de submit(enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault()
  console.log(currency.value)
}