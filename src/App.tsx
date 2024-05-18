
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Gallery } from '@/components/utils/gallery';
import { Navigation } from './components/Navigation';


function App() {

  return (
    <BrowserRouter>
      <RoutesGallery />
      <Navigation />
    </BrowserRouter>
  )
}


const RoutesGallery = () => {
  return (
    <Routes>
      {
        Gallery.map(({ path, img, title, description }) => (
          <Route
            key={path}
            path={path}
            element={<div>
              <img src={img} alt={title} />
              <h1>{title}</h1>
              <p>{description}</p>
            </div>}
          />
        ))
      }
    </Routes>
  )
}

export default App
