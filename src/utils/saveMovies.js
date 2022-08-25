import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const saveMovies = async () => {
    //console.log("get in ones");
    const response = await fetch('/mock/dbMovie.json');
    const moviesToSave = await response.json();

    Object(moviesToSave).forEach (async(movie) => {
        await addDoc(collection(db, "movies"), {
            Title: movie.Title,
            Year: movie.Year,
            Rated: movie.Rated,
            Runtime: movie.Runtime,
            Genre: movie.Genre,
            Director: movie.Director,
            Actors: movie.Actors,
            Plot: movie.Plot,
            Language: movie.Language,
            Poster: movie.Poster,
            trailer: movie.trailer,
            Ratings: movie.Ratings
        });
    })
}

export default saveMovies;