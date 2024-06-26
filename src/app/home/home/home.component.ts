/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './../../panel/panel/panel.component';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  budgetForm: FormGroup;
  totalBudget: number = 0;

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false
    });

    this.budgetForm.valueChanges.subscribe(values => {
      this.totalBudget = this.budgetService.calculateBudget(values);
    });
  }
}*/

/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { PanelComponent } from '../../panel/panel/panel.component';
import { BudgetService } from '../../services/budget.service'; 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  budgetForm: FormGroup;
  totalBudget: number = 0;

  constructor(private fb: FormBuilder) {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false
    });
  }
}
export class HomeComponent implements OnInit {
  budgetForm: FormGroup | undefined;
totalBudget: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false
    });
  }
}

  /*constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false
    });

    this.budgetForm.valueChanges.subscribe(values => {
      this.totalBudget = this.budgetService.calculateBudget(values);
    });
  }
}*/


/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { PanelComponent } from '../../panel/panel/panel.component';
import { BudgetService } from '../../services/budget.service'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  budgetForm!: FormGroup;
  services = [
    { controlName: 'seo', label: 'Fer una campanya SEO (300 €)' },
    { controlName: 'advertising', label: 'Fer una campanya de publicitat (400 €)' },
    { controlName: 'website', label: 'Fer una pàgina web (500 €)' }
  ];

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {}

  ngOnInit() {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false
    });

    this.budgetForm.valueChanges.subscribe(values => {
      console.log(this.budgetService.calculateBudget(values));
    });
  }
}*/


/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { PanelComponent } from '../../panel/panel/panel.component';
import { BudgetService } from '../../services/budget.service'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  budgetForm: FormGroup;
  totalBudget: number = 0;
  services = [
    { controlName: 'seo', label: 'Fer una campanya SEO (300 €)' },
    { controlName: 'advertising', label: 'Fer una campanya de publicitat (400 €)' },
    { controlName: 'website', label: 'Fer una pàgina web (500 €)' }
  ];

  /*constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false
    });
    constructor(private fb: FormBuilder, private budgetService: BudgetService) {}

    ngOnInit() {
      this.budgetForm = this.fb.group({
        seo: false,
        advertising: false,
        website: false
      });
  

    this.budgetForm.valueChanges.subscribe(values => {
      this.totalBudget = this.budgetService.calculateBudget(values);
    });
  }
}
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PanelComponent } from '../../panel/panel/panel.component';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  budgetForm: FormGroup;
  totalBudget: number = 0;
  services = [
    { controlName: 'seo', label: 'Fer una campanya SEO (300 €)' },
    { controlName: 'advertising', label: 'Fer una campanya de publicitat (400 €)' },
    { controlName: 'website', label: 'Fer una pàgina web (500 €)' }
  ];

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false
    });
  }

  ngOnInit() {
    this.budgetForm.valueChanges.subscribe(values => {
      this.totalBudget = this.budgetService.calculateBudget(values);
    });
  }
}










