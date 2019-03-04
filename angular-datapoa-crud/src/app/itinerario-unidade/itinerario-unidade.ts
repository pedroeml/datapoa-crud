import { Coordenadas } from './coordenadas';

export class ItinerarioUnidade {
  constructor(public id: string, public nome: string, public codigo: string, public coordenadas: Coordenadas[]) { }
}
