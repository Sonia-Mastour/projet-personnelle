import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {

    function login() {
      const username = (document.getElementById("username") as HTMLInputElement).value;
      const password = (document.getElementById("password") as HTMLInputElement).value;
    
      if (username === "myusername" && password === "mypassword") {
        alert("Login successful!");
      } else {
        alert("Login failed. Please try again.");
      }
    }

    function signup() {
      const username = (document.getElementById("username") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const password = (document.getElementById("password") as HTMLInputElement).value;
    
      // Perform validation on the input fields
      if (!username || !email || !password) {
        alert("Please fill out all fields.");
        return;
      }
    
      // Perform additional validation on the email field
      if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
    
      // Create a new user object and store it somewhere
      const newUser = {
        username: username,
        email: email,
        password: password
      };
      // Here you would typically store the new user object in a database or some other storage system
    
      // Display a success message to the user
      alert("Sign-up successful!");
    }
    
    function isValidEmail(email: string) {
      // Perform email validation using a regular expression
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    }
    
    
    
    throw new Error('Method not implemented.');
  }
  //Form Validables 
  registerForm:any =  FormGroup;
  submitted = false;
  //Add user form actions
  get f() { return this.registerForm.controls; }
  onSubmit() {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      alert("Great!!");
    }
    
  
    }}