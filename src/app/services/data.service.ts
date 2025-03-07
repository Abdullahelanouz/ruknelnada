import { Injectable } from '@angular/core';
import { Service } from '../models/service.model';
import { Testimonial } from '../models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
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
      imageUrl: 'assets/images/wall.jpg',
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
      imageUrl: 'assets/images/clean.webp',
      translationKey: 'SERVICES.CLEANING'
    },
   
  
      
  ];

  private testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Abo Nono',
      avatar: 'A',
      rating: 5,
      comment: 'شركة ممتازة بارك الله فيكم',
      date: 'قبل 3 سنوات',
      reviewCount: 1
    },
    {
      id: '2',
      name: 'Tata Alsh2y',
      avatar: 'T',
      rating: 5,
      comment: 'احسن الشركات ال اشتغلت عندي',
      date: 'قبل 3 سنوات',
      reviewCount: 4
    },
    {
      id: '3',
      name: 'EHAB55 الشمادي',
      avatar: 'assets/images/testimonials/ehab.jpg',
      rating: 5,
      comment: 'شركة زين ربنا يوفقكم',
      date: 'قبل 3 سنوات',
      reviewCount: 1
    },
    {
      id: '4',
      name: 'Ahmedmostafa Sror',
      avatar: 'A', //image
      rating: 5,
      comment: 'شركه محترمه',
      date: 'قبل 3 سنوات',
      reviewCount: 2
    }
  ];

  constructor() { }

  getServices(): Service[] {
    return this.services;
  }

  getServiceById(id: string): Service | undefined {
    return this.services.find(service => service.id === id);
  }

  getTestimonials(): Testimonial[] {
    return this.testimonials;
  }
}