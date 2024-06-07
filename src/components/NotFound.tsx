import { Link } from 'react-router-dom';
import './notFound.css';
import { routes } from '../routes/routes.types';

export const NotFound = () => {
    return (
        <section className='not-found-page container'>
            <div className="site">
                <div className="sketch">
                    <div className="bee-sketch red"></div>
                    <div className="bee-sketch blue"></div>
                </div>

                <h1>
                    404:
                    <small>Page Not Found</small>
                </h1>

                <button type="button" className="btn btn-outline-light btn-link">
                    <Link to={routes.home}>    Volver al Inicio</Link>
                </button>

            </div>
        </section>
    )
}
