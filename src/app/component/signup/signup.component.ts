import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  formValues!: any;
  selectedImage: File | null = null; 

  constructor(private fb: FormBuilder, private api: ApiServiceService, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    
  }

  dataSubmit() {
    console.log(this.signupForm.value);
    this.formValues = this.signupForm.value;
    console.log('Collected from form :', this.formValues);

    const formData: FormData = new FormData();
    formData.append('first_name', this.formValues.first_name);
    formData.append('last_name', this.formValues.last_name);
    formData.append('email', this.formValues.email);
    formData.append('password', this.formValues.password);

    // Check if selectedImage is not null before appending to formData
    if (this.selectedImage) {
      formData.append('profile_pic', this.selectedImage, this.selectedImage.name);
    }

    this.api.addData(formData).subscribe((res: any) => {
      console.log('Response after posting:', res);
      if (res.status === 200) {
        alert('Registration Done');
        // this.router.navigateByUrl('/form-page');
      } else {
        alert('Registration Error,try again');
      }
    });
  }

  onFileSelection(event: any) {
   
    this.selectedImage = event.target.files[0];
    console.log('Selected Image:', this.selectedImage);
 
}
}
