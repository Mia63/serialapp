import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Serial } from 'src/app/models/serial.model';
import { SerialService } from '../../services/serial/serial.service';

@Component({
  selector: 'app-new-serial-view',
  templateUrl: './new-serial-view.component.html',
  styleUrls: ['./new-serial-view.component.css']
})
export class NewSerialViewComponent implements OnInit {

  newSerialForm: FormGroup

  constructor(
    private serialService: SerialService,
    private route: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.newSerialForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      releasedAt: ['', [Validators.required]],
      nbOfSeasons: [1 , [Validators.required]],
      description: ['', [Validators.required]],
      critique: ['', [Validators.required]],
    })
  }

  /**
   * Creates new Serial and ask SerialService to save it
   */
  onSubmit() {
    const name = this.newSerialForm.value.name;
    const releasedAt = this.newSerialForm.value.releasedAt;
    const nbOfSeasons = Number(this.newSerialForm.value.nbOfSeasons);
    const description = this.newSerialForm.value.description;
    const critique = this.newSerialForm.value.critique;

    const newSerial = new Serial(name, releasedAt, nbOfSeasons, description, critique, '');
    this.serialService.addNewSerial(newSerial);
    this.route.navigate(['serial']);
  }

}
