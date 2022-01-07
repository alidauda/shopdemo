import  App  from "../components/App";
import Cookies from 'js-cookie';
import { firestore, postToJSON } from "../lib/firebase";
import { useState,useEffect } from "react";
export default function Cart({property}){
   const id =  Cookies.get("qid")
   const [posts, setPosts] = useState([]);
const [see,setsee]= useState(false)
   // function to fetch data from database
   useEffect(() => {
 
     firestore.collection('cartTest').doc(id).collection("cart")
       .onSnapshot((snapshot) => {
        setsee(true);
         setPosts(
           snapshot.docs.map((doc) => ({
             id: doc.id,
             post: doc.data(),
           })),
           setsee(false),
         );
       });
  }, []);

   
    return(
        <App posts={posts} con={see}/>
    );
} 

