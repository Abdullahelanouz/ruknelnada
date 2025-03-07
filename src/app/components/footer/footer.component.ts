import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { DataService } from '../../services/data.service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FontAwesomeModule
  ],
  template: `
    <footer class="footer pt-5">
      <a href="https://wa.me/971562163835" class="whatsapp_float" target="_blank">
        <fa-icon [icon]="faWhatsapp" class="whatsapp-icon"></fa-icon>
      </a>
      <a (click)="scrollToTop()" class="scroll-top">
        <fa-icon [icon]="faArrowUp" class="scroll-top-icon"></fa-icon>
      </a>
 
      <div class="container">
        <div class="row">
          <!-- Logo and about -->
          <div class="col-lg-4 mb-4">
            <img src="assets/images/logo.webp" width="150" height="auto" alt="Rukn Al-Nada Logo" class="mb-3">
            <p>{{ 'SITE.TAGLINE' | translate }}</p>
            <div class="mt-3">
              <a href="https://www.facebook.com/profile.php?id=61573382494834&mibextid=ZbWKwL" target="_blank" class="social-icon"><fa-icon [icon]="faFacebook"></fa-icon></a>
              <a href="https://www.instagram.com/ruknelnada?igshid=MWhodW9ub3dyNGFrcw" target="_blank" class="social-icon"><fa-icon [icon]="faInstagram"></fa-icon></a>
              <a href="https://wa.me/971562163835" target="_blank" class="social-icon"><fa-icon [icon]="faWhatsapp"></fa-icon></a>
            </div>
          </div>
          
          <!-- Quick links -->
          <div class="col-lg-2 mb-4">
            <h5>{{ 'FOOTER.QUICK_LINKS' | translate }}</h5>
            <ul class="list-unstyled">
              <li><a routerLink="/" class="text-white text-decoration-none">{{ 'NAV.HOME' | translate }}</a></li>
              <li><a routerLink="/services" class="text-white text-decoration-none">{{ 'NAV.SERVICES' | translate }}</a></li>
              <li><a routerLink="/testimonials" class="text-white text-decoration-none">{{ 'NAV.TESTIMONIALS' | translate }}</a></li>
              <li><a routerLink="/contact" class="text-white text-decoration-none">{{ 'NAV.CONTACT' | translate }}</a></li>
            </ul>
          </div>
          
          <!-- Services -->
          <div class="col-lg-3 mb-4">
            <h5>{{ 'FOOTER.SERVICES' | translate }}</h5>
            <ul class="list-unstyled">
              <li *ngFor="let service of services">
                <a [routerLink]="['/services', service.id]" class="text-white text-decoration-none">
                  {{ service.translationKey + '.TITLE' | translate }}
                </a>
              </li>
            </ul>
          </div>
          
          <!-- Contact info -->
          <div class="col-lg-3 mb-4">
            <h5>{{ 'FOOTER.CONTACT_INFO' | translate }}</h5>
            <ul class="list-unstyled">
              <li class="d-flex mb-3">
                <fa-icon [icon]="faMapMarkerAlt" class="me-2 mt-1"></fa-icon>
                <p>الشارقه ,عجمان, دبي, الإمارات العربية المتحدة</p>
              </li>
              <li class="d-flex mb-3">
                <fa-icon [icon]="faPhone" class="me-2 mt-1"></fa-icon>
                <a style="text-decoration: none; color: white" href="tel:+971562163835">+971562163835</a>
              </li>
              <li class="d-flex mb-3">
                <fa-icon [icon]="faEnvelope" class="me-2 mt-1"></fa-icon>
                <a style="text-decoration: none; color: white" href="mailto:ruknelnada@gmail.com">ruknelnada&#64;gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Copyright -->
        <div class="row border-top pt-3 mt-3">
          <div class="col-12 text-center">
            <p class="mb-0" [innerHTML]="footerText"></p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .whatsapp_float {
      position: fixed;
      bottom: 50px;
      right: 20px;
      color: #25d366;
      font-size: 30px;
      text-decoration: none;
      z-index: 100;
      transition: all 0.3s ease;
    }
    
    .whatsapp_float:hover {
      transform: scale(1.1);
      color: #128c7e;
    }
    
    .scroll-top {
      position: fixed;
      bottom: 120px;
      right: 20px;
      background: var(--primary-color);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 100;
      transition: all 0.3s ease;
      text-decoration: none;
    }
    
    .scroll-top:hover {
      transform: translateY(-5px);
      background: var(--secondary-color);
    }
    
    .scroll-top-icon {
      font-size: 20px;
    }
    
    .footer a {
      transition: all 0.3s ease;
    }
    
    .footer a:hover {
      color: var(--secondary-color) !important;
      text-decoration: underline !important;
    }
    
    .footer ul li {
      margin-bottom: 0.5rem;
    }
  `]
})
export class FooterComponent {
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faArrowUp = faArrowUp;
  
  services: Service[] = [];
  translate: any;

  constructor(private dataService: DataService, translate: TranslateService) {
    this.services = this.dataService.getServices();
    this.translate = translate;
  }

  get footerText(): string {
    return this.translate.instant('FOOTER.COPYRIGHT');
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}