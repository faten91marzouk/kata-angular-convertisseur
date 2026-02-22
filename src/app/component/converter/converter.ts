import { Component } from '@angular/core';
import { Exchange } from '../../store/exchange';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-converter',
  imports: [CommonModule], 
  templateUrl: './converter.html',
  styleUrl: './converter.scss',
})
export class Converter {

  constructor(public store: Exchange) {}
  onAmountChange(value: string) {
    const parsed = parseFloat(value);
    this.store.amount.set(isNaN(parsed) ? 0 : parsed);
  }

}
