import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() aboutText:string = 'Atualmente cursando Ciência da Computação na UniFil de Londrina, estou em busca de aprimorar minhas habilidades na área, especialmente no que se diz respeito ao desenvolvimento full-stack. Atuo na Tata Consultancy Services, onde desenvolvo APIs, páginas e serviços utilizando no-code.'
  imagePath:string = 'https://avatars.githubusercontent.com/u/103579021?s=400&u=2b5706ebceca457e77277be91de0873b477370a8&v=4'
}
