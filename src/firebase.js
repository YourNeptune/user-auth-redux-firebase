import firebaseConfig from './firebaseConfig'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth =firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}