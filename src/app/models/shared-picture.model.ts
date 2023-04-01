//Ce fichier a pour but de gérer les données qui seront affichées dans le composant
//Soit par la création de classes
//Soit par un service qui appelle une API pour récupérer les données, ou pour gérer l'authentification et l'autorisation

//On déclare une classe avec ses propriétés
export class SharedPicture {
    //Ici on aurait pu créer un constructeur d'objet pour pouvoir réutiliser le modèle (mais on peut très bien ne pas le faire ex: modele spot)
    title!: string;
    description?: string; 
    createdDate!: Date;
    likes!: number;
    imageURL!: string;
    location?:string  //? rend la props optionnelle !
}