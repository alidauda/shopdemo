import {firestore} from "../lib/firebase";
import Cookies from 'js-cookie';

 export  async function  Addd({id}) {
  const userId= Cookies.get("qid")
    
    let tot=0;
   let counter= 0   
    
    counter=counter+1;
    const ref =await firestore.collection('cartTest').doc(id).collection(user.shopname).doc(post.slug).update({
      "quantity":counter,
      "amount":post.price*counter,
  
    })
    console.log("added")
   
  
 }
  
  
   export async function Remove({id}) {
    const userId= Cookies.get("qid")
    let tot=0;
  
    if(counte>1){
  
      counte=counte-1;
      
      const ref =await firestore.collection('cart').doc(userId).collection(user.shopname).doc(post.slug).update({
      "quantity":counte,
      "amount":post.price*counte,
  
    })
    Cookie.set(post.slug,counte);
  
    const val =parseInt(Cookie.get(post.slug));
    tot+=val;
    setitems(val)
    
    }else if(counte==1){
      counte=counte-1;
      const ref =await firestore.collection('cart').doc(userId).collection(user.shopname).doc(post.slug).delete().then(()=>{
        show=false;
        Cookie.set(post.slug,counte);
      });
      setitems(counte);
      var addme=parseInt(Cookie.get(post.slug));
      tot+=addme;
  setcartItems(tot);
     
      
    }
   
  }


