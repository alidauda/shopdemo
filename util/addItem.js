import {firestore} from "../lib/firebase";
import Cookies from 'js-cookie';
export async function aDD() {
   
    if (!Cookies.get("qid")) {
        const id = uuidv4();
        Cookies.set("qid", id);
        
        await firestore.collection("test").doc(id).set({
            "asme": "done"
        }).then(() => {
            
            console.log("mmmm");
        });

    } else {
        const value = Cookies.get("qid");
       
        await firestore.collection("test").doc(value).set({
            "asme": "done"
        }).then(() => {
           
            console.log("me");
        });




    }
}