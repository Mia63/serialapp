import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SerialService } from 'src/app/services/serial/serial.service';
import { Serial } from '../../models/serial.model';

@Component({
  selector: 'app-edit-serial-view',
  templateUrl: './edit-serial-view.component.html',
  styleUrls: ['./edit-serial-view.component.css']
})
export class EditSerialViewComponent implements OnInit {

  serial: Serial | undefined;
  editSerialForm: FormGroup;

  constructor(
    private serialService: SerialService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    //Getting param from URL
    const id = this.activatedRoute.snapshot.params['id'];
    this.serial = this.serialService.findOneById(+id);

    this.editSerialForm = this.formBuilder.group({
      name: [this.serial.name, [Validators.required]],
      releasedAt: [this.serial.releasedAt.toISOString().substr(0, 10), [Validators.required]],
      nbOfSeasons: [this.serial.nbOfSeasons , [Validators.required]],
      description: [this.serial.description, [Validators.required]],
      critique: [this.serial.critique , [Validators.required]],
    });
  }

  onSubmit() {
    this.serialService.editSerial(this.serial);
    this.route.navigate(['serial']);
  }

}
