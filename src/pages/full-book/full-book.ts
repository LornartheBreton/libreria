import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FullBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-full-book',
  templateUrl: 'full-book.html',
})
export class FullBookPage {
  titulo: string;
  autor: string;
  portada: string;
  editorial: string;
  resenia: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titulo=this.navParams.get("titulo");
    this.autor=this.navParams.get("autor").nombre;
    this.portada=this.navParams.get("portada");
    this.editorial=this.navParams.get("editorial");
    this.resenia=this.navParams.get("resenia");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FullBookPage');
  }

}
