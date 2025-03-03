import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, map, of } from 'rxjs';

export interface Service {
  id: string;
  icon: string;
  imageUrl: string;
  translationKey: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private services: Service[] = [
    {
      id: 'electricity',
      icon: 'bolt',
      imageUrl: 'assets/images/electricity.webp',
      translationKey: 'SERVICES.ELECTRICITY'
    },
    {
      id: 'plumbing',
      icon: 'faucet',
      imageUrl: 'assets/images/sa.webp',
      translationKey: 'SERVICES.PLUMBING'
    },
    {
      id: 'painting',
      icon: 'paint-roller',
      imageUrl: 'assets/images/paint.webp',
      translationKey: 'SERVICES.PAINTING'
    },
    {
      id: 'drain',
      icon: 'water',
      imageUrl: 'assets/images/ma.webp',
      translationKey: 'SERVICES.DRAIN'
    },
    {
      id: 'cleaning',
      icon: 'broom',
      imageUrl: 'assets/images/cleaning.webp',
      translationKey: 'SERVICES.CLEANING'
    }
  ];

  constructor(private translate: TranslateService) {}

  getAllServices(): Service[] {
    return this.services;
  }

  getServiceById(id: string): Service | undefined {
    return this.services.find(service => service.id === id);
  }

  getServiceTitle(id: string): Observable<string> {
    const service = this.getServiceById(id);
    if (!service) return of('');
    return this.translate.get(`${service.translationKey}.TITLE`);
  }

  getServiceShortDescription(id: string): Observable<string> {
    const service = this.getServiceById(id);
    if (!service) return of('');
    return this.translate.get(`${service.translationKey}.SHORT_DESC`);
  }

  getServiceFullDescription(id: string): Observable<string> {
    const service = this.getServiceById(id);
    if (!service) return of('');
    return this.translate.get(`${service.translationKey}.FULL_DESC`);
  }

  getServiceFeatures(id: string): Observable<string[]> {
    const service = this.getServiceById(id);
    if (!service) return of([]);
    return this.translate.get(`${service.translationKey}.FEATURES`);
  }
}