import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../../services/data.service';
import { Testimonial } from '../../models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FontAwesomeModule
  ],
  template: `
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-lg-8 mx-auto">
            <h1 class="fw-bold mb-3">{{ 'TESTIMONIALS.TITLE' | translate }}</h1>
            <p class="lead">{{ 'TESTIMONIALS.SUBTITLE' | translate }}</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" *ngFor="let testimonial of testimonials">
            <div class="card testimonial-card h-100">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-4">
                  <div class="avatar me-3" *ngIf="!isImageUrl(testimonial?.avatar || '')">
                    {{ testimonial?.avatar }}
                  </div>
                  <img *ngIf="isImageUrl(testimonial?.avatar || '')" 
                       [src]="testimonial?.avatar" 
                       [alt]="testimonial?.name" 
                       class="avatar">
                  <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-center">
                      <h5 class="mb-0">{{ testimonial?.name }}</h5>
                      <span class="text-muted small">{{ testimonial?.date }}</span>
                    </div>
                    <div class="rating mt-1">
                      <fa-icon [icon]="faStar" class="text-warning" *ngFor="let star of getStars(testimonial?.rating || 0)"></fa-icon>
                    </div>
                    <p class="text-muted small mb-0" *ngIf="hasMultipleReviews(testimonial)">
                      {{ getReviewCount(testimonial) }} مراجعات
                    </p>
                    <p class="text-muted small mb-0" *ngIf="hasSingleReview(testimonial)">
                      مراجعة واحدة
                    </p>
                  </div>
                </div>
                <div class="testimonial-content text-end">
                  <fa-icon [icon]="faQuoteRight" class="text-primary-color opacity-25 fs-1 mb-2"></fa-icon>
                  <p class="card-text">{{ testimonial?.comment }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonial-card {
      border: none;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease;
    }
    
    .testimonial-card:hover {
      transform: translateY(-5px);
    }
    
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
    
    .testimonial-content {
      position: relative;
      font-family: 'Cairo', sans-serif;
    }
    
    .social-stats {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      padding-top: 1rem;
      margin-top: 1rem;
    }
  `]
})
export class TestimonialsComponent {
  faQuoteRight = faQuoteRight;
  faStar = faStar;
  testimonials: Testimonial[] = [];

  constructor(private dataService: DataService) {
    this.testimonials = this.dataService.getTestimonials();
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  isImageUrl(str: string): boolean {
    return str.startsWith('assets/') || str.startsWith('http');
  }

  hasMultipleReviews(testimonial: Testimonial | undefined): boolean {
    return !!testimonial?.reviewCount && testimonial.reviewCount > 1;
  }

  hasSingleReview(testimonial: Testimonial | undefined): boolean {
    return testimonial?.reviewCount === 1;
  }

  getReviewCount(testimonial: Testimonial | undefined): number {
    return testimonial?.reviewCount || 0;
  }
}