import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../shared/modal/modal/modal.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent]
})
export class PanelComponent implements OnInit {
  @Input() parentForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    if (!this.parentForm.controls['numPages'].value) {
      this.parentForm.controls['numPages'].setValue(1);
    }
    if (!this.parentForm.controls['numLanguages'].value) {
      this.parentForm.controls['numLanguages'].setValue(1);
    }
  }

  incrementPages() {
    const currentPages = this.parentForm.controls['numPages'].value;
    this.parentForm.controls['numPages'].setValue(currentPages + 1);
  }

  decrementPages() {
    const currentPages = this.parentForm.controls['numPages'].value;
    if (currentPages > 1) {
      this.parentForm.controls['numPages'].setValue(currentPages - 1);
    }
  }

  incrementLanguages() {
    const currentLanguages = this.parentForm.controls['numLanguages'].value;
    this.parentForm.controls['numLanguages'].setValue(currentLanguages + 1);
  }

  decrementLanguages() {
    const currentLanguages = this.parentForm.controls['numLanguages'].value;
    if (currentLanguages > 1) {
      this.parentForm.controls['numLanguages'].setValue(currentLanguages - 1);
    }
  }
}
