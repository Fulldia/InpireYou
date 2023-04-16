import { Injectable } from "@angular/core";
import { SharedPicture } from '../models/shared-picture.model';



//Injectable -> Permet de déclarer cette classe comme un service
@Injectable({
    providedIn: 'root'  //Objet de configuration : Permet d'enregistrer le service à la racine de l'app -> une seule instance de ce service
})

//Pas de NgOnInit() pour les services : on déclare et instance dans la même expression
export class SharedPictureService {
    sharedPicture: SharedPicture[] = [
        {
        id:1,
        title:"Couché de Soleil",
        description:"Vendredi soir, couché de soleil exceptionnel, j'ai utilisé mon Canon R5 couplé à mon RF 24-105mm. Pur régal.",
        createdDate: new Date(),
        likes: 7,
        imageURL: 'https://bateliers-arcachon.com/wp-content/uploads/2018/10/le_cote_d_argent_un_projet_une_innovation.jpg',
        location: 'Arcachon'},
        {
        id:2,
        title:"Paysage",
        description:"Paysage après ma balade habituelle, j'ai utilisé mon Canon R5 couplé à mon RF 24-105mm. Pur régal.",
        createdDate: new Date(),
        likes:150,
        imageURL: 'https://ericheymans.b-cdn.net/wp-content/uploads/2012/08/dawn-field-grass-164025.jpg',
        },
        {
        id:3,
        title:'Portrait',
        createdDate:new Date(),
        likes:18,
        imageURL:'https://apprendre-la-photographie.net/wp-content/uploads/2016/10/portrait-photo-bokeh-arriere-plan-flou-Christoph-Gellert.jpg'
        }
];

    //METHODES DE LE SERVICE
    getAllPictures(): SharedPicture[] { //: SharedPicture[]  = le type de retour de la méthode
        return this.sharedPicture;
    }

    
    getPictureById(sharedPictureId : number): SharedPicture{
        const sharedPicture = this.sharedPicture.find(sharedPicture => sharedPicture.id === sharedPictureId);
        if(!sharedPicture){
            throw new Error('Picture not found !');
        } else {
            return sharedPicture;
        }

    }

    pictureById(sharedPictureId : number, pictureType : 'like' | 'unlike'): void { //la méthode ne retourne rien
        const sharedPicture = this.getPictureById(sharedPictureId);
        pictureType === 'like' ? sharedPicture.likes++ : sharedPicture.likes--;       
    }
}