import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  textGrade:string = "Graduando em Ciência da Computação"
  textRole:string = "Aspirante a Desenvolvedor Web"
  textWelcome:string = "Bem vindo! Meu nome é "
  roles:string[] = ['Web', 'Full-stack', 'Java']
  itemAtual:string = '';
  indiceAtual:number = 0;
  cssClass:string = '';

  ngOnInit(): void {
    this.atualizarValor();
  }

  atualizarValor() {
    this.cssClass = 'welcome-subtitle span';
    this.indiceAtual = (this.indiceAtual + 1) % this.roles.length;
    this.itemAtual = this.roles[this.indiceAtual];
    setTimeout(() => {
      this.atualizarValor();
    }, 7000); 
    

  }
}
