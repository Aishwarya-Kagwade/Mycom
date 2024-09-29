import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  submitted = false;
  successMessage = '';

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Validates required and email format
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    
    // Check if the form is valid
    if (this.contactForm.valid) {
      this.successMessage = 'Your message has been sent successfully!';
      this.contactForm.reset(); // Reset form after submission
      this.submitted = false; // Reset submitted status
    }
  }
}
