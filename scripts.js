const amount = document.getElementById("amount");

// Quero capturar o valor do input conforme a pessoa insere conteúdo
amount.addEventListener("input", () => {

  const hasCharectersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharectersRegex, "")
})