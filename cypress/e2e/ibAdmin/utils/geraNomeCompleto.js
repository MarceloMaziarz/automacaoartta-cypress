function gerarNomeCompleto() {
  const nomes = ['Ana', 'Lucas', 'Mariana', 'Carlos', 'Fernanda', 'João', 'Beatriz', 'Pedro', 'Camila', 'Rafael'];
  const sobrenomes = ['Silva', 'Souza', 'Oliveira', 'Pereira', 'Costa', 'Rodrigues', 'Almeida', 'Nascimento', 'Lima', 'Gomes'];

  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];

  return `${nome} ${sobrenome}`;
}
module.exports = {
  gerarNomeCompleto
};