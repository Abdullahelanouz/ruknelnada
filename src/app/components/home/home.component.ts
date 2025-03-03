import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faBolt, faFaucet, faPaintRoller, faWater, faBroom,
  faArrowRight, faQuoteRight, faStar
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

    <!-- Services Section -->
    <section class="py-5">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-lg-8 mx-auto">
            <h2 class="fw-bold mb-3">{{ 'SERVICES.TITLE' | translate }}</h2>
            <p class="lead text-muted">{{ 'SERVICES.SUBTITLE' | translate }}</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" *ngFor="let service of services">
            <div class="card service-card h-100">
              <div class="card-body text-center p-4">
                <div class="mb-4">
                  <fa-icon [icon]="getServiceIcon(service.icon)" class="service-icon"></fa-icon>
                </div>
                <h4 class="card-title mb-3">{{ service.translationKey + '.TITLE' | translate }}</h4>
                <p class="card-text">{{ service.translationKey + '.SHORT_DESC' | translate }}</p>
                <a [routerLink]="['/services', service.id]" class="btn btn-outline-primary mt-3">
                  {{ 'NAV.SERVICES' | translate }}
                  <fa-icon [icon]="faArrowRight" class="ms-2"></fa-icon>
                </a>
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
    <section class="py-5 bg-light">
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2 class="fw-bold mb-4">{{ 'CONTACT.TITLE' | translate }}</h2>
            <p class="lead mb-4">{{ 'CONTACT.SUBTITLE' | translate }}</p>
            <a routerLink="/contact" class="btn btn-primary-custom btn-lg">
              {{ 'NAV.CONTACT' | translate }}
              <fa-icon [icon]="faArrowRight" class="ms-2"></fa-icon>
            </a>
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
      'broom': this.faBroom
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