import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetailsComponent implements OnInit{
  motoid!: number; //! significa que llegara un numero antes de que uses el id para evitar errores
  moto: any;
  motos = [
    {
      id: 1,
      marca: 'Honda',
      modelo: 'Navi',
      cilindrada: 110,
      anio: 2024,
      kilometraje: 8000,
      precioVenta: 32000,
      color: 'Azul metalico',
      facturaOriginal: true,
      imagenes: [
        '/navi_verde2.png',
        '/navi_verde.png',
        '/navi_verde4.png',
        '/navi_verde3.png',
      ]
    },
    {
      id: 2,
      marca: 'Suzuki',
      modelo: 'GSX-S',
      cilindrada: 750,
      anio: 2024,
      kilometraje: 15000,
      precioVenta: 158000,
      color: 'Azul',
      facturaOriginal: true,
      imagenes: 'gixxer_azul.png'
    }
  ]


  constructor(private route: ActivatedRoute){} //ActivateRoute: tiene toda la informacion
    ngOnInit(): void{ // en cuanto se termine de crear lo de arriba ejecuta lo de abajo

    this.motoid = Number(this.route.snapshot.paramMap.get('id')); //Number: pasa de string a numero real para trabajar con el
    //snapshot: toma foto del url cargado
    //paramMap.get('id') : toma el id
    this.moto = this.motos.find(m => m.id == this.motoid);
  }

  imagenActualIndex: number = 0;

  siguienteImagen() {
    if (!this.moto?.imagenes) return;

    this.imagenActualIndex =
      (this.imagenActualIndex + 1) % this.moto.imagenes.length;
  }

  anteriorImagen() {
    if (!this.moto?.imagenes) return;

    this.imagenActualIndex =
      (this.imagenActualIndex - 1 + this.moto.imagenes.length) %
      this.moto.imagenes.length;
  }

}
