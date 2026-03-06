import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; //para ngModel

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
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
      imagen: '/navi_verde2.png'
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
      imagen: 'gixxer_azul.png'

    }
  ];
  //motos filtradas
  motosFiltradas = [...this.motos];
  //texto busqueda
  busqueda = "";
  //filtros
  filtros = {
    marca: '',
    ccMin: null,
    precioMax: null,
    anio: null
  };

  //lista de marcas
  marcasDisponibles = [... new Set(this.motos.map(m => m.marca))];

  aplicarfiltros(){
    this.motosFiltradas = this.motos.filter(moto => {
      //filtro busqueda
      const coincideBusqueda = 
        moto.marca.toLocaleLowerCase().includes(this.busqueda.toLocaleLowerCase()) //includes: busqueda parcial (Suz = Suzuki)
        || // marca o modelo
        moto.modelo.toLocaleLowerCase().includes(this.busqueda.toLocaleLowerCase());

        //filtro marca
        const coincideMarca =
        this.filtros.marca == '' //vacio
        ||
        moto.marca == this.filtros.marca;

        //filtro cilindrada
        const coincideCC = 
        !this.filtros.ccMin //si no hay minimo
        ||
        moto.cilindrada >= this.filtros.ccMin; //cilindradas mayores o iguales 

        //filtro precio
        const coincidePrecio = 
        !this.filtros.precioMax // si no hay precio
        ||
        moto.precioVenta <= this.filtros.precioMax; // precio menor o igual

        //filtro anii
        const coincideAnio =
        !this.filtros.anio // si no hay precio
        ||
        moto.anio == this.filtros.anio; //mismo anio

        return coincideBusqueda
        && coincideMarca
        && coincideCC
        && coincidePrecio
        && coincideAnio;
        // tiene que coicidir para que se muestre
    });
  }
  limpiarFiltros(){
    //reiniciar los filtros
    this.filtros = {
        marca: '',
        ccMin: null,
        precioMax: null,
        anio: null
    };

    //reiniciar busqueda
    this.busqueda = '';

    //vuelve a mostrar todas las motos
    this.motosFiltradas = [...this.motos];
  }
}
