import { Component, signal } from '@angular/core';
import { Converter } from './component/converter/converter';

@Component({
  selector: 'app-root',
imports: [Converter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('euro-usd-convertisseur');
}
