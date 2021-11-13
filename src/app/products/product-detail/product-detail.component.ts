import { Component, OnInit, Input } from '@angular/core';
import { ProductDto} from "../shared/product.dto";

@Component({
  selector: 'app-inno-tech-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() product?: ProductDto;

  constructor() { }

  ngOnInit(): void {
  }

}
