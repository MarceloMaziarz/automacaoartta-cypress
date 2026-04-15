function geraCNPJ() {
  const rand = (n) => Math.floor(Math.random() * n);
  const mod = (base, peso) => {
    let soma = 0;
    for (let i = 0; i < base.length; i++) {
      soma += parseInt(base[i]) * peso[i];
    }
    let resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  let cnpj = Array.from({ length: 8 }, () => rand(10)).join('') + '0001';
  let base = cnpj.split('');

  const peso1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const dig1 = mod(base, peso1);
  base.push(dig1.toString());

  const peso2 = [6].concat(peso1);
  const dig2 = mod(base, peso2);
  base.push(dig2.toString());
 
  return base.join('');
}

module.exports = {
  geraCNPJ
};