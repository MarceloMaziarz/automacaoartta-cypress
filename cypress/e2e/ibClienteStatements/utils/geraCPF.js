function geraCPF(comPontos = false) {
  const rand = () => Math.floor(Math.random() * 9);
  const n = Array.from({ length: 9 }, rand);

  const calcDv = (base) => {
    const sum = base.reduce((acc, num, idx) => acc + num * (base.length + 1 - idx), 0);
    const dv = 11 - (sum % 11);
    return dv > 9 ? 0 : dv;
  };

  n.push(calcDv(n));
  n.push(calcDv(n));

  const cpf = n.join('');

  return comPontos
    ? `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9)}`
    : cpf;
}
module.exports = {
  geraCPF
};