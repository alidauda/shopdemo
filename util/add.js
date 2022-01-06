import {firestore} from "../lib/firebase";
import Cookies from 'js-cookie';
 export  async function  Addd() {
  const userId= Cookies.get("qid")
    
    let tot=0;
      
    
    counte=counte+1;
    const ref =await firestore.collection('cart').doc(userId).collection(user.shopname).doc(post.slug).update({
      "quantity":counte,
      "amount":post.price*counte,
  
    })
    console.log("added")
   
  Cookie.set(post.slug,counte);
  const val =parseInt(Cookie.get(post.slug));
  
  tot+=val;
  setcartItems(tot);
  setitems(val)}
  
   export async function Remove() {
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


