import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FontAwesomeModule
  ],
  template: `
    <div class="container py-5">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h1 class="mb-3">{{ 'CONTACT.TITLE' | translate }}</h1>
          <p class="lead">{{ 'CONTACT.SUBTITLE' | translate }}</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="card shadow-sm h-100">
            <div class="card-body p-4">
              <h3 class="mb-4">{{ 'CONTACT.TITLE' | translate }}</h3>
              
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
                <div class="mb-3">
                  <label for="name" class="form-label">{{ 'CONTACT.NAME' | translate }} *</label>
                  <input type="text" class="form-control" id="name" formControlName="name" 
                         [ngClass]="{'is-invalid': submitted && contactForm.get('name')?.errors}">
                  <div *ngIf="submitted && contactForm.get('name')?.errors" class="invalid-feedback">
                    <div *ngIf="contactForm.get('name')?.errors?.['required']">{{ 'CONTACT.ERRORS.NAME_REQUIRED' | translate }}</div>
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="email" class="form-label">{{ 'CONTACT.EMAIL' | translate }} *</label>
                  <input type="email" class="form-control" id="email" formControlName="email"
                         [ngClass]="{'is-invalid': submitted && contactForm.get('email')?.errors}">
                  <div *ngIf="submitted && contactForm.get('email')?.errors" class="invalid-feedback">
                    <div *ngIf="contactForm.get('email')?.errors?.['required']">{{ 'CONTACT.ERRORS.EMAIL_REQUIRED' | translate }}</div>
                    <div *ngIf="contactForm.get('email')?.errors?.['email']">{{ 'CONTACT.ERRORS.EMAIL_INVALID' | translate }}</div>
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="phone" class="form-label">{{ 'CONTACT.PHONE' | translate }} *</label>
                  <input type="tel" class="form-control" id="phone" formControlName="phone"
                         [ngClass]="{'is-invalid': submitted && contactForm.get('phone')?.errors}">
                  <div *ngIf="submitted && contactForm.get('phone')?.errors" class="invalid-feedback">
                    <div *ngIf="contactForm.get('phone')?.errors?.['required']">{{ 'CONTACT.ERRORS.PHONE_REQUIRED' | translate }}</div>
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="message" class="form-label">{{ 'CONTACT.MESSAGE' | translate }} *</label>
                  <textarea class="form-control" id="message" rows="5" formControlName="message"
                            [ngClass]="{'is-invalid': submitted && contactForm.get('message')?.errors}"></textarea>
                  <div *ngIf="submitted && contactForm.get('message')?.errors" class="invalid-feedback">
                    <div *ngIf="contactForm.get('message')?.errors?.['required']">{{ 'CONTACT.ERRORS.MESSAGE_REQUIRED' | translate }}</div>
                  </div>
                </div>
                
                <button type="submit" class="btn btn-primary-custom">
                  <fa-icon [icon]="faPaperPlane" class="me-2"></fa-icon>
                  {{ 'CONTACT.SEND' | translate }}
                </button>
                
                <div *ngIf="submitted && success" class="alert alert-success mt-3">
                  {{ 'CONTACT.SUCCESS' | translate }}
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div class="col-lg-6">
          <div class="card shadow-sm h-100">
            <div class="card-body p-4">
              <h3 class="mb-4">{{ 'CONTACT.CONTACT_INFO' | translate }}</h3>
              
              <div class="d-flex mb-4">
                <div class="me-3">
                  <div class="bg-primary-gradient text-white rounded-circle p-3">
                    <fa-icon [icon]="faMapMarkerAlt"></fa-icon>
                  </div>
                </div>
                <div>
                  <h5>{{ 'CONTACT.ADDRESS' | translate }}</h5>
                  <p class="mb-0">الشارقه ,عجمان, دبي</p>
                </div>
              </div>
              
              <div class="d-flex mb-4">
                <div class="me-3">
                  <div class="bg-primary-gradient text-white rounded-circle p-3">
                    <fa-icon [icon]="faPhone"></fa-icon>
                  </div>
                </div>
                <div>
                  <h5>{{ 'CONTACT.PHONE_NUMBER' | translate }}</h5>
                  <p class="mb-0">+971562163835</p>
                </div>
              </div>
              
              <div class="d-flex mb-4">
                <div class="me-3">
                  <div class="bg-primary-gradient text-white rounded-circle p-3">
                    <fa-icon [icon]="faEnvelope"></fa-icon>
                  </div>
                </div>
                <div>
                  <h5>{{ 'CONTACT.EMAIL_ADDRESS' | translate }}</h5>
                  <p class="mb-0">info&#64;ruknalnada.ae</p>
                </div>
              </div>
              
              <div class="mt-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7348290207437!2d55.4046391!3d25.2876097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2z2KfZhNio2K_Zitin2LHYjCDYp9mE2LTYp9ix2YLYqQ!5e0!3m2!1sen!2sae!4v1651234567890!5m2!1sen!2sae"
                  width="100%" 
                  height="250" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .bg-primary-gradient {
      background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  
  // Font Awesome icons
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faPaperPlane = faPaperPlane;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }
    
    console.log('Form submitted:', this.contactForm.value);
    
    this.success = true;
    this.contactForm.reset();
    this.submitted = false;
    
    setTimeout(() => {
      this.success = false;
    }, 5000);
  }
}