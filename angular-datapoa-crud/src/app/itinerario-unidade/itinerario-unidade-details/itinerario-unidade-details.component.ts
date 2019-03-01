import { Component, OnInit } from '@angular/core';

import { ItinerarioUnidadeService } from '../itinerario-unidade.service';
import { ItinerarioUnidade } from '../itinerario-unidade';

@Component({
  selector: 'app-itinerario-unidade-details',
  templateUrl: './itinerario-unidade-details.component.html',
  styleUrls: ['./itinerario-unidade-details.component.css']
})
export class ItinerarioUnidadeDetailsComponent implements OnInit {
  unidadeId: string;
  itinerario: ItinerarioUnidade;

  constructor(private itinerarioUnidadeService: ItinerarioUnidadeService) { }

  ngOnInit() {
    this.unidadeId = '';
  }

  getItinerario(): void {
    this.itinerarioUnidadeService.getItinerario(this.unidadeId).subscribe(itinerario => this.itinerario = itinerario);
  }

}
