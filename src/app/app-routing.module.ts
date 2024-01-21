import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { LanguageTranslatorComponent } from './language-translator/language-translator.component';

const routes: Routes = [
  { path: '', component: LanguageTranslatorComponent },
  { path: 'g-map', component: GooglemapComponent },
  { path: 'language-translator', component: LanguageTranslatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
