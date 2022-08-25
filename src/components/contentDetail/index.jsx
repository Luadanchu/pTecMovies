import React, { useState, useEffect }  from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import MovieDetail from '../../movieDetail'
import NavBar from '../navBar'
import Footer from '../footer'
import './style.css'

const ContentDetail = () => {

  const [movieDetail, setMovieDetail] = useState({});

  const param = useParams()

  useEffect(() => {

    const getItem = async () =>{
      try {
        const docRef = doc(db, "movies", param.idMovie);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
          const movieDetail = {id: docSnap.id, ...docSnap.data()}
          setMovieDetail(movieDetail)
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error)
      }
    }
    getItem() 

  }, [param])

  return (
    <div className='containerGralDetail'>
      <NavBar />
      <div className='containerDetail'>
        <MovieDetail movie={movieDetail} />
      </div>
      <Footer />
    </div>
  )
}

export default ContentDetail