import { useEffect, useState } from "react"
import { Person } from "./types";
import 'bootstrap/dist/css/bootstrap.min.css';


export const RandomUser = () => {

    const [data, setData] = useState<Person>();

    useEffect(() => {
        fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(data => {
                const infoPerson = data.results[0]
                setData(infoPerson);
            })
    }, []);


    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            {data ? (<div className='col-lg-4'>
                <div className='card text-center '>
                    <div className='card-header pt-2 pb-2'>
                        <img src={data.picture.thumbnail} className='img-fluid rounded-circle' alt="profile" />
                    </div>
                    <div className='card-body'>
                        <h4 className='card-title'>{data.name.first}</h4>
                        <p className='card-text'>{data.email}</p>
                        <p className='card-text'>Phone: {data.phone}</p>
                    </div>
                </div>
            </div>) : null}
        </div>
    )
}
