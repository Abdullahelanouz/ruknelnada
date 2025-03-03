import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLangSubject = new BehaviorSubject<string>('ar');
  currentLang$ = this.currentLangSubject.asObservable();

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    this.switchLanguage('ar');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLangSubject.next(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  getCurrentLang(): string {
    return this.currentLangSubject.value;
  }

  isRtl(): boolean {
    return this.currentLangSubject.value === 'ar';
  }
}