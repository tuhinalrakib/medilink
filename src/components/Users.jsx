import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    return {
        user,
        dispatch
    }
};

export default Users;