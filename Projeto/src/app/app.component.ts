import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    mensagens = [

      { usuario: 'Você',mensagem: 'Blababla'},
      { usuario: 'Você' ,mensagem:'Blababla'}
    ];

    mensagem_voce = ''
    addMensagem(){  
      this.mensagens.push({ usuario: 'Você' ,mensagem: this.mensagem_voce });
      this.mensagem_voce = '';
    }

}
