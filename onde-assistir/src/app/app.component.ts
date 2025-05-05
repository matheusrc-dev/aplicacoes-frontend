import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Atividade 11';
  currentCustomer = "Maria";
  imageUrl = "https://images.unsplash.com/photo-1745953130006-357aa055eee7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  disabled = true;
  pillClass = "pill";
  counter = 0;
  name = "";

  addCount($event: Event) {
    console.log($event.target);
    this.counter++;
  }
}
