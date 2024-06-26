/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }
}*/



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private prices = {
    seo: 300,
    advertising: 400,
    website: 500
  };

  constructor() {}

  calculateBudget(values: any): number {
    let total = 0;
    if (values.seo) {
      total += this.prices.seo;
    }
    if (values.advertising) {
      total += this.prices.advertising;
    }
    if (values.website) {
      total += this.prices.website;
    }
    return total;
  }
}


