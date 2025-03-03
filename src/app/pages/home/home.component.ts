import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { 
  faBolt, faFaucet, faPaintRoller, faWater, faBroom, 
  faArrowRight, faStar, faQuoteLeft
} from '@fortawesome/free-solid-svg-icons';
import { ServicesService, Service } from '../../services/services.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule,
    FontAwesomeModule,
    NgbCarouselModule
  ],
  template: `
    <!-- Hero Section -->
    <section class="hero-section" style="background-image: url('https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')">
      <div class="hero-overlay"></div>
      <div class="container hero-content py-5">
        <div class="row min-vh-50 align-items-center py-5">
          <div class="col-lg-8 text-center text-lg-start">
            <h1 class="display-4 fw-bold mb-4">{{ 'HERO.TITLE' | translate }}</h1>
            <p class="lead mb-4">{{ 'HERO.SUBTITLE' | translate }}</p>
            <a routerLink="/" fragment="services" class="btn btn-primary-custom btn-lg">
              {{ 'HERO.CTA' | translate }}
              <fa-icon [icon]="faArrowRight" class="ms-2"></fa-icon>
            </a>
          </div>
        </div>
      </div>
      <div class="wave-shape">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-5">
      <div class="container py-5">
        <div class="row text-center mb-5">
          <div class="col-lg-8 mx-auto">
            <h2 class="fw-bold mb-3">{{ 'SERVICES.TITLE' | translate }}</h2>
            <p class="lead">{{ 'SERVICES.SUBTITLE' | translate }}</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div *ngFor="let service of services" class="col-md-6 col-lg-4">
            <div class="card service-card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <div class="rounded-circle bg-light p-3 d-inline-flex mb-3">
                  <fa-icon [icon]="getServiceIcon(service.id)" class="service-icon"></fa-icon>
                </div>
                <h4 class="card-title mb-3">{{ 'SERVICES.' + service.id.toUpperCase() + '.TITLE' | translate }}</h4>
                <p class="card-text">{{ 'SERVICES.' + service.id.toUpperCase() + '.SHORT_DESC' | translate }}</p>
                <a [routerLink]="['/service', service.id]" class="btn btn-primary-custom mt-3">
                  {{ 'SERVICES.VIEW_DETAILS' | translate }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-5 bg-light">
      <div class="container py-5">
        <div class="row text-center mb-5">
          <div class="col-lg-8 mx-auto">
            <h2 class="fw-bold mb-3">{{ 'TESTIMONIALS.TITLE' | translate }}</h2>
            <p class="lead">{{ 'TESTIMONIALS.SUBTITLE' | translate }}</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-12">
            <ngb-carousel [interval]="5000" [pauseOnHover]="true" [showNavigationArrows]="true" [showNavigationIndicators]="true">
              <ng-template ngbSlide>
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <div class="testimonial-card bg-white p-4 text-center">
                      <fa-icon [icon]="faQuoteLeft" class="fa-2x text-primary-color mb-3"></fa-icon>
                      <p class="lead mb-4">The electrical services provided by Rukn Al-Nada were exceptional. The technicians were professional, punctual, and solved our issues efficiently.</p>
                      <div class="d-flex justify-content-center align-items-center">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer" class="testimonial-img me-3">
                        <div class="text-start">
                          <h5 class="mb-1">Ahmed Al-Saud</h5>
                          <div class="text-warning mb-1">
                            <fa-icon [icon]="faStar"></fa-icon>
                            <fa-icon [icon]="faStar"></fa-icon>
                            <fa-icon [icon]="faStar"></fa-icon>
                            <fa-icon [icon]="faStar"></fa-icon>
                            <fa-icon [icon]="faStar"></fa-icon>
                          </div>
                          <small class="text-muted">Riyadh</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ng-template>
              <ng-template ngbSlide>
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <div class="testimonial-card bg-white p-4 text-center">
                      <fa-icon [icon]="faQuoteLeft" class="fa-2x text-primary-color mb-3"></fa-icon>
                      <p class="lead mb-4">I'm extremely satisfied with the plumbing service. They fixed a complicated leak that other companies couldn't solve. Highly recommended!</p>
                      <div class="d-flex justify-content-center align-items-center">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" class="testimonial-img me-3">
                        <div class="text-start">
                          <h5 class="mb-1">Fatima Al-Harbi</h5>
                          <div class="text-warning mb-1">
                            <fa-icon [icon]="faStar"></fa-icon>
                            <fa-icon [icon]="faStar"></fa-icon>
                            <fa-icon [icon]="faStar"></fa-icon>
                            <fa-icon [icon]="faStar"></fa-icon>
                            <fa-icon [icon]="faStar"></fa-icon>
                          </div>
                          <small class="text-muted">Jeddah</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ng-template>
              <ng-template ngbSlide>
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <div class="testimonial-card bg-white p-4 text-center">
                      <fa-icon [icon]="faQuoteLeft" class="fa-2x text-primary-color mb-3"></fa-icon>
                      <p class="lead mb-4">The painting service transformed our home completely. The team was professional, clean, and finished the job ahead of schedule. Great attention to detail!</p>
                      <div class="d-flex justify-content-center align-items-center">
                        <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Customer" class="testimonial-img me-3">
                        <div class="text-start">
                          <h5 class="mb-1">Khalid Al-Otaibi</h5>
                          <div class="text-warning mb-1">
                            <fa-icon [icon]="faStar"></fa-icon>
                            <fa-icon [icon]="faStar"></fa-icon>
                            <fa-icon [icon]="faStar"></fa-icon>
                            <fa-icon [icon]="faStar"></fa-icon>
                            <fa-icon [icon]="faStar"></fa-icon>
                          </div>
                          <small class="text-muted">Dammam</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ng-template>
            </ngb-carousel>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-primary-gradient text-white">
      <div class="container py-4">
        <div class="row align-items-center">
          <div class="col-lg-8 mb-4 mb-lg-0">
            <h2 class="fw-bold">{{ 'CONTACT.TITLE' | translate }}</h2>
            <p class="lead mb-0">{{ 'CONTACT.SUBTITLE' | translate }}</p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a routerLink="/contact" class="btn btn-light btn-lg">{{ 'NAV.CONTACT' | translate }}</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  services: Service[];
  
  // Font Awesome icons
  faBolt = faBolt;
  faFaucet = faFaucet;
  faPaintRoller = faPaintRoller;
  faWater = faWater;
  faBroom = faBroom;
  faArrowRight = faArrowRight;
  faStar = faStar;
  faQuoteLeft = faQuoteLeft;

  constructor(private servicesService: ServicesService) {
    this.services = this.servicesService.getAllServices();
  }

  getServiceIcon(serviceId: string) {
    switch (serviceId) {
      case 'electricity': return this.faBolt;
      case 'plumbing': return this.faFaucet;
      case 'painting': return this.faPaintRoller;
      case 'drain': return this.faWater;
      case 'cleaning': return this.faBroom;
      default: return this.faBolt;
    }
  }
}