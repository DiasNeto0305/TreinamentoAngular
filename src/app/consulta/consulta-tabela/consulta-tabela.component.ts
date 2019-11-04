import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consulta-tabela',
  templateUrl: './consulta-tabela.component.html',
  styleUrls: ['./consulta-tabela.component.css']
})
export class ConsultaTabelaComponent implements OnInit {

  @Input() consultas;
  @Input() titulo;
  @Input() erro;

  constructor() { }

  ngOnInit() {
  }

}
