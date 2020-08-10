import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'


const cliente1 = new Cliente("Rafael Risalte", 12345678910);
const cliente2 = new Cliente("Alice Borges", 98765432198);

const contaCorrenteRafael = new ContaCorrente(cliente1, 1001);
contaCorrenteRafael.depositar(500);

const contaCorrenteAlice = new ContaCorrente(cliente2, 1001);

contaCorrenteRafael.transferir(200, contaCorrenteAlice)

console.log(contaCorrenteRafael);
console.log(contaCorrenteAlice);

console.log(`Total de contas correntes: ${ContaCorrente.numeroDeContas}`);
