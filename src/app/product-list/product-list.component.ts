import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('Su producto ha sido vendido!');
  }
  onNotify() {
    window.alert('Se notificará cuando su producto se haya vendido');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/ 