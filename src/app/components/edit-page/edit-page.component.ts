import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public blogForm: FormGroup

  constructor(fb:FormBuilder) {
    this.blogForm = fb.group({
      id: [null],
      title:[''],
      body:[''],
      userId:[null]
   })
  }

  ngOnInit(): void {
  }

}
