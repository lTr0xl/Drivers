import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Driver } from '../module/klasa';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent {
@Input() vozac:Driver = {} as Driver;
@Input() reden!:number;
@Output() nazad = new EventEmitter<Driver>();
klasi(){
  return {'poz':this.vozac.category==="BEGINNER" , "course-card":true};
}

klikni(){
  let link=this.vozac.iconUrl;
  window.open(link);
  console.log("Uuu me klikna");
  this.nazad.emit(this.vozac);
}


}
