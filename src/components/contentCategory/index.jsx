import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { collection, query, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import ItemCategoryList from '../itemCategoryList';
import NavBar from '../navBar';
import Footer from '../footer';
import './style.css'
// import saveMovies from '../../utils/saveMovies';

const ContentCategory = () => {

  const [movies, setMovies] = useState([])
  const [moviesFilt, setMoviesFilt] = useState([])
  const params = useParams()

  useEffect(() => {
    (async () => {
      try {
        // saveMovies()
        const q = query(collection(db, "movies"));
        const querySnapshot = await getDocs(q);
        const peliculas = [];
        querySnapshot.forEach((doc) => {
          peliculas.push({id: doc.id, ...doc.data()})
        });
        if(params?.idGenre){
          const moviesFilt = peliculas.filter(pelicula => pelicula.Genre === params.idGenre)
          setMoviesFilt(moviesFilt); 
        } else{
          setMovies(peliculas);
        }
      } catch (error) {
        console.log(error);
      }
    })();

  }, [params.idGenre])

  return (
    <div className='containerCat' >
      <NavBar />
        {moviesFilt.length !== 0 ? <ItemCategoryList movies={params?.idGenre ? moviesFilt : movies} /> : <p>Loading...</p> }
      <Footer />
    </div>
  )
}

export default ContentCategory