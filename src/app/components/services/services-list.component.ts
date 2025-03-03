import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faBolt, faFaucet, faPaintRoller, faWater, faBroom,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../../services/data.service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FontAwesomeModule
  ],
  template: `
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
  `
})
export class ServicesListComponent {
  faBolt = faBolt;
  faFaucet = faFaucet;
  faPaintRoller = faPaintRoller;
  faWater = faWater;
  faBroom = faBroom;
  faArrowRight = faArrowRight;
  
  services: Service[] = [];

  constructor(private dataService: DataService) {
    this.services = this.dataService.getServices();
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
}