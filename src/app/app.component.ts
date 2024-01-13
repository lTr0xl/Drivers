import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DRIVERS } from '../db-data';
import { DriverComponent } from './driver/driver.component';
import { Driver } from './module/klasa';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DriverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    vozaci=DRIVERS;

    appKlik(event:Driver){
      console.log(event);
    }
}

