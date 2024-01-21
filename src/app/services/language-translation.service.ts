import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageTranslationService {
  inputLanguage: string = '';
  outputLanguage: string = '';

  constructor() {
    this.inputLanguage = 'auto';
    this.outputLanguage = 'bn-bd';
  }

  translate(inputData: string): string {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${
      this.inputLanguage
    }&tl=${this.outputLanguage}&dt=t&q=${encodeURI(inputData)}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        let lang = json[0];
        let out = lang[0];
        // console.log(out[0]);
        return out[0];
        // outputTextElem.value = json[0].map((item) => item[0]).join('');
      })
      .catch((error) => {
        console.log(error);
      });

    return inputData;
  }
}
