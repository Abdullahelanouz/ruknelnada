import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { DataService } from '../../services/data.service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FontAwesomeModule
  ],
  template: `
    <section class="py-5" *ngIf="service">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <h1 class="fw-bold mb-4">{{ service.translationKey + '.TITLE' | translate }}</h1>
            <img [src]="service.imageUrl" [alt]="service.translationKey + '.TITLE' | translate" class="img-fluid service-detail-img mb-4">
            <div class="mb-4">
              <p class="lead">{{ service.translationKey + '.FULL_DESC' | translate }}</p>
            </div>
            
            <h4 class="mb-3">{{ 'المميزات' | translate }}</h4>
            <ul class="list-unstyled">
              <li class="mb-2" *ngFor="let feature of getFeatures()">
                <div class="d-flex">
                  <fa-icon [icon]="faCheck" class="text-primary-color me-2 mt-1"></fa-icon>
                  <span>{{ feature | translate }}</span>
                </div>
              </li>
            </ul>
            <h4 class="mb-3">{{ (service.translationKey + '.REASONS' | translate)[0] }}</h4>
            <ul class="list-unstyled">
              <li class="mb-2" *ngFor="let reason of service.translationKey + '.REASONS' | translate; let i = index" [hidden]="i === 0">
                <div class="d-flex">
                  <fa-icon [icon]="faCheck" class="text-primary-color me-2 mt-1"></fa-icon>
                  <span>{{ reason | translate }}</span>
                </div>
              </li>
            </ul>
            <h4 class="mb-3">{{ (service.translationKey + '.IMPORTANCE' | translate)[0] }}</h4>
            <p class="lead">{{ service.translationKey + '.IMPORTANCE' | translate }}</p>
            <h4 class="mb-3">{{ (service.translationKey + '.ADDITIONAL_SERVICES' | translate)[0] }}</h4>
            <ul class="list-unstyled">
              <li class="mb-2" *ngFor="let additionalService of service.translationKey + '.ADDITIONAL_SERVICES' | translate; let i = index" [hidden]="i === 0">
                <div class="d-flex">
                  <fa-icon [icon]="faCheck" class="text-primary-color me-2 mt-1"></fa-icon>
                  <span>{{ additionalService | translate }}</span>
                </div>
              </li>
            </ul>
            <h4 class="mb-3">{{(service.translationKey + '.FAQS' | translate)[0].Q | translate }}</h4>
            <ul class="list-unstyled">
              <li class="mb-2" *ngFor="let faq of service.translationKey + '.FAQS' | translate; let i = index" [hidden]="i === 0">
                <div class="d-flex">
                  <fa-icon [icon]="faCheck" class="text-primary-color me-2 mt-1"></fa-icon>
                  <span>{{ faq.Q | translate }}: {{ faq.A | translate }}</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div class="col-lg-4">
            <div class="card bg-light mb-4">
              <div class="card-body">
                <h4 class="card-title mb-4">{{ 'REQUEST_SERVICE.TITLE' | translate }}</h4>
                <p class="card-text">{{ 'REQUEST_SERVICE.SUBTITLE' | translate }}</p>
                <div class="d-grid">
                  <a routerLink="/contact" class="btn btn-primary-custom">
                    {{ 'NAV.CONTACT' | translate }}
                  </a>
                </div>
              </div>
            </div>
            
            <div class="card bg-primary-gradient text-white">
              <div class="card-body">
                <h4 class="card-title mb-3">{{ 'EMERGENCY_SERVICE.TITLE' | translate }}</h4>
                <p class="card-text">{{ 'EMERGENCY_SERVICE.SUBTITLE' | translate }}</p>
                <div class="d-flex align-items-center mt-4">
                  <fa-icon [icon]="faPhone" class="me-2"></fa-icon>
                  <span class="fs-5">{{ 'EMERGENCY_SERVICE.PHONE' | translate }}</span>
                  <br>
                  <br>
                  <a href="https://wa.me/971562163835">    <fa-icon style="color: green; font-size: 30px" [icon]="faWhatsapp" class="ms-2">
                  
                  </fa-icon> </a>
             

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .service-detail-img {
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class ServiceDetailComponent implements OnInit {
  faCheck = faCheck;
  faPhone = faPhone;
  faWhatsapp = faWhatsapp;
  
  service: Service | undefined;
  serviceId: string = '';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.serviceId = id;
        this.service = this.dataService.getServiceById(id);
      }
    });
   
  }

  getFeatures(): string[] {
    if (!this.service) return [];
    
    const features: string[] = [];
    for (let i = 0; i < 5; i++) {
      const translationKey = `${this.service.translationKey}.FEATURES.${i}`;
      features.push(translationKey);
    }
    
    return features;
  }
}