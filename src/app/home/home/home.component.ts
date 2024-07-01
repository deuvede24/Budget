
/*

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
}*/

/*import { Component, OnInit } from '@angular/core';
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
    { controlName: 'seo', label: 'SEO', description: 'Programación de una web responsive completa', price: 300 },
    { controlName: 'advertising', label: 'ADS', description: 'Programación de una web responsive completa', price: 400 },
    { controlName: 'website', label: 'WEB', description: 'Programación de una web responsive completa', price: 500 }
  ];

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

  ngOnInit(): void {}

  trackByFn(index: number, item: any): any {
    return item.controlName;
  }
}*/

/*
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
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
  showPanel: boolean = false;
  services = [
    { controlName: 'seo', label: 'SEO', description: 'Programación de una web responsive completa', price: 300 },
    { controlName: 'advertising', label: 'ADS', description: 'Programación de una web responsive completa', price: 400 },
    { controlName: 'website', label: 'WEB', description: 'Programación de una web responsive completa', price: 500 }
  ];

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false,
      numPages: [1, Validators.min(1)],
      numLanguages: [1, Validators.min(1)]
    });

    this.budgetForm.valueChanges.subscribe(values => {
      this.totalBudget = this.budgetService.calculateBudget(values);
      this.showPanel = values.website;
    });
  }

  ngOnInit(): void {}

  onNumPagesChange(numPages: number) {
    this.budgetForm.controls['numPages'].setValue(numPages);
  }

  onNumLanguagesChange(numLanguages: number) {
    this.budgetForm.controls['numLanguages'].setValue(numLanguages);
  }

  trackByFn(index: number, item: any): any {
    return item.controlName;
  }
}*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
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
  showPanel: boolean = false;
  services = [
    { controlName: 'seo', label: 'SEO', description: 'Programación de una web responsive completa', price: 300 },
    { controlName: 'advertising', label: 'ADS', description: 'Programación de una web responsive completa', price: 400 },
    { controlName: 'website', label: 'WEB', description: 'Programación de una web responsive completa', price: 500 }
  ];

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false,
      numPages: new FormControl<number>(1, [Validators.min(1)]),
      numLanguages: new FormControl<number>(1, [Validators.min(1)])
    });

    this.budgetForm.valueChanges.subscribe(values => {
      this.totalBudget = this.budgetService.calculateBudget(values);
      this.showPanel = values.website;
    });
  }

  ngOnInit(): void { }

  onNumPagesChange(numPages: number) {
    this.budgetForm.controls['numPages'].setValue(numPages);
  }

  onNumLanguagesChange(numLanguages: number) {
    this.budgetForm.controls['numLanguages'].setValue(numLanguages);
  }
}


