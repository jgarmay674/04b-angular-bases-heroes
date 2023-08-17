import { Component } from '@angular/core';

@Component({
    selector: 'app-counter-standalone',
    template:`
        <h5>Counter: {{counter}}</h5>
        <button (click)="increaseBy(1)">+1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="decreaseBy(1)">-1</button>
        `
})

export class CounterStandaloneComponent {
    public title: string = 'Mi primera app de Angular';
    public counter: number = 10;

    increaseBy(value: number): void {
        this.counter += value;
    }

    decreaseBy(value: number): void {
        this.counter -= value;
    }

    resetCounter(): void {
        this.counter = 10;
    }
}
