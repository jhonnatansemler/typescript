import { Negociacao } from './Negociacao';
import { Imprimivel } from './Imprimivel';
import { Igualavel } from './Igualavel';

export class Negociacoes implements Imprimivel, Igualavel<Negociacoes> {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {

        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    consoleLog():void {
        console.log("** NEGOCIACOES **************************************");
        this._negociacoes.forEach((negociacao)=>negociacao.consoleLog());
        console.log("*****************************************************");
    }

    ehIgual(negociacoes:Negociacoes): boolean {
        return JSON.stringify(this._negociacoes)==JSON.stringify(negociacoes.paraArray());
    }
}
