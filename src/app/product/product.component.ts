import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  article: FormGroup;
  id: number = 1;
  constructor(private p: FormBuilder) {

  }

  ngOnInit() {
    this.article = this.p.group({
      id: [''],
      name: [''],
      center: ['']
    })
  }

  onSubmit() {
    this.article.patchValue({
      id: this.article.controls.id.value,
      name: this.article.controls.name.value,
      center: this.article.controls.center.value
    });

    console.log(this.article.value)
  }

}
