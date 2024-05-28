import type { Dispatch, SetStateAction } from 'react';
import { Person } from './person';

export const Persons = ({ persons, setPersons }: { persons: { id: number, name: string, role: string, img: string }[], setPersons: Dispatch<SetStateAction<{ id: number; name: string; role: string; img: string; }[]>> }) => {

    return (
        <div>
            {
                persons.map((person) =>
                    <Person key={person.id} {...person} />
                )

            }
            <button onClick={() => setPersons([])}>remove</button>
        </div>
    )
}