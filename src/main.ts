import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient, withInterceptorsFromDi,} from '@angular/common/http';
import {provideRouter, RouterModule, Routes} from '@angular/router';
import {FormularioComponent} from './app/formulario/formulario.component';
import {CartaoComponent} from './app/cartao/cartao.component';

const routes: Routes = [
    {path: '', component: FormularioComponent}, // Rota inicial
    {path: 'cartao', component: CartaoComponent}, // Rota do Cartao
];

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `
        <router-outlet></router-outlet>
    `,
})
export class App {
}

bootstrapApplication(App, {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes),
    ],
});
