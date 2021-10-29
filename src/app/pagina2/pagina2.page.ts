import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
  dato:any; //tipo que permite cualquier valor 
  constructor(private activeRoute: ActivatedRoute, private router:Router) { 
    //llamar a la ruta activa y obtener sus parámetros, si es que tiene 
    this.activeRoute.queryParams.subscribe(params=>{ //utilizo lambda
      if(this.router.getCurrentNavigation().extras.state){
        this.dato = this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.dato)
      }
    })
  }

  ngOnInit() {
  }


}
