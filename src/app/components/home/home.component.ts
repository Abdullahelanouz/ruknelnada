import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faBolt, faFaucet, faPaintRoller, faWater, faBroom,
  faArrowRight, faQuoteRight, faStar,
  faUsers,
  faShippingFast,
  faDollarSign,
  faCheckCircle,
  faLeaf,
  faBug,
  faTint,
  faShieldAlt,
  faMapMarkerAlt, faPhone, faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../../services/data.service';
import { Service } from '../../models/service.model';
import { Testimonial } from '../../models/testimonial.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FontAwesomeModule
  ],
  template: `
    <!-- Hero Section -->
    <section class="hero-section" style="background-image: url('https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')">
      <div class="hero-overlay"></div>
      <div class="container hero-content py-5">
        <div class="row min-vh-75 align-items-center">
          <div class="col-lg-8 text-center text-lg-start">
            <h1 class="display-4 fw-bold mb-4">{{ 'HERO.TITLE' | translate }}</h1>
            <p class="lead mb-4">{{ 'HERO.SUBTITLE' | translate }}</p>
            <a routerLink="/services" class="btn btn-primary-custom btn-lg">
              {{ 'HERO.CTA' | translate }}
              <fa-icon [icon]="faArrowRight" class="ms-2"></fa-icon>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="why-choose-us" class="py-5 bg-light">
  <div class="container py-5">
    <div class="row text-center mb-5">
      <div class="col-lg-8 mx-auto">
        <h2 class="fw-bold mb-3">{{ 'WHY_US.TITLE' | translate }}</h2>
        <p class="lead">{{ 'WHY_US.SUBTITLE' | translate }}</p>
      </div>
    </div>
    
    <div class="row text-center">
      <!-- Team -->
      <div class="col-md-6 col-lg-3">
        <div class="feature-box mb-4">
          <fa-icon [icon]="faUsers" class="fa-2x text-primary mb-3"></fa-icon>
          <h4>{{ 'WHY_US.TEAM.TITLE' | translate }}</h4>
          <p>{{ 'WHY_US.TEAM.DESC' | translate }}</p>
        </div>
      </div>
      <!-- Speed -->
      <div class="col-md-6 col-lg-3">
        <div class="feature-box mb-4">
          <fa-icon [icon]="faShippingFast" class="fa-2x text-primary mb-3"></fa-icon>
          <h4>{{ 'WHY_US.SPEED.TITLE' | translate }}</h4>
          <p>{{ 'WHY_US.SPEED.DESC' | translate }}</p>
        </div>
      </div>
      <!-- Affordable Prices -->
      <div class="col-md-6 col-lg-3">
        <div class="feature-box mb-4">
          <fa-icon [icon]="faDollarSign" class="fa-2x text-primary mb-3"></fa-icon>
          <h4>{{ 'WHY_US.PRICE.TITLE' | translate }}</h4>
          <p>{{ 'WHY_US.PRICE.DESC' | translate }}</p>
        </div>
      </div>
      <!-- Quality -->
      <div class="col-md-6 col-lg-3">
        <div class="feature-box mb-4">
          <fa-icon [icon]="faCheckCircle" class="fa-2x text-primary mb-3"></fa-icon>
          <h4>{{ 'WHY_US.QUALITY.TITLE' | translate }}</h4>
          <p>{{ 'WHY_US.QUALITY.DESC' | translate }}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-light py-5">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-lg-8 mx-auto">
            <h1 class="fw-bold mb-3">{{ 'SERVICES.TITLE' | translate }}</h1>
            <p class="lead text-muted">{{ 'SERVICES.SUBTITLE' | translate }}</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-md-6" *ngFor="let service of services">
            <div class="card service-card h-100">
              <div class="row g-0 h-100">
                <div class="col-md-4">
                  <img [src]="service.imageUrl" [alt]="service.translationKey + '.TITLE' | translate" class="img-fluid h-100" style="object-fit: cover;">
                </div>
                <div class="col-md-8">
                  <div class="card-body d-flex flex-column h-100">
                    <div class="mb-3">
                      <fa-icon [icon]="getServiceIcon(service.icon)" class="service-icon"></fa-icon>
                    </div>
                    <h4 class="card-title mb-3">{{ service.translationKey + '.TITLE' | translate }}</h4>
                    <p class="card-text">{{ service.translationKey + '.SHORT_DESC' | translate }}</p>
                    <a [routerLink]="['/services', service.id]" class="btn btn-outline-primary mt-auto">
                      {{ 'NAV.SERVICES' | translate }}
                      <fa-icon [icon]="faArrowRight" class="ms-2"></fa-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    <!-- Testimonials Section -->
    <section class="diagonal-section text-white">
      <div class="container py-5">
        <div class="row text-center mb-5">
          <div class="col-lg-8 mx-auto">
            <h2 class="fw-bold mb-3">{{ 'TESTIMONIALS.TITLE' | translate }}</h2>
            <p class="lead">{{ 'TESTIMONIALS.SUBTITLE' | translate }}</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let testimonial of testimonials">
            <div class="card testimonial-card h-100 bg-white text-dark">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-4">
                  <div class="avatar me-3" *ngIf="!isImageUrl(testimonial.avatar)">
                    {{ testimonial.avatar }}
                  </div>
                  <img *ngIf="isImageUrl(testimonial.avatar)" 
                       [src]="testimonial.avatar" 
                       [alt]="testimonial.name" 
                       class="avatar">
                  <div>
                    <h5 class="mb-0">{{ testimonial.name }}</h5>
                    <div class="rating mt-1">
                      <fa-icon [icon]="faStar" class="text-warning" *ngFor="let star of getStars(testimonial.rating)"></fa-icon>
                    </div>
                  </div>
                </div>
                <p class="card-text text-end">{{ testimonial.comment }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="card bg-primary-gradient text-white h-100">
              <div class="card-body p-4">
                <h3 class="card-title mb-4">{{ 'CONTACT.INFO.ADDRESS' | translate }}</h3>
                
                <div class="d-flex mb-4">
                  <fa-icon [icon]="faMapMarkerAlt" class="me-3 mt-1 fs-5"></fa-icon>
                  <div>
                    <h5>{{ 'CONTACT.INFO.ADDRESS' | translate }}</h5>
                    <p>الشارقه ,عجمان, دبي, الإمارات العربية المتحدة</p>
                  </div>
                </div>
                
                <div class="d-flex mb-4">
                  <fa-icon [icon]="faPhone" class="me-3 mt-1 fs-5"></fa-icon>
                  <div>
                    <h5>{{ 'CONTACT.INFO.PHONE' | translate }}</h5>
                    <a style="text-decoration: none; color: white" href="tel:+971562163835">+971562163835</a>
                  </div>
                </div>
                
                <div class="d-flex mb-4">
                  <fa-icon [icon]="faEnvelope" class="me-3 mt-1 fs-5"></fa-icon>
                  <div>
                    <h5>{{ 'CONTACT.INFO.EMAIL' | translate }}</h5>
                    <p>
                    ruknelnada&#64;gmail.com
                    </p>
                  </div>
                </div>
                
                <!-- Google Map Embed -->
                <div class="mt-4">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3604.3377884853867!2d55.48191738498655!3d25.393501283805264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sar!2seg!4v1740952596700!5m2!1sar!2seg" 
                    width="100%" 
                    height="200" 
                    style="border:0; border-radius: 10px;" 
                    allowfullscreen="" 
                    loading="lazy">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--primary-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.2rem;
    }
    
    .rating {
      color: #ffc107;
    }
  `]
})
export class HomeComponent {
  faBolt = faBolt;
  faFaucet = faFaucet;
  faPaintRoller = faPaintRoller;
  faWater = faWater;
  faBroom = faBroom;
  faArrowRight = faArrowRight;
  faQuoteRight = faQuoteRight;
  faStar = faStar;
  faUsers = faUsers;
  faShippingFast = faShippingFast;
  faDollarSign = faDollarSign;
  faCheckCircle = faCheckCircle;
  faTint = faTint;
  faShieldAlt = faShieldAlt;
  faLeaf = faLeaf;
  faBug = faBug;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  
  services: Service[] = [];
  testimonials: Testimonial[] = [];

  constructor(private dataService: DataService) {
    this.services = this.dataService.getServices();
    this.testimonials = this.dataService.getTestimonials();
  }

  getServiceIcon(iconName: string) {
    const iconMap: {[key: string]: any} = {
      'bolt': this.faBolt,
      'faucet': this.faFaucet,
      'paint-roller': this.faPaintRoller,
      'water': this.faWater,
      'broom': this.faBroom,
      'tint': this.faTint,
      'shield-alt': this.faShieldAlt,
      'leaf': this.faLeaf,
      'bug': this.faBug
    };
    
    return iconMap[iconName] || this.faBolt;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  isImageUrl(str: string): boolean {
    return str.startsWith('assets/') || str.startsWith('http');
  }
}