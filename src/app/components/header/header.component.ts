import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    NgbDropdownModule,
    FontAwesomeModule
  ],
  template: `
    <header>
      <!-- Top bar with contact info and social media -->
      <div class="bg-primary-gradient text-white py-2">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="d-flex align-items-center">
                <fa-icon [icon]="faPhone" class="me-2"></fa-icon>
                <a style="text-decoration: none; color: white" href="tel:+971562163835">+971562163835</a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex justify-content-md-end">
                <a href="https://www.facebook.com/profile.php?id=61573382494834&mibextid=ZbWKwL" target="_blank" class="social-icon"><fa-icon [icon]="faFacebook"></fa-icon></a>
                <a href="https://www.instagram.com/ruknelnada?igsh=MWhodW9ub3dyNGFrcw" target="_blank" class="social-icon"><fa-icon [icon]="faInstagram"></fa-icon></a>
                <a href="https://wa.me/971562163835" target="_blank" class="social-icon"><fa-icon [icon]="faWhatsapp"></fa-icon></a>
                <div class="ms-3 lang-selector" (click)="toggleLanguage()">
                  <fa-icon [icon]="faGlobe" class="me-1"></fa-icon>
                  <span>{{ currentLang === 'en' ? 'العربية' : 'English' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Main navigation -->
      <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container">
          <a class="navbar-brand" routerLink="/">
            <img src="assets/images/logo.webp" height="200px" width="200px" alt="Rukn Al-Nada Logo">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                  {{ 'NAV.HOME' | translate }}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/services" routerLinkActive="active">
                  {{ 'NAV.SERVICES' | translate }}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/testimonials" routerLinkActive="active">
                  {{ 'NAV.TESTIMONIALS' | translate }}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/contact" routerLinkActive="active">
                  {{ 'NAV.CONTACT' | translate }}
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="importantServicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ 'NAV.IMPORTANT_SERVICES' | translate }}
                </a>
                <ul class="dropdown-menu" aria-labelledby="importantServicesDropdown">
                  <li><a class="dropdown-item" routerLink="/services/electricity">{{ 'NAV.ELECTRICITY_SERVICES_IN_DUBAI' | translate }}</a></li>
                  <li><a class="dropdown-item" routerLink="/services/electricity/">{{ 'NAV.ELECTRICITY_SERVICES_IN_SHARJAH' | translate }}</a></li>
                  <li><a class="dropdown-item" routerLink="/services/electricity/">{{ 'NAV.ELECTRICITY_SERVICES_IN_AJMAN' | translate }}</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" routerLink="/services/plumbing">{{ 'NAV.PLUMBING_SERVICES_IN_DUBAI' | translate }}</a></li>
                  <li><a class="dropdown-item" routerLink="/services/plumbing">{{ 'NAV.PLUMBING_SERVICES_IN_SHARJAH' | translate }}</a></li>
                  <li><a class="dropdown-item" routerLink="/services/plumbing">{{ 'NAV.PLUMBING_SERVICES_IN_AJMAN' | translate }}</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" routerLink="/services/painting">{{ 'NAV.PAINTING_SERVICES_IN_DUBAI' | translate }}</a></li>
                  <li><a class="dropdown-item" routerLink="/services/painting">{{ 'NAV.PAINTING_SERVICES_IN_SHARJAH' | translate }}</a></li>
                  <li><a class="dropdown-item" routerLink="/services/painting">{{ 'NAV.PAINTING_SERVICES_IN_AJMAN' | translate }}</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" routerLink="/services/drain">{{ 'NAV.DRAIN_CLEANING_SERVICES_IN_DUBAI' | translate }}</a></li>
                  <li><a class="dropdown-item" routerLink="/services/drain">{{ 'NAV.DRAIN_CLEANING_SERVICES_IN_SHARJAH' | translate }}</a></li>
                  <li><a class="dropdown-item" routerLink="/services/drain">{{ 'NAV.DRAIN_CLEANING_SERVICES_IN_AJMAN' | translate }}</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" routerLink="/services/cleaning">{{ 'NAV.CLEANING_SERVICES_IN_DUBAI' | translate }}</a></li>
                  <li><a class="dropdown-item" routerLink="/services/cleaning">{{ 'NAV.CLEANING_SERVICES_IN_SHARJAH' | translate }}</a></li>
                  <li><a class="dropdown-item" routerLink="/services/cleaning">{{ 'NAV.CLEANING_SERVICES_IN_AJMAN' | translate }}</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .navbar-nav .nav-link {
      font-weight: 500;
      padding: 1rem 1.25rem;
      transition: all 0.3s ease;
    }
    
    .navbar-nav .nav-link.active {
      color: var(--primary-color);
    }
    
    .navbar-nav .nav-link:hover {
      color: var(--primary-color);
    }
  `]
})
export class HeaderComponent {
  faPhone = faPhone;
  faGlobe = faGlobe;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  
  currentLang: string;

  constructor(private translationService: TranslationService) {
    this.currentLang = this.translationService.getCurrentLang();
    this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translationService.switchLanguage(newLang);
  }
}