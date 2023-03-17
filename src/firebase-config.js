import {initializeApp} from 'firebase/app'
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig ={

        apiKey: "AIzaSyD-yH6y9lb2nNjutauAhZprw1XvDi3HZ3o",
        authDomain: "chat-app0123.firebaseapp.com",
        projectId: "chat-app0123",
        storageBucket: "chat-app0123.appspot.com",
        messagingSenderId: "615146352443",
        appId: "1:615146352443:web:ca1ec5a31cdd97a98e911e"
      };

      const app = initializeApp(firebaseConfig)
      export const auth = getAuth(app)
      export const provider = new GoogleAuthProvider()
      export const db = getFirestore(app);