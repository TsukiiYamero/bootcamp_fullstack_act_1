
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
        Gallery.map(({ path, img, title }) => (
          <Route
            key={path}
            path={path}
            element={<ViewImage img={img} title={title} />}
          />
        ))
      }
    </Routes>
  )
}

const ViewImage = ({ img, title }: { img: string, title: string, description?: string }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginInline: 'auto', alignItems: 'center', width: '700px', height: '500px', gap: '1rem' }}>
      <img style={{ width: '100%', objectFit: 'cover', borderRadius: '9px' }} src={img} alt={title} />
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'white', margin: 0 }}>{title}</h1>
    </div>
  )
}

export default App
