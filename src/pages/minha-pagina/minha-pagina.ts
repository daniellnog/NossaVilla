import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MinhaPaginaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minha-pagina',
  templateUrl: 'minha-pagina.html',
})
export class MinhaPaginaPage {

  produtos: Array<{Descricao: string, Valor: number}>

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.produtos = [
      {Descricao:'Pizza', Valor: 20},
      {Descricao:'Hamburguer', Valor: 30},
      {Descricao:'Pizza 3', Valor: 50},
    ];
  }

  public somarDoisNumeros (num1:number, num2:number) : void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    // this.somarDoisNumeros(10,5);
    // console.log('ionViewDidLoad MinhaPaginaPage');
  }
}
