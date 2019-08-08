import { LotacaoResponse } from '../integration/lotacao.response';

export class LotacaoModel {
  public readonly id: string;
  public readonly nome: string;
  public readonly codigo: string;

  constructor(lotacao: LotacaoResponse) {
    this.id = lotacao.id;
    this.nome = lotacao.nome;
    this.codigo = lotacao.codigo;
  }
}
