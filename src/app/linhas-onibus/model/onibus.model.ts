import { OnibusResponse } from '../integration/onibus.response';

export class OnibusModel {
  public readonly id: string;
  public readonly nome: string;
  public readonly codigo: string;

  constructor(onibus: OnibusResponse) {
    this.id = onibus.id;
    this.nome = onibus.nome;
    this.codigo = onibus.codigo;
  }
}
