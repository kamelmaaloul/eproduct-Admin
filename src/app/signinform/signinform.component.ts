import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Informations } from '../models/informations';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.component.html',
  styleUrls: ['./signinform.component.scss']
})
export class SigninformComponent  {
  company:boolean
  name!: string;
  fname!: string;
  username!:string;
  password!:string;
  email!:string;
  birthDate!: String;
  numberPhone!:string;
  urlimg!:string;
  person_or_company!:string;
  showConfirmMAIL=false;
  show_Not_Confirm_Username_message=false;
  show_Not_Confirm_familyname_message=false;
  show_Not_Confirm_name_message=false;
  show_Not_Confirm_password_message=false;
  show_Not_Confirm_birthdate_message=false;
  show_Not_Confirm_phonenumber_message=false;
  show_Not_Confirm_email_message=false;
  show_Not_Confirm_Repassword_message=false;
  show_Not_Confirm_img_message=false;
  show_person_inputs=true;
  show_company_inputs=false;
  informations!: Informations[];
  code1!:number;
  code2!:number;
  new_inser!:any;
  mail_rec!:string;//relate and run with confirm email

  number1=Math.floor((Math.random() * 9)+1);//test i am not robot
  number2=Math.floor((Math.random() * 9)+1);//test i am not robot
  constructor(private dataservice:UserService,private  location :Location) {
    this.informations=this.dataservice.getInformations();
    
  }
//
  back(): void {
  
      this.location.back()
 
  }
  //test i am not robot
  save_conpany(answer:string,username:string,password:string,repassword:string,name:string,
    cph:string,phonenumber:string,email:string,img:string) {
      //the'if': i used it for call all methods controler
      if(this.isCorrectname(name)
        &&this.isCorrectUsername(username)&&this.isCorrectPASSWORD(password,repassword)
        &&this.isCorrectemail(email)&&this.confirmInfo(email)
        &&this.isNumberPh(phonenumber)
        &&this.isCorrectImage(img)){
          //test i am not robot
          if(Number(answer)!=this.number1+this.number2){
            this.showConfirmMAIL=false;
            window.alert("ERROR:\nThe result of the operation is incorrect");
          }else{
            //cph+phonenumber: for union like this exm: '+213667844433'
            phonenumber=cph+phonenumber;
            this.code1=Math.floor((Math.random() * 100));
            this.code2=Math.floor((Math.random() * 100));
            this.mail_rec=email;
            this.name=name;
            this.fname="";
            this.username=username;
            this.password=password;
            this.email=email;
            this.birthDate="";
            this.numberPhone=phonenumber;
            this.urlimg=img;
            this.person_or_company="company";
            this.showConfirmMAIL=true;
          }
      }else{
        this.showConfirmMAIL=false;
      }
  }
  //test i am not robot
  //this method runing on user click on login button
  save_person(answer:string,username:string,password:string,repassword:string,name:string,familyname:string,
    birthdate:string,cph:string,phonenumber:string,email:string,img:string) {
      
      //the'if': i used it for call all methods controler
      if(this.isCorrectname(name)&&this.isCorrectfamilyname(familyname)
        &&this.isCorrectUsername(username)&&this.isCorrectPASSWORD(password,repassword)
        &&this.isCorrectemail(email)&&this.confirmInfo(email)
        &&this.isCorrectbirthdate(birthdate)&&this.isNumberPh(phonenumber)
        &&this.validation_name_fname_birth(name,familyname,birthdate)&&this.isCorrectImage(img)){
          //test i am not robot
          if(Number(answer)!=this.number1+this.number2){
            //cph+phonenumber: for union like this exm: '+213667844433'
            this.showConfirmMAIL=false;
            window.alert("ERROR:\nThe result of the operation is incorrect");
          }else{
            phonenumber=cph+phonenumber;
            this.code1=Math.floor((Math.random() * 100));
            this.code2=Math.floor((Math.random() * 100));
            this.mail_rec=email;
            this.name=name;
            this.fname=familyname;
            this.username=username;
            this.password=password;
            this.email=email;
            this.birthDate=birthdate;
            this.numberPhone=phonenumber;
            this.urlimg=img;
            this.person_or_company="person";
            this.showConfirmMAIL=true;
          }
      }else{
        this.showConfirmMAIL=false;
      }
  }

  gotoCompany(){
    this.company=true
    this.showConfirmMAIL=false;
    this.show_company_inputs=true;
    this.show_person_inputs=false;
  }
  gotoPerson(){
    this.company=false
    this.showConfirmMAIL=false;
    this.show_company_inputs=false;
    this.show_person_inputs=true;
  }
  
  isConfirm_code_mail(confirmCode:string){
    let realy_confirm:number;
    realy_confirm=this.code1*(this.code1*this.code2)+this.code2*(this.code1*this.code2);
    if(confirmCode===""+realy_confirm){
      this.new_inser={
        name: this.name,fname:this.fname,username:this.username,
        password:this.password,email:this.email,
        birthDate:this.birthDate,numberPhone:this.numberPhone,
        person_or_company:this.person_or_company,urlimg:this.urlimg
      }
      this.informations.push(this.new_inser);
      window.alert("Your information has been successfully added");
    }
  }
  validation_name_fname_birth(name:string,fname:string,birthdate:string):boolean{
    for(var c = 0; c < this.informations.length; c++){
      if(this.informations[c].name===name&&this.informations[c].fname===fname&&
        this.informations[c].birthDate===birthdate){
          this.show_Not_Confirm_name_message=true;
          this.show_Not_Confirm_familyname_message=true;
          this.show_Not_Confirm_birthdate_message=true;
          return false;
      }
    }
    //this.informations.join
    this.show_Not_Confirm_name_message=false;
    this.show_Not_Confirm_familyname_message=false;
    this.show_Not_Confirm_birthdate_message=false;
    return true;
  }
  //this method runing on user click on select image
  isCorrectImage(URLimg:string):boolean{
    if(URLimg===null || URLimg===""){
      this.show_Not_Confirm_img_message=true;
      return false;
    }
    this.show_Not_Confirm_img_message=false;
    return true;
  }

  confirmInfo(email:string):boolean{
    for(var c = 0; c < this.informations.length; c++){
      if(this.informations[c].email===email){
        this.show_Not_Confirm_email_message=true;
        this.showConfirmMAIL=false;
        return false;
      }
    }
    this.show_Not_Confirm_email_message=false;
    this.showConfirmMAIL=true;
    return true;
  }

  //control if the input birthday is correct or no
  isCorrectbirthdate(value:string):boolean{
    //registered the birthdate 'yyyy-mm-dd' like this exm:'2021-08-03'
    if(value!==''&&this.isNumber(value[0])&&this.isNumber(value[1])&&this.isNumber(value[2])&&this.isNumber(value[3])&&//control year
      this.isNumber(value[5])&&this.isNumber(value[6])&&//control month
        this.isNumber(value[8])&&this.isNumber(value[9])//control day
        )
        {
          this.show_Not_Confirm_birthdate_message=false;
          return true;
        }
    this.show_Not_Confirm_birthdate_message=true;
    return false;
  }

  //control if the input number is correct or no
  isNumberPh(value:string):boolean{
    let c:number;//conter of for loop
    let control:number;//the some of the correct chars in the input
    control=0;
    if(value.length>=6){
      for(c=0;c<value.length;c++){
        //if the char is in[a..z]or[A..Z] then it is corresct
        if(this.isNumber(value[c])){
          control=control+1;
        }
      }
      //after the controler method: all chars are correct or no
      if(control===value.length){
        this.show_Not_Confirm_phonenumber_message=false;
        return true;
      }
    }
    this.show_Not_Confirm_phonenumber_message=true;
    return false;
  }

  //test if the first char is number or no
  isNumber(value:string):boolean{
    let control:number;
    control=0;
    if(value[0].charCodeAt(0)>=48 && value[0].charCodeAt(0)<=57){
      control=control+1;
    }
    if(control===value.length){
      return true;
    }
    return false;
  }

  //validation of email
  isCorrectemail(value:string):boolean{
    let c:number;//conter of for loop
    let control,controlA:number;
    control=0;//the some of the correct chars in the input
    controlA=0;//the some of '@'
    if(value.length>=10){
      if(this.isChar(value[0])&&value[0]!==' '){
        for(c=0;c<value.length;c++){
          //test the char is in [0..9]or[a..z]or[A..Z]or'.'  or no
          if(this.isChar(value[c])
          ||(this.isNumber(value[c])&&c!==0&&c!==value.length-1)
          ||(value[c]==='.'&&c!==0&&c!==value.length-1)){
            control=control+1;
          }
          //test the char is '@' or no 
          //test'@' is the first or the end char in input
          if(value[c]==='@'&&c!==0&&c!==value.length-1){
            controlA=controlA+1;
            control=control+1;
          }
        }
      }
      //test we have one '@' and all char(number or char)
      if(control===value.length&&controlA==1){
        this.show_Not_Confirm_email_message=false;
        return true;
      }
    }
    this.show_Not_Confirm_email_message=true;
    return false;
  }

  //test the char0 is in[a..z]or[A..Z] or no
  isChar(value:string):boolean{
    let control:number;
    control=0;
    if((value[0].charCodeAt(0)>=65 && value[0].charCodeAt(0)<=90)||
        (value[0].charCodeAt(0)>=97 && value[0].charCodeAt(0)<=122)){
      control=control+1;
    }
    if(control===value.length && control!==0){
      return true;
    }
    return false;
  }

  //test the password is correct?
  isCorrectPASSWORD(value:string,value1:string):boolean{
      this.show_Not_Confirm_Repassword_message=false;
      this.show_Not_Confirm_password_message=false;
      let c:number;//conter of for loop
      let control,control_spcal:number;//the some of the correct chars in the input
      control=0;
      control_spcal=0;
      if(value.length>=8 && value.length<=20){
        for(c=0;c<value.length;c++){
          if(this.isChar(value[c])||this.isNumber(value[c])){
            control=control+1;
          }else{
            //other symbols are accepted 
            switch(value[c]){
              case '-':control=control+1;control_spcal=control_spcal+1;break;
              case '_':control=control+1;control_spcal=control_spcal+1;break;
              case '.':control=control+1;control_spcal=control_spcal+1;break;
              case '@':control=control+1;control_spcal=control_spcal+1;break;
              case ',':control=control+1;control_spcal=control_spcal+1;break;
              case '/':control=control+1;control_spcal=control_spcal+1;break;
              case '(':control=control+1;control_spcal=control_spcal+1;break;
              case ')':control=control+1;control_spcal=control_spcal+1;break;
            }
          }
        }
        if(control_spcal===0){
          this.show_Not_Confirm_password_message=true;
          return false;
          //this.show_Not_Confirm_Repassword_message=true;
        }else if(control===value.length){
          this.show_Not_Confirm_password_message=false;
          this.show_Not_Confirm_Repassword_message=false;
          if(value===value1){
            return true;
          }else{
            this.show_Not_Confirm_Repassword_message=true;
          }
        }else{
          this.show_Not_Confirm_password_message=true;
        }
      }else{
        this.show_Not_Confirm_password_message=true;
      }
      return false;
  }

  //test username, name or familyname are correct?
  isCorrectUsername(value:string):boolean{
    if(this.islettres(value)){
      this.show_Not_Confirm_Username_message=false;
      return true;
    }
    this.show_Not_Confirm_Username_message=true;
    return false;
  }

  isCorrectname(value:string):boolean{
    if(this.islettres(value)){
      this.show_Not_Confirm_name_message=false;
      return true;
    }
    this.show_Not_Confirm_name_message=true;
    return false;
  }

  isCorrectfamilyname(value:string):boolean{
    if(this.islettres(value)){
      this.show_Not_Confirm_familyname_message=false;
      return true;
    }
    this.show_Not_Confirm_familyname_message=true;
    return false;
  }

  islettres(value:string):boolean{
    let c:number;
    let control:number;
    control=0;
    if(value.length>=2){
      for(c=0;c<value.length;c++){
        if(this.isChar(value[c])||(value[c]===' '&&c!==0&&c!==value.length-1)){
          control=control+1;
        }
      }
      if(control===value.length && control!==0){
        return true;
      }
    }
    return false;
  }

}
