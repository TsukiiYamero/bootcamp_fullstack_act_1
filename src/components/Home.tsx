import { Link } from "react-router-dom"
import { useMyContext } from "../context/Context";

export const Home = () => {
    const { user } = useMyContext();
    console.log(user);

    return (
        <div>
            <h1>Pagina de iniicio</h1>


            <p>Hola soy {user?.name}</p>
            <Link to={'/acheron'}>
                ir a una ruta inexistente
            </Link>
        </div>
    )
}
