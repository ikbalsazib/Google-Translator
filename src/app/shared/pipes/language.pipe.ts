import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language',
})
export class LanguagePipe implements PipeTransform {
  transform(inputText: string): string {
    let inputLanguage = 'auto';

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${'bn-bd'}&dt=t&q=${encodeURI(
      inputText
    )}`;

    let result = inputText;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        let lang = json[0];
        let out = lang[0];
        result = out[0];
        console.log('pipe', out[0]);

        return out[0];
        // outputTextElem.value = json[0].map((item) => item[0]).join('');
      })
      .catch((error) => {
        console.log(error);
        return inputLanguage;
      });

    console.log('pipe resu---', result);

    return result;
  }
}
