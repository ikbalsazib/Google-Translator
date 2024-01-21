import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScriptService {
  constructor() {}

  loadScript(url: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;

      script.onload = (event: Event) => {
        // Handle the onload event
        resolve();
      };

      script.onerror = (event: Event | string) => {
        // Handle the onerror event
        reject();
      };

      document.head.appendChild(script);
    });
  }
}
