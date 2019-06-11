import { CoordenadasModel } from './coordenadas.model';

export class ItinerarioUnidadeModel {
  constructor(public id: string, public nome: string, public codigo: string, public coordenadas: CoordenadasModel[]) { }
}
