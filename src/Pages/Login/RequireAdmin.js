import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hook/useAdmin';
import Loading from '../Shared/Loading';

const RequireAdmin = ({children}) => {
    const [user, isLoading] = useAuthState(auth);
    const [admin, loading ] = useAdmin(user?.email);
    if(isLoading || loading){
          return <Loading></Loading>
    }
 if(!admin){
     signOut(auth);
     return <Navigate to='/login'></Navigate> 
 }
    return children;
};

export default RequireAdmin;