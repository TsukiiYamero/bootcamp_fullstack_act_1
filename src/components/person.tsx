export const Person = ({ name, role, img }: { name: string, role: string, img: string, id: number }) => {

    return (
        <div className="card">
            <img src={img} alt="Avatar" />
            <h4>{name}</h4>
            <p>{role}</p>
        </div>
    )
}