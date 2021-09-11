import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
  
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  form : FormGroup;
  submitted = false;
  
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form =this.formBuilder.group({
      message: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required,Validators.email]],
      subject: ['', [Validators.required,Validators.maxLength(20)]], 
      
       
    }) 
  
    
  }


  get f(){
    return this.form.controls;
  }
  
  onClickSubmit(data:any) {
    console.log("Entered  : " + data.email +data.subject+data.message);
   
 }
    
  }
  

