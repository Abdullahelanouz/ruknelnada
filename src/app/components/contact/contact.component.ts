import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
    <section class="py-5">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-lg-8 mx-auto">
            <h1 class="fw-bold mb-3">{{ 'CONTACT.TITLE' | translate }}</h1>
            <p class="lead">{{ 'CONTACT.SUBTITLE' | translate }}</p>
          </div>
        </div>
        
        <div class="row g-5">
          <!-- Contact Form
          <div class="col-lg-7">
            <div class="card shadow-sm">
              <div class="card-body p-4">
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
                  <div class="mb-3">
                    <label for="name" class="form-label">{{ 'CONTACT.FORM.NAME' | translate }}</label>
                    <input type="text" class="form-control" id="name" formControlName="name">
                    <div class="text-danger" *ngIf="submitted && f['name'].errors">
                      <small *ngIf="f['name'].errors['required']">Name is required</small>
                    </div>
                  </div>
                  
                  <div class="mb-3">
                    <label for="email" class="form-label">{{ 'CONTACT.FORM.EMAIL' | translate }}</label>
                    <input type="email" class="form-control" id="email" formControlName="email">
                    <div class="text-danger" *ngIf="submitted && f['email'].errors">
                      <small *ngIf="f['email'].errors['required']">Email is required</small>
                      <small *ngIf="f['email'].errors['email']">Please enter a valid email</small>
                    </div>
                  </div>
                  
                  <div class="mb-3">
                    <label for="phone" class="form-label">{{ 'CONTACT.FORM.PHONE' | translate }}</label>
                    <input type="tel" class="form-control" id="phone" formControlName="phone">
                    <div class="text-danger" *ngIf="submitted && f['phone'].errors">
                      <small *ngIf="f['phone'].errors['required']">Phone is required</small>
                    </div>
                  </div>
                  
                  <div class="mb-3">
                    <label for="message" class="form-label">{{ 'CONTACT.FORM.MESSAGE' | translate }}</label>
                    <textarea class="form-control" id="message" rows="5" formControlName="message"></textarea>
                    <div class="text-danger" *ngIf="submitted && f['message'].errors">
                      <small *ngIf="f['message'].errors['required']">Message is required</small>
                    </div>
                  </div>
                  
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary-custom">
                      {{ 'CONTACT.FORM.SUBMIT' | translate }}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div> -->
          
          <!-- Contact Information -->
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
                    <br>
                    <a style="text-decoration: none; color: white" href="tel:+0555390334">+0555390334</a>
                    <br>
                    <a style="text-decoration: none; color: white" href="tel:+0562163831">+0562163831</a>
                    <br>
                    <a style="text-decoration: none; color: white" href="tel:+0562163841">+0562163841</a>
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
  `
})
export class ContactComponent {
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }
    
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', this.contactForm.value);
    
    // Reset the form
    this.contactForm.reset();
    this.submitted = false;
    
    // Show success message (in a real app)
    alert('Your message has been sent successfully!');
  }
}