import { TestBed } from '@angular/core/testing';
import { BudgetService } from './budget.service';

describe('BudgetService', () => {
  let service: BudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate the budget correctly when only SEO is selected', () => {
    const formValues = {
      seo: true,
      advertising: false,
      website: false,
      numPages: 1,
      numLanguages: 1
    };
    const result = service.calculateBudget(formValues);
    expect(result).toBe(300); // Only SEO
  });

  it('should calculate the budget correctly when SEO and Advertising are selected', () => {
    const formValues = {
      seo: true,
      advertising: true,
      website: false,
      numPages: 1,
      numLanguages: 1
    };
    const result = service.calculateBudget(formValues);
    expect(result).toBe(700); // 300 (SEO) + 400 (Advertising)
  });

  it('should calculate the budget correctly when website is selected with 1 page and 1 language', () => {
    const formValues = {
      seo: false,
      advertising: false,
      website: true,
      numPages: 1,
      numLanguages: 1
    };
    const result = service.calculateBudget(formValues);
    expect(result).toBe(530); // 500 (Website) + 1*1*30 (1 Page * 1 Language * 30)
  });

  it('should calculate the budget correctly for website with multiple pages and languages', () => {
    const formValues = {
      seo: false,
      advertising: false,
      website: true,
      numPages: 3,
      numLanguages: 2
    };
    const result = service.calculateBudget(formValues);
    expect(result).toBe(680); // 500 (Website) + 3*2*30 (Pages * Languages * 30)
  });

  it('should calculate the budget correctly when all services are selected', () => {
    const formValues = {
      seo: true,
      advertising: true,
      website: true,
      numPages: 2,
      numLanguages: 2
    };
    const result = service.calculateBudget(formValues);
    expect(result).toBe(1320); // 300 (SEO) + 400 (Advertising) + 500 (Website) + 2*2*30 (Pages * Languages * 30)
  });
});

