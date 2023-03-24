import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCqWv269KvstuiLKUWph7NA5wvHz1S0CFY',
  authDomain: 'music-69534.firebaseapp.com',
  projectId: 'music-69534',
  storageBucket: 'music-69534.appspot.com',
  messagingSenderId: '614520896260',
  appId: '1:614520896260:web:e76cdde1943a70b32aae51'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence err ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, storage, songsCollection, commentsCollection }
