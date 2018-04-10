import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = "Rick";
  array =[1,2,3,4,5,6,7,8,9,10 ];
  PI=Math.PI;
  a = 0.234;
  salary = 1234.5;

  hero= {
    name:"Logan",
    key:"Wolverine",
    age:500,
    address:{
      street:"sdfsf",
      houese:"sdfsdf"
    }
  }

  promiseValue = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("Arrive data"),3500);
  })

  date = new Date();

  name2 = "riCk aNd mOrTy"
  video='Y2pAYKJcG4g';
}
