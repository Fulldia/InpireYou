//Ce fichier a pour but de créer un modèle réutilisable (ici l'image partagée)

//On déclare une classe avec ses propriétés
export class SharedPicture {

    //On créé un constructeur d'objet pour pouvoir réutiliser le modèle
    constructor(public title: string, 
                public description: string, 
                public createdDate: Date, 
                public likes: number, 
                public imageURL: string){
    }
}