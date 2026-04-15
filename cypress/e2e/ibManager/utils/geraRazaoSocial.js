function geraRazaoSocial() {
  const nomes = ['Silva', 'Souza', 'Lima', 'Costa', 'Oliveira', 'Pereira', 'Ferreira', 'Almeida', 'Santos', 'Barros'];
  const tipos = ['Comercial', 'Serviços', 'Consultoria', 'Tecnologia', 'Alimentos', 'Transportes', 'Construções', 'Distribuidora'];
  const sufixos = ['Ltda.', 'S.A.', 'ME', 'EPP'];

  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const tipo = tipos[Math.floor(Math.random() * tipos.length)];
  const sufixo = sufixos[Math.floor(Math.random() * sufixos.length)];

  return `${tipo} ${nome} ${sufixo}`;
}
module.exports = {geraRazaoSocial};