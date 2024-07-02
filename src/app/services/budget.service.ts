/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }
}*/



/*import { Injectable } from '@angular/core';

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
}*/


/*import { Injectable } from '@angular/core';

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
*/


/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private prices = {
    seo: 300,
    advertising: 400,
    website: 500,
    page: 30,
    language: 30
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
      total += this.prices.website + (values.numPages * this.prices.page) + (values.numLanguages * this.prices.language);
    }
    
    return total;
  }
}*/


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private prices = {
    seo: 300,
    advertising: 400,
    website: 500,
    page: 30,
    language: 30
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
      total += this.prices.website + (values.numPages * values.numLanguages * this.prices.page);
    }
    return total;
  }
}








