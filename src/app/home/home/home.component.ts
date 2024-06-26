import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './../../panel/panel/panel.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}



