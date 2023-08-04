import { HttpClient } from '@angular/common/http';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'jgw-product-list',

  templateUrl: 'product.component.html',
})
export class ProductsComponent {
  items: [] = [];

  @Input()
  set endpoint(value: string) {
    this.http.get(value).subscribe((response: any) => {
      this.items = response.ResultSet.Listings.Listing.map((item: any) => {
        // console.log(item);

        return {
          productName: item.DisplayName,

          annualFee: item.AnnualFeesAmount,
        };
      });
    });
  }

  constructor(private http: HttpClient) {}
}
