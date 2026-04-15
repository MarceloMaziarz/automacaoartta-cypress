export function gerarEmail() {
  const random = Math.floor(Math.random() * 100000)
  return `teste${random}@email.com`
}