import { Injectable, signal, computed, effect } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Exchange {

  rate = signal<number>(1.1);              
  fixedRate = signal<number | null>(null); 
  amount = signal<number>(0);              
  currency = signal<'EUR' | 'USD'>('EUR'); 
  history = signal<any[]>([]);  
  
  
  activeRate = computed(() => this.fixedRate() ?? this.rate());

  converted = computed(() => {
    return this.currency() === 'EUR'
      ? this.amount() * this.activeRate() 
      : this.amount() / this.activeRate(); 
  });


  constructor() {
    interval(3000).subscribe(() => {
      const variation = (Math.random() * 0.1) - 0.05; 
      this.rate.update(r => +(r + variation).toFixed(4));
    });

    effect(() => {
      const real = this.rate();
      const fixed = this.fixedRate();

      if (fixed !== null) {
        const diff = Math.abs(real - fixed) / fixed;
        if (diff > 0.02) {
          this.fixedRate.set(null);
        }
      }
    });
  }
  addToHistory() {
    const newEntry = {
      rateReal: this.rate(),          
      rateUsed: this.activeRate(),   
      inputValue: this.amount(),      
      inputCurrency: this.currency(), 
      outputValue: this.converted(),  
      outputCurrency: this.currency() === 'EUR' ? 'USD' : 'EUR' 
    };

    const updated = [newEntry, ...this.history()]; 
    this.history.set(updated.slice(0, 5));        

}
}
