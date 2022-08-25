//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home';
import ContentCategory from './components/contentCategory';
import ContentDetail from './components/contentDetail';
import Favourites from './components/favourites';
import NotFound from './components/notFound';
import FavProvider from './context/FavouriteContext';
import Login from './components/Login/indes';

function App() {
  return (
    <FavProvider>  
      <BrowserRouter>
        <div className='appContainerGral'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/Genre/:idGenre' element={<ContentCategory />} />
            <Route path='/detail/:idMovie' element={<ContentDetail />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FavProvider> 
  );
}

export default App;
