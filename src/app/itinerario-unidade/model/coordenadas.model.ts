import { CoordenadasResponse } from '../integration/coordenadas.response';
export class CoordenadasModel {
  public readonly lat: string;
  public readonly lng: string;

  constructor(coord: CoordenadasResponse) {
    this.lat = coord.lat;
    this.lng = coord.lng;
  }
}
