// translation.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleTranslateService {
  private apiKey = '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';
  private apiUrl = 'https://translation.googleapis.com/language/translate/v2';

  constructor(private http: HttpClient) {}

  translateText(text: string, targetLanguage: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const params = {
      q: text,
      target: targetLanguage,
      key: this.apiKey,
    };

    return this.http.post(this.apiUrl, params, { headers });
  }
}
