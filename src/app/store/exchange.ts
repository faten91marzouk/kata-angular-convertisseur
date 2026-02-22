import { Injectable, signal, computed, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Exchange {

  rate = signal<number>(1.1);              
  fixedRate = signal<number | null>(null); 
  amount = signal<number>(0);              
  currency = signal<'EUR' | 'USD'>('EUR'); 
  history = signal<any[]>([]);        
  
}
