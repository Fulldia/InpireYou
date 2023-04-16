import { Injectable } from "@angular/core";
import { Photograph } from '../models/photographer.model';



//Injectable -> Permet de déclarer cette classe comme un service
@Injectable({
    providedIn: 'root'  //Objet de configuration : Permet d'enregistrer le service à la racine de l'app -> une seule instance de ce service
})

//Pas de NgOnInit() pour les services : on déclare et instance dans la même expression
export class PhotographerService {
    photograph: Photograph[] = [
        {
        id:1,
        name:'Clément ETAIT',
        numberofpic: 5,
        description:'Photographe sur Bordeaux, je suis spécialisé  dans les portrait de couples.',
        createdDate: new Date(),
        follower: 58,
        imageURL: 'https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010_960_720.jpg'   
        },
        {
        id:2,
        name:'Laura APLAA',
        numberofpic: 49,
        description:"''Capturer chaque instant pour que l'éternel demeurre''",
        createdDate: new Date(),
        follower: 240,
        imageURL: 'https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265_960_720.jpg'   
        }
       ];

    //METHODES DE LE SERVICE
    getAllPhotographers(): Photograph[] { //: SharedPicture[]  = le type de retour de la méthode
        return this.photograph;
    }

    
    getPictureById(photographerId : number): Photograph{
        const photograph = this.photograph.find(photograph => photograph.id === photographerId);
        if(!photograph){
            throw new Error('Picture not found !');
        } else {
            return photograph;
        }

    }

    pictureById(photographerId : number, photographerType : 'follower' | 'notfollower'): void { //la méthode ne retourne rien
        const photograph = this.getPictureById(photographerId);
        photographerType === 'follower' ? photograph.follower++ : photograph.follower--;       
    }
}