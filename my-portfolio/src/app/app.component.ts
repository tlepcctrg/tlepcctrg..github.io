import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // This code will only run on the client side
      const hamburger = document.querySelector("#hamburger")
      const menu = document.querySelector("#menu")
      const moon = document.querySelector("#moon")
      const body = document.querySelector("body")
      hamburger?.addEventListener("click", ()=>{
        menu?.classList.toggle("hidden")
        //hamburger.classList.toggle("bg-white")
      })
    }
    
  }

}
