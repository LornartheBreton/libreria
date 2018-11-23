import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddBookPage } from '../add-book/add-book';
import { FullBookPage } from '../full-book/full-book';
import { AuthorPage } from '../author/author';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addBook=AddBookPage;
  fullBook=FullBookPage;
  author=AuthorPage;
  libro=0;
  libros=[
    {
      titulo: "Shadow Over Innsmouth",
      autor: {
        nombre: "H. P. Lovecraft",
        foto: "../assets/imgs/lovecraft.jpg",
        biografia: "H.P. Lovecraft, in full Howard Phillips Lovecraft, (born August 20, 1890, Providence, Rhode Island, U.S.—died March 15, 1937, Providence), American author of fantastic and macabre short novels and stories, one of the 20th-century masters of the Gothic tale of terror.",
      },
      portada: "../assets/imgs/innsmouth.jpg",
      editorial: " ‎Fantasy Publishing Company, Inc",
      resenia: "Great book"
    }
  ];

  temp={ 
    titulo: "",
    autor: {
      nombre: "",
      foto: "",
      biografia: ""
    },
    portada: "",
    editorial: ""
  };

  constructor(public navCtrl: NavController) {

  }

  viewFull(libro: any){
    this.navCtrl.push(this.fullBook,libro)
  }

}
