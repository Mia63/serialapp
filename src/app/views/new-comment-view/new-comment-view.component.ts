import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SerialComment } from 'src/app/models/comment.model';
import { Serial } from 'src/app/models/serial.model';
import { SerialService } from '../../services/serial/serial.service';

@Component({
  selector: 'app-new-comment-view',
  templateUrl: './new-comment-view.component.html',
  styleUrls: ['./new-comment-view.component.css']
})
export class NewCommentViewComponent implements OnInit {

  serial: Serial | undefined;
  newCommentForm: FormGroup

  constructor(
    private serialService: SerialService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.serial = this.serialService.findOneById(+id);

    this.newCommentForm = this.formBuilder.group({
      author: ['', [Validators.required]],
      content: ['', [Validators.required]],
    })
  }

  /**
   * Creates new Serial and ask SerialService to save it
   */
  onSubmit() {
    const author = this.newCommentForm.value.author;
    const content = this.newCommentForm.value.content;

    const newComment = new SerialComment(author, content, new Date());
    this.serial.comments.push(newComment);
    this.serialService.editSerial(this.serial);
    this.route.navigate(['serial/' + this.serial.id]);
  }

}
