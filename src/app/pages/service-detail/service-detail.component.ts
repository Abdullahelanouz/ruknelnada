import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faBolt, faFaucet, faPaintRoller, faWater, faBroom, 
  faCheck, faPhone
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ServicesService, Service } from '../../services/services.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule,
    FontAwesomeModule
  ],
  template: `
    <div class="container py-5" *ngIf="service">
      <div class="row mb-4">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a routerLink="/">{{ 'NAV.HOME' | translate }}</a></li>
              <li class="breadcrumb-item"><a routerLink="/" fragment="services">{{ 'NAV.SERVICES' | translate }}</a></li>
              <li class="breadcrumb-item active" aria-current="page">{{ serviceTitle }}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <h1 class="mb-4">{{ serviceTitle }}</h1>
          <img [src]="service.imageUrl" [alt]="serviceTitle" class="img-fluid service-detail-img mb-4">
          <p class="lead mb-4">{{ serviceDescription }}</p>
          
          <h3 class="mb-3">{{ 'SERVICES.KEY_FEATURES' | translate }}</h3>
<div class="row g-3">
  <div class="col-md-6" *ngFor="let feature of serviceFeatures">
    <div class="feature-item d-flex align-items-center">
      <fa-icon [icon]="faCheck" class="text-success me-3"></fa-icon>
      <span class="feature-text">{{ feature | translate }}</span> <!-- تطبيق الترجمة هنا -->
    </div>
  </div>


          </div>
        </div>
        
        <div class="col-lg-4">
          <div class="card shadow-sm mb-4">
            <div class="card-body">
              <h4 class="card-title mb-4">{{ 'CONTACT.INFO.TITLE' | translate }}</h4>
              <div class="d-grid gap-3">
                <a href="tel:+966123456789" class="btn btn-primary-custom w-100">
                  <fa-icon [icon]="faPhone" class="me-2"></fa-icon>
                  {{ 'CONTACT.INFO.PHONE' | translate }}
                </a>
                <a href="https://wa.me/966123456789" class="btn btn-success w-100">
                  <fa-icon [icon]="faWhatsapp" class="me-2"></fa-icon>
                  {{ 'CONTACT.INFO.WHATSAPP' | translate }}
                </a>
              </div>
            </div>
          </div>
          
          <div class="card shadow-sm">
            <div class="card-body">
              <h4 class="card-title mb-4">{{ 'SERVICES.OTHER_SERVICES' | translate }}</h4>
              <ul class="list-unstyled">
                <li *ngFor="let otherService of allServices" class="mb-3">
                  <a [routerLink]="['/service', otherService.id]" class="text-decoration-none service-link" 
                     [class.active]="otherService.id === serviceId">
                    <div class="d-flex align-items-center">
                      <fa-icon [icon]="getServiceIcon(otherService.id)" class="me-3 text-primary-color"></fa-icon>
                      <span>{{ otherService.translationKey + '.TITLE' | translate }}</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .service-detail-img {
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .feature-item {
      padding: 1rem;
      border-radius: 8px;
      background-color: #f8f9fa;
      transition: all 0.3s ease;
    }
    .feature-item:hover {
      background-color: #e9ecef;
      transform: translateY(-2px);
    }
    .feature-text {
      font-size: 1.1rem;
    }
    .service-link {
      display: block;
      padding: 0.75rem;
      border-radius: 6px;
      transition: all 0.3s ease;
    }
    .service-link:hover, .service-link.active {
      background-color: #f8f9fa;
    }
    .text-primary-color {
      color: var(--primary-color);
    }
    .btn-primary-custom {
      background-color: var(--primary-color);
      border-color: var(--primary-color);
      color: white;
    }
    .btn-primary-custom:hover {
      background-color: var(--primary-color-dark);
      border-color: var(--primary-color-dark);
      color: white;
    }
  `]
})
export class ServiceDetailComponent implements OnInit {
  service!: Service;
  serviceId: string = '';
  serviceTitle: string = '';
  serviceDescription: string = '';
  serviceFeatures: string[] = [];
  allServices: Service[] = [];
  
  // Font Awesome icons
  faBolt = faBolt;
  faFaucet = faFaucet;
  faPaintRoller = faPaintRoller;
  faWater = faWater;
  faBroom = faBroom;
  faCheck = faCheck;
  faPhone = faPhone;
  faWhatsapp = faWhatsapp;

  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService
  ) {
    this.allServices = this.servicesService.getAllServices();
  }

  ngOnInit(): void {
   

    this.route.paramMap.pipe(
      switchMap(params => {
        this.serviceId = params.get('id') || '';
        const service = this.servicesService.getServiceById(this.serviceId);
        if (!service) throw new Error('Service not found');
        this.service = service;
        return this.servicesService.getServiceTitle(this.serviceId);
      })
    ).subscribe({
      next: title => {
        this.serviceTitle = title;
        
        this.servicesService.getServiceFullDescription(this.serviceId)
          .subscribe(desc => this.serviceDescription = desc);
          
        this.servicesService.getServiceFeatures(this.serviceId)
          .subscribe(features => this.serviceFeatures = features || []);
      },
      error: () => {
        // Handle error - could redirect to 404 page
        console.error('Service not found');
      }
    });
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