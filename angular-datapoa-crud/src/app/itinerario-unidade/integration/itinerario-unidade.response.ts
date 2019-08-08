import { CoordenadasResponse } from './coordenadas.response';

export interface ItinerarioUnidadeResponse {
  idlinha: string;
  nome: string;
  codigo: string;
  [index: number]: CoordenadasResponse;
}
