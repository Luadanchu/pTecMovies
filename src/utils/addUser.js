import { addDoc, collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

const addUser = (favItems, addnewUser) => {

  //const batch = writeBatch(db)
    
  favItems.forEach((movieFav) => {
    getDoc(doc(db, 'movies', movieFav.id))

    .then(async () => {
      
      if (favItems.length !== 0) {
        addDoc(collection(db, 'users'), addnewUser).then(({ id }) => {
                
          // batch.commit().then(() => {
          //   console.log(`User id ${id}`)
          // })
        }).catch((error) => {
          console.log(`Error: ${error.message}`);
          //alert(`Something it's wrong: ${error.message}`);
        })

      }
    })
  })
}
export default addUser;