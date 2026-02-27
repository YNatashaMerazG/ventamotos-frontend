import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  standalone: true,
  //RouterModule: para llamar las paginas
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {

}
