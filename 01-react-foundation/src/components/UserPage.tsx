import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ReqResUserListResponse, User } from '../interfaces';

const loadUsers = async(page: number = 1): Promise<User[]> => {
    try {
        const {data} = await axios.get<ReqResUserListResponse>("https://reqres.in/api/users",{
            params: {
                page: page
            }
        });
        return data.data;
    } catch (error) {
     console.log(error);
     return[];
    }
}

export const UserPage = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {

        loadUsers().then( setUsers);
    })

  return (
    <>
    
    <h3>USUARIOS:</h3>
    <table>
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map( user => (
                    <UserRow key={user.id} user= {user}/>
                ))
            }
        </tbody>
    </table>

    <div>
    <button>prev</button>
    <button>next</button>
    </div>
    
    
    </>
  )
}

interface Props {
    user: User;
}

export const UserRow = ({user}: Props) => {

    const { avatar, first_name, last_name, email } = user;

    return(
        <tr>
                <td><img style={{width: "50px"}} src={avatar} alt="User avatar" /></td>
                <td>{first_name} {last_name} </td>
                <td>{email} </td>
            </tr>

    );
}
