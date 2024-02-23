

import {useEffect} from "react";
import {useState} from "react";
const User = () => {
    const  [user, setUser] =  useState(null);
    const getUser = async () => {
           const res =  await  fetch('https://dummyjson.com/users');
           const data = await res.json();
           setUser(data);
           await console.log(data)

    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <div>
            Hello
            {
                user && user.users.map((val, index) => {
                    return (
                        <div key={index}>
                            {val.firstName}
                            {val.lastName}
                            {val.id}
                        </div>
                    )}
                )
            }
        </div>
    )
}

export default User