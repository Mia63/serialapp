import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Serial } from 'src/app/models/serial.model';
import { SerialService } from '../../services/serial/serial.service';

@Component({
  selector: 'app-serials-view',
  templateUrl: './serials-view.component.html',
  styleUrls: ['./serials-view.component.css'],
})
export class SerialsViewComponent implements OnInit, OnChanges {
  serials: Array<Serial> = [];

  constructor(private serialService: SerialService) {
    this.serials = this.serialService.serials;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  /**
   * To Delete One Serial and Update View
   * @param id
   */
  onClicDeleteOneSerial(id: number) {
    if (confirm('Etes-vous sur de vouloir supprimer ?')) {
      this.serialService.deleteOneById(id);
      this.serials = this.serialService.serials;
    }
  }
}
