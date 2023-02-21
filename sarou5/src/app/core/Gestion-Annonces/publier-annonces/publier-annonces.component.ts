import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-publier-annonces',
	templateUrl: './publier-annonces.component.html',
	styleUrls: ['./publier-annonces.component.css']
})

export class PublierAnnoncesComponent implements OnInit {


	
	constructor() {
	
	}


	ngOnInit(): void {
        document!.addEventListener('readystatechange', event => { 
            const steps = Array.from(document.querySelectorAll("form .step"));
            const nextBtn = document.querySelectorAll("form .next-btn");
            const prevBtn = document.querySelectorAll("form .previous-btn");
            const form = document.querySelector("form")!;
            console.log(steps)

            
            nextBtn.forEach((button) => {
              button.addEventListener("click", () => {
                changeStep("next");
              });
            });
            prevBtn.forEach((button) => {
              button.addEventListener("click", () => {
                changeStep("prev");
              });
            });
            
            form.addEventListener("submit", (e) => {
              e.preventDefault();
              const inputs:any = [];
              form.querySelectorAll("input").forEach((input) => {
                const { name, value } = input;
                inputs.push({ name, value });
              });
              console.log(inputs);
              form.reset();
            });
             
            function changeStep(btn :any ) {
              let index = 0;
              const active = document.querySelector("form .active");
              console.log(active)
              index = steps.indexOf(active!);
              console.log(index)
              steps[index].classList.remove("active");
              if (btn === "next") {
                index++;
              } else if (btn === "prev") {
                index--;
              }
              steps[index].classList.add("active");
            }
        });





	}

}

