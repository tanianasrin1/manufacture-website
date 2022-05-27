import { useEffect, useState } from "react"

const useToken = email => {
    const [token, setToken] = useState('');

    useEffect( () => {
        // const email = user?.user?.email;
        const currentUser = {email: email,}
        if(email){
           fetch(`http://localhost:5000/user/${email}`, {
               method: 'PUT',
               headers: {
                   'context-type': 'application/json'
               },
               body: JSON.stringify(currentUser)
           })
           .then(res=> res.json())
           .then(data => {
               const accessToken = data.accessToken;
               localStorage.setItem('accessToken', accessToken);
               setToken(accessToken);
           })
        } 

    } ,[email]);
    return [token];
}

export default useToken;