import { useEffect, useState } from "react";

const useAdmin = email => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

     useEffect( () => {
        //  const email = user?.email;
         console.log(email);
         if(email){
            fetch(`https://evening-citadel-12417.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
                 console.log(data);
                setAdminLoading(false);

            })
         }

     } ,[email])
     return [admin, adminLoading]
}
export default useAdmin;