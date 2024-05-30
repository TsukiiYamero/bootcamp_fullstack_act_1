/* eslint-disable @typescript-eslint/no-unused-vars */
import { useId, useState, type Dispatch, type SetStateAction } from 'react';
import { PersonType } from './types';

export const usePersons = ({ setPersons, persons }: { setPersons: Dispatch<SetStateAction<PersonType[]>>, persons: PersonType[] }) => {
    const [editId, setEditId] = useState<string>();
    const [isEditing, setIsEditing] = useState<boolean>();
    const [msgError, setMsgError] = useState('');
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
        setMsgError('');
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
        if (!editedPerson.name.trim() || !editedPerson.role.trim() || !editedPerson.img.trim()) {
            setMsgError('Por favor complete todos los campos');
            return;
        }

        setMsgError('');
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
        setMsgError('');
        cancelDelete();
    }

    const createPerson = () => {
        /* validar si no hay datos */
        if (!editedPerson.name.trim() || !editedPerson.role.trim() || !editedPerson.img.trim()) {
            setMsgError('Por favor complete todos los campos');
            return;
        }

        setMsgError('');
        setPersons([...persons, { ...editedPerson, id: String(new Date().getTime()) }]);
        setEditedPerson({
            name: '',
            role: '',
            img: '',
            id: "0"
        })
    }

    /* CANCEL EDIT */

    const cancelEdit = () => {
        setIsEditing(false);
        setMsgError('');
        setEditId('');
        setEditedPerson({
            name: '',
            role: '',
            img: '',
            id: "0"
        })
    }


    return {
        editedPerson,
        setEditedPerson,
        editId,
        setEditId,
        isEditing,
        setIsEditing,
        msgError,
        setMsgError,
        personToDelete,
        setPersonToDelete,
        handleChange,
        handdleEdit,
        handleDelete,
        handleSave,
        cancelDelete,
        confirmDelete,
        createPerson,
        cancelEdit
    }
}