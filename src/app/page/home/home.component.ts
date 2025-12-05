import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title = 'Painel de Estudos';
  nome!: string;
  numerosDaHome = 0;

  entrar() {
    if (this.nome && this.nome.trim() !== '') {
      this.numerosDaHome++;
    }
  }

  limpar() {
    this.nome = '';
    this.numerosDaHome = 0;
  }

  verDisciplinas() {
    alert('Lista de disciplinas será exibida aqui.');
  }

  verProgresso() {
    alert('Progresso do usuário será exibido aqui.');
  }

  verAtividades() {
    alert('Atividades recentes serão exibidas aqui.');
  }
}
