import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css'],
  standalone: true,
})
export class CartaoComponent implements OnInit {
  dados: any;

  constructor(private dadosService: DadosService, private router: Router) {}

  ngOnInit(): void {
    // Inicializa os dados ao carregar o componente
    this.dados = this.dadosService.getDados();
  }

  voltar() {
    this.router.navigate(['']);
  }
}
