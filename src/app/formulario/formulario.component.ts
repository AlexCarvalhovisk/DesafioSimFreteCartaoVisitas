import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DadosService} from '../dados.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css'],
    standalone: true, // Tornando este componente standalone
  imports: [FormsModule] // Importando diretamente as dependências necessárias
})
export class FormularioComponent {
    dados = {
        nome: '',
        idade: '',
        telefone: '',
        email: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: ''
    };

    constructor(private dadosService: DadosService, private router: Router) {
    }

    enviarFormulario() {
        this.dadosService.setDados(this.dados);
        this.router.navigate(['/cartao']);
    }
}