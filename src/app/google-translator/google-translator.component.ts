// your.component.ts

import { Component } from '@angular/core';
import { GoogleTranslateService } from '../services/googletranslate.service';

@Component({
  selector: 'app-google-translator',
  templateUrl: 'google-translator.component.html',
  styleUrls: ['google-translator.component.scss'],
})
export class GoogleTranslatorComponent {
  textToTranslate = 'Hello, World!';
  translatedText!: string;

  constructor(private translationService: GoogleTranslateService) {}

  translateText() {
    const targetLanguage = 'es'; // Change this to your target language code
    this.translationService
      .translateText(this.textToTranslate, targetLanguage)
      .subscribe((response: any) => {
        this.translatedText = response.data.translations[0].translatedText;
      });
  }
}
