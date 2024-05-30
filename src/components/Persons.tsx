/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState, type Dispatch, type SetStateAction } from 'react';
import { Person } from './person';
import { usePersons } from './usePersons';
import { PersonType } from './types';

export const Persons = ({
    persons, setPersons
}: {
    persons: PersonType[],
    setPersons: Dispatch<SetStateAction<PersonType[]>>
}) => {

    const {
        isEditing,
        editedPerson,
        personToDelete,
        msgError,
        confirmDelete,
        handdleEdit,
        handleDelete,
        cancelDelete,
        createPerson,
        handleChange,
        handleSave,
        cancelEdit
    } = usePersons({ persons, setPersons })

    return (
        <div className='container mt-5'>

            <h2 className=''>Trabajadores</h2>

            <div className='row d-flex mt-5' style={{ marginInline: "auto", justifyContent: "center" }}>

                <PersonsContainer
                    persons={persons}
                    handdleEdit={handdleEdit}
                    handleDelete={handleDelete} />

                <FormContainer
                    isEditing={isEditing!}
                    editedPerson={editedPerson}
                    msgError={msgError}
                    createPerson={createPerson}
                    handleChange={handleChange}
                    handleSave={handleSave}
                    cancelEdit={cancelEdit} />

            </div>

            <ModalDelete
                personToDelete={personToDelete!}
                confirmDelete={confirmDelete}
                cancelDelete={cancelDelete} />

        </div>
    )
}

export const PersonsContainer = ({ persons, handdleEdit, handleDelete }: { persons: { id: string, name: string, role: string, img: string }[], handdleEdit: (id: string) => void, handleDelete: (id: string) => void }) => {
    return (
        <ul className='d-flex gap-3 flex-wrap col' style={{ maxHeight: "720px", maxWidth: "630px", overflowY: "auto" }}>
            {
                persons.length === 0
                    ? <h3>No se encontraron Trabajadores</h3>
                    : persons.map((person) =>
                        <Person handleEdit={handdleEdit} handleDelete={handleDelete} key={person.id} {...person} />
                    )

            }
        </ul>
    )
}

export const FormContainer = ({ isEditing, editedPerson, msgError, createPerson, handleChange, handleSave, cancelEdit }: { isEditing: boolean, editedPerson: PersonType, msgError: string, createPerson: () => void, handleChange: (event: ChangeEvent<HTMLInputElement>) => void, handleSave: () => void, cancelEdit: () => void }) => {
    return (
        <section className='mt-5 col' style={{ maxWidth: "300px", paddingLeft: "1rem" }}>
            <h2 className=''>{isEditing ? 'Editar' : 'Agregar'}</h2>

            <div className='d-flex gap-3 flex-column' >
                <input name='name' value={editedPerson.name} onChange={handleChange} type="text" className="form-control" placeholder="name" aria-label="Username1" aria-describedby="basic-addon1" />
                <input name='role' value={editedPerson.role} onChange={handleChange} type="text" className="form-control" placeholder="role" aria-label="Username2" aria-describedby="basic-addon2" />
                <input name='img' value={editedPerson.img} onChange={handleChange} type="text" className="form-control" placeholder="img" aria-label="Username3" aria-describedby="basic-addon3" />

                {
                    msgError && <p className='text-danger'>{msgError}</p>
                }
            </div>

            <div className='mt-3 d-flex gap-3'>
                <button onClick={isEditing ? handleSave : createPerson} className='btn btn-success'>{isEditing ? 'Actualizar' : 'Crear'}</button>
                {
                    isEditing && <button onClick={cancelEdit} className='btn btn-danger'>Cancel</button>
                }
            </div>

        </section>
    )
}

export const ModalDelete = ({ personToDelete, confirmDelete, cancelDelete }: { personToDelete: PersonType, confirmDelete: () => void, cancelDelete: () => void }) => {
    return (
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
    )
}