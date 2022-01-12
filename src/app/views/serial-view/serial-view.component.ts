import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serial } from 'src/app/models/serial.model';
import { SerialService } from '../../services/serial/serial.service';

@Component({
  selector: 'app-serial-view',
  templateUrl: './serial-view.component.html',
  styleUrls: ['./serial-view.component.css']
})
export class SerialViewComponent implements OnInit {
  serial: Serial | undefined;

  constructor(
    private serialService: SerialService,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    //Getting param from URL
    const id = this.route.snapshot.params['id']
    this.serial = this.serialService.findOneById(+id);
  }

}
