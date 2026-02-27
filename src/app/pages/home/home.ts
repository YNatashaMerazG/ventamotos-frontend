import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //arreglo de imagenes
  imagenes = [
    '/motoharley-papa.png',
    '/motor7-carlo.png' 
  ];

  currentIndex = 0; //imagen actual

  next(){
    //avanza la imagen
    this.currentIndex = (this.currentIndex + 1) % this.imagenes.length;
  }

  prev(){
    //retrocede la imagen
    this.currentIndex = (this.currentIndex - 1 + this.imagenes.length) % this.imagenes.length;
  }
}
