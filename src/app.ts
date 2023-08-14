import PromptSync from "prompt-sync";
import { Conta } from "./Conta";
import { TiposDeConta, Transacao } from "./Transacao";
const prompt = PromptSync();

let data = new Transacao(TiposDeConta.SALARIO);
let conta = new Conta(1200);
