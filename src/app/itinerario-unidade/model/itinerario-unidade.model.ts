import { CoordenadasModel } from './coordenadas.model';
import { ItinerarioUnidadeResponse } from '../integration/itinerario-unidade.response';

export class ItinerarioUnidadeModel {
  public readonly id: string;
  public readonly nome: string;
  public readonly codigo: string;
  public readonly coordenadas: CoordenadasModel[];

  constructor(itinerario: ItinerarioUnidadeResponse, coords: CoordenadasModel[]) {
    this.id = itinerario.idlinha;
    this.nome = itinerario.nome;
    this.codigo = itinerario.codigo;
    this.coordenadas = coords;
  }
}
