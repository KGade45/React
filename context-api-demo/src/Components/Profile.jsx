import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    return (
        <div>
            {!user ? "Please login" : `Welcome ${user.userName}`}
        </div>
    );
}

export default Profile;
