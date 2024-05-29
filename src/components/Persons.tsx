/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, type Dispatch, type SetStateAction } from 'react';
import { Person } from './person';

export const Persons = ({ persons, setPersons }: { persons: { id: string, name: string, role: string, img: string }[], setPersons: Dispatch<SetStateAction<{ id: string; name: string; role: string; img: string; }[]>> }) => {
    const [editId, setEditId] = useState<string>();
    const [isEditing, setIsEditing] = useState<boolean>();
    const [personToDelete, setPersonToDelete] = useState<{ id: string, name: string, role: string, img: string }>();
    const [editedPerson, setEditedPerson] = useState({
        name: '',
        role: '',
        img: '',
        id: "0"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setEditedPerson((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handdleEdit = (id: string) => {
        setEditId(id);
        setIsEditing(true);
        const person = persons.find((person) => person.id === id);

        if (!person)
            return;

        setEditedPerson({ ...person });
    }

    const handleDelete = (id: string) => {
        setPersonToDelete(persons.find((person) => person.id === id))
    }

    const handleSave = () => {
        setPersons(
            persons.map((person) => (person.id === editId ? editedPerson : person))
        );
        setIsEditing(false);
        setEditId('');
        setEditedPerson({
            name: '',
            role: '',
            img: '',
            id: "0"
        })
    }

    const cancelDelete = () => {
        setPersonToDelete(undefined);
    }

    const confirmDelete = () => {
        if (!personToDelete) return;
        const updatedPersons = persons.filter((person) => person.id !== personToDelete.id);
        setPersons(updatedPersons);
        cancelDelete();
    }

    const createPerson = () => {
        setPersons([...persons, { ...editedPerson, id: (persons.length + 1).toString() }]);
        setEditedPerson({
            name: '',
            role: '',
            img: '',
            id: "0"
        })
    }

    return (
        <div>
            <h2>Team</h2>

            <ul className='container d-flex gap-3 flex-wrap'>
                {
                    persons.map((person) =>
                        <Person handleEdit={handdleEdit} handleDelete={handleDelete} key={person.id} {...person} />
                    )

                }
            </ul>

            <section>
                <h2 className=''>{isEditing ? 'Editar' : 'Agregar'}</h2>

                <div className='d-flex gap-3 flex-column'>
                    <input name='name' value={editedPerson.name} onChange={handleChange} type="text" className="form-control" placeholder="name" aria-label="Username1" aria-describedby="basic-addon1" />
                    <input name='role' value={editedPerson.role} onChange={handleChange} type="text" className="form-control" placeholder="role" aria-label="Username2" aria-describedby="basic-addon2" />
                    <input name='img' value={editedPerson.img} onChange={handleChange} type="text" className="form-control" placeholder="img" aria-label="Username3" aria-describedby="basic-addon3" />
                </div>

                <div className='mt-3'>
                    <button onClick={isEditing ? handleSave : createPerson} className='btn btn-success'>{isEditing ? 'Update' : 'Add'}</button>
                </div>

            </section>


            <div id='idmodal' className='modal fade' tabIndex={-1}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h3 className='modal-title text-danger-emphasis'>
                                Profavor Confirma
                            </h3>

                            <button
                                onClick={cancelDelete}
                                className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>

                        <div className='modal-body'>
                            <p className='text-secondary'>¿Estas seguro de eliminar a {personToDelete?.name} </p>
                        </div>

                        <div className='modal-footer d-flex gap-3'>
                            <button onClick={cancelDelete} className='btn btn-secondary' data-bs-dismiss='modal'>Cancelar</button>

                            <button onClick={confirmDelete} className='btn btn-secondary' data-bs-dismiss='modal'>Eliminar</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}