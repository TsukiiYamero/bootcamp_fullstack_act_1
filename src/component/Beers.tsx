/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Root } from "./types";
import axios from 'axios';


export const Beers = () => {

    const [coffeeList, setCoffeeList] = useState<Root[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        fetchBeers();
    }, []);

    const fetchBeers = async () => {
        try {
            const fetchData = await axios('https://api.sampleapis.com/beers/ale')
            if (fetchData.status === 200)
                setCoffeeList(fetchData.data);

            if (fetchData.status === 404)
                throw new Error('Error 404');
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleReset = () => {
        setCurrentPage(1);
    };

    // Calcular el índice del último elemento en la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    // Calcular el índice del primer elemento en la página actual
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // Obtener los elementos que se deben mostrar en la página actual
    const currentItems = coffeeList.slice(indexOfFirstItem, indexOfLastItem)

    // Calcular el número total de páginas necesarias
    const totalPages = Math.ceil(coffeeList.length / itemsPerPage);

    return (
        <div className="container my-4">
            <h1 className="text-center text-white mb-4">Coffee List</h1>
            <div className="row">
                {currentItems.map((coffee, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <div className="card h-100">
                            <img src={coffee.image} className="card-img-top" alt={coffee.image} />
                            <div className="card-body">
                                <h5 className="card-title">{coffee.name}</h5>
                                <p className="card-text">{coffee.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center">
                <nav>
                    <ul className="pagination">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => handleClick(index + 1)}>
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-primary" onClick={handleReset}>Volver al inicio</button>
            </div>
        </div>
    )
}
