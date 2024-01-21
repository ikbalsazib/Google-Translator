// src/app/language-translator/language-translator.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScriptService } from '../services/script.service';
import { LANGUAGES } from './languages.db';
import { LanguageTranslationService } from '../services/language-translation.service';

@Component({
  selector: 'app-language-translator',
  templateUrl: './language-translator.component.html',
  styleUrls: ['./language-translator.component.scss'],
})
export class LanguageTranslatorComponent implements OnInit {
  inputData: string = 'Hello world';
  outputData: string = '';
  inputText: string = '';
  outputText: string = '';

  inputLanguage: string = 'auto';
  // outputLanguage: string = 'bn-bd';
  outputLanguage: string = 'ar';

  constructor() {}

  ngOnInit(): void {
    this.translate(this.inputData);
  }
  onInputChange(event: any) {
    this.inputData = event.target.value;
    // this.translate(this.inputData);
  }

  onLanguCodeChange(event: any) {
    // this.inputLanguage = event.target.value;
    this.outputLanguage = event.target.value;
    // this.translate(this.inputData);
  }

  onSubmit() {
    this.translate(this.inputData);
  }

  // Function to perform translation
  translate(inputData: string) {
    const inputLanguage = 'auto';

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${
      this.outputLanguage
    }&dt=t&q=${encodeURI(inputData)}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        let lang = json[0];
        let out = lang[0];
        console.log(out[0]);
        this.outputData = out[0];
        // outputTextElem.value = json[0].map((item) => item[0]).join('');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
