import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DadosService} from '../dados.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css'],
    standalone: true,
    imports: [FormsModule]
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

    disabled(): boolean {
        return !(
            this.dados?.nome &&
            this.dados?.idade &&
            this.dados?.telefone &&
            this.dados?.email &&
            this.dados?.rua &&
            this.dados?.numero &&
            this.dados?.bairro &&
            this.dados?.cidade
        );
    }
}