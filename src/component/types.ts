/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Person {
    cell: string
    dob: { date: string, age: number }
    email: string
    gender: string
    id: { name: string, value: string }
    location: { street: any, city: string, state: string, country: string, postcode: number }
    login: { uuid: string, username: string, password: string, salt: string, md5: string }
    name: { title: string, first: string, last: string }
    nat: string
    phone: string
    picture: { large: string, medium: string, thumbnail: string }
    registered: { date: string, age: number }
}

export interface Root {
    price: string
    name: string
    rating: Rating
    image: string
    id: number
}

export interface Rating {
    average: number
    reviews: number
}
