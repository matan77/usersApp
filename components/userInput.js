import React from "react";
import { faker } from '@faker-js/faker';


export default function UserInput() {
    const MIN = 7;
    const MAX = 120;
    const createRandomUser = () => ({
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: MIN + Math.floor(Math.random() * MAX),
        sexType: faker.person.sexType()
    }
    )
    return <>

    </>;

}