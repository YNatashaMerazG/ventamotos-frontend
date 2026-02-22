//GENERACION DEL ENTURTAMIENTO
//RENRUTAMIENTO: CLIC PARA CONDUCIR A ALGUN LADO DE LA PAGINA
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';

//Comenzamos a llamar a los componentes
export const routes: Routes = [
    //path: 'ruta', componente: donde vamos
    {path: '', component: Home},
    {path: 'nosotros', component: About},
    {path: 'productos', component: Products},
    {path: 'contacto', component: Contact},
    //ruta no existente
    {path: '**', redirectTo: ''} // redirectTo: componenteRaiz
];
