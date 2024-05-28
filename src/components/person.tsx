export const Person = ({ name, role, img, id, handleEdit }:
    { name: string, role: string, img: string, id: string, handleEdit: (id: string) => void }) => {


    return (
        <li className="col">
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{role}</p>
                </div>
                <div className='mb-4'>
                    <button
                        onClick={() => handleEdit(id)}
                        className="btn btn-success me-2">Editar</button>
                    <button
                        className="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </li>
    )
}