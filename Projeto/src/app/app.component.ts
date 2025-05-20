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
  novaMensagem: string = '';
  mensagens: string[] = [];

  enviarMensagem(event?: Event) {
    event?.preventDefault();

    if (this.novaMensagem.trim()) {
      this.mensagens.push(this.novaMensagem.trim());
      this.novaMensagem = '';

      setTimeout(() => {
        const chat = document.querySelector('.conteudo_chat');
        if (chat) chat.scrollTop = chat.scrollHeight;
      });
    }
  }
}
