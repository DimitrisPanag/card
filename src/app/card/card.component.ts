import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() username = '';
  @Input() content = '';

  
  constructor(){}

  ngOnInit(){}

}
