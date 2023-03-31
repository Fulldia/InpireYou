import { Component, OnInit, Input} from '@angular/core';
import { SharedPicture } from '../models/shared-picture.model';

@Component({
  selector: 'app-shared-picture',
  templateUrl: './shared-picture.component.html',
  styleUrls: ['./shared-picture.component.scss']
})

/*DECLARATION DE LA CLASSE DU COMPONENT et DEFINITION DES VARIABLES*/
export class SharedPictureComponent implements OnInit {
  @Input() sharedPicture!: SharedPicture; //input décorateur qui va permettre d'injecter le modèle dans le component et utiliser l'object dans le parent app.component

  title!:string;  
  description!:string;
  createdDate!:Date;
  likes!: number;
  imageURL!:string;
  buttonText!:string;
  btn: any;
  isPrimary = false;
  isSecondary = true;


  /*INITIALISATION DES VARIABLES*/
  ngOnInit(){ /*on initialise la donnée grâce à la méthode ngOnInit, implémenté par l'interface OnInit*/
    this.buttonText="J'aime";
  }

  /*METHODES ASSOCIES AU COMPOSANT*/
  pictureLike(){
    /*si pictureLike n'est pas cliqué, on incrémente*/
    if (this.buttonText === "J'aime"){    
      this.sharedPicture.likes++;
      this.buttonText="Je n'aime plus";   
      this.isPrimary = !this.isPrimary;
      this.isSecondary = !this.isSecondary;   
    }
    /*si pictureLike est déjà cliqué, on décrémente*/
    else{    
      this.sharedPicture.likes--;
      this.buttonText="J'aime";
      this.isPrimary = !this.isPrimary;
      this.isSecondary = !this.isSecondary;
    }
 


    
  }
 
}

