import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts = [
    { title: 'Neat Tree',
    imageUrl: 'assets/tree.jpeg',
    username: 'nature',
    content: 'I saw a Neat Tree today'
    },
    { title: 'Snowy Mountain',
    imageUrl: 'assets/mountain.jpeg',
    username: 'mountainLoverr',
    content: 'Here is a picture of a snowy mountain'
    },
    { title: 'Mountain Biking',
    imageUrl: 'assets/biking.jpeg',
    username: 'biking12222',
    content: 'I did some biking today'
    }
  ]
}
