import { Component } from '@angular/core';
import {  Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-filtro',
  templateUrl: 'filtro.html',
})
export class FiltroPage {

  public filter: any = [{ 
    "id": "parametro_1",
    "titulo": "Precio",
    "valores": [{
      "id": "valor_1",
      "valor": "100$"
    } , {
      "id": "valor_2",
      "valor": "200$"
    } , {
      "id": "valor_3",
      "valor": "300$"
    }]
  } , { 
    "id": "parametro_2",
    "titulo": "Duracion",
    "valores": [{
      "id": "valor_4",
      "valor": "5 Visitas"
    } , {
      "id": "valor_5",
      "valor": "10 Visitas"
    }]
  }, { 
    "id": "parametro_3",
    "titulo": "Titulo",
    "valores": [{
      "id": "valor_6",
      "valor": "Valor"
    }]
  }, { 
    "id": "parametro_4",
    "titulo": "Titulo",
    "valores": [{
      "id": "valor_7",
      "valor": "Valor"
    }]
  }];
  
  constructor(public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    
  }
  
  dismiss() {
   this.viewCtrl.dismiss();
  }

  aceptar(){
    
  }

  onChange( valor ){
    console.info("onChange:");
    console.info(valor);
  }

  onClick( params ){
    console.info("onClick:");
    console.info(params);
  }

}
