import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import React, {useState, useEffect, useContext, createContext} from 'react';
let firebaseConfig = {
  apiKey: "AIzaSyBgkr-rx7rP2lZtI-YxpyGWROzOhjss9D8",
  authDomain: "shopmakeitfast.firebaseapp.com",
  projectId: "shopmakeitfast",
  storageBucket: "shopmakeitfast.appspot.com",
  messagingSenderId: "552023197654",
  appId: "1:552023197654:web:0d9ffab8ea1eba951d4677",
  measurementId: "G-29XMHDXB3G"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export const auths = firebase.auth();
export const fi=firebase.auth;
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
  // Firestore exports
export const firestore = firebase.firestore();
export const storage = firebase.storage();
//export const fromMillis = firebase.firestore.Timestamp.fromMillis;
 /**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
  export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('shopname', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
  }


  /**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
 export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
   
  };
}
const authContext = createContext();

export function ProvideAuth({children}) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = (number,appVerifier) => {
        return auths
            .signInWithPhoneNumber(number,appVerifier);
    };
    const confirm=(otp)=>{
      return confirmationResult.confirm(otp).then((response) => {
        setUser(response.user);
        return response.user;
      })
    }

    
    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(false);
            });
    };

  

   

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return {
        userId: user && user.uid,
        signin,
        confirm,
        signout,
        
        
    };
}

  