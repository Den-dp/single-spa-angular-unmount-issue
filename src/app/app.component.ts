import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button>
      <svg width="20" height="20" fill="currentColor" class="mr-2"><path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"></path></svg>
      Button
    </button>
  `,
  styles: [
    `
      :host {
        display: flex;
        outline: 1px dashed #2e3ee5;
        padding: 100px;
        margin: 20px;
        justify-content: center;
      }
      button {
        display: flex;
        box-sizing: border-box;
        padding: 0.5rem 0.75rem 0.5rem 0.5rem;
        font-weight: 500;
        font-size: .875rem;
        line-height: 1.25rem;
        color: rgb(255 255 255/1);
        background: #515de1;
        border: 1px solid #2e3ee5;
        border-radius: 0.375rem;
        box-shadow: 0 2px 5px -1px rgb(50 50 93 / 25%), 0 1px 3px -1px rgb(0 0 0 / 30%);
        cursor: pointer;
      }
    `
  ]
})
export class AppComponent {
  title = 'single-spa-angular-unmount-issue';
}
