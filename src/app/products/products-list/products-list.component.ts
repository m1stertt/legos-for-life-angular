import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../shared/products.service';
import {ProductDto} from '../shared/product.dto';

@Component({
  selector: 'app-inno-tech-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: ProductDto[] | undefined;


  constructor(private _productService: ProductsService) {
  }

  ngOnInit(): void {
    this.updateList()
  }

  delete(product: ProductDto) {
    this._productService.delete(product.id).subscribe(() => this.updateList());
  }

  updateList(): void {
    this._productService.getAll()
      // Not until this is called the request is sent
      .subscribe(products => {
        this.products = products;
      });
  }
}
