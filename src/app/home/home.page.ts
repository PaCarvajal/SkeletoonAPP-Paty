import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  //los datos que se usan en la página
  dato:String;

  constructor(public toastController: ToastController, private router: Router) {}
  
  //se inicializa ng para llamar variables de un lado a otro
  ngOnInit(){}
  //METODOS
  saludar(){
    //llamar a un Toast con mensaje de Saludo
    this.presentToast("Hola " + this.dato)
  }
  siguiente(){
    //creo un elemento NavigateExtra para pasar parámetros 
    let navigationExtra: NavigationExtras={
      state: {dato: this.dato}
    }
    //utilizo AP enrutador para llamar a la siguiente página
    this.router.navigate(['/pagina2'],navigationExtra)
  }

  //el toast
  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000 //duración del mensaje
    });
    toast.present();
  }

}
