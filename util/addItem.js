import {firestore} from "../lib/firebase";
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

export async function aDD({p}) {
   
    if (!Cookies.get("qid")) {
        const id = uuidv4();
        Cookies.set("qid", id);
        
        await firestore.collection("cartTest").doc(id).collection("cart").doc(p.id).set({
            "imageUrl": p.imageUrl,
            "price":p.formattedPrice,
            "title":p.title,
            "id":p.id

        }).then(() => {
            
            console.log("mmmm");
        });

    } else {
        const value = Cookies.get("qid");
       
        await firestore.collection("cartTest").doc(value).collection("cart").doc(p.id).set({
            "imageUrl": p.imageUrl,
            "price":p.formattedPrice,
            "title":p.title,
            "id":p.id

        }).then(() => {
           
            console.log("me");
        });




    }
    
}