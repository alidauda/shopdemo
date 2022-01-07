import { App } from "../components/App";
import Cookies from 'js-cookie';
import { firestore, postToJSON } from "../lib/firebase";
export default function Cart({property,id}){
    console.log(property,id);
    return(
        <App/>
    );
} 

