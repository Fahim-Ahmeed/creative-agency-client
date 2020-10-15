import React, { useContext } from 'react';
import { UserContext } from '../../../App';


const Topbar = () => {
    const [user, setUser] = useContext(UserContext)
    return (
        <div className="d-flex justify-content-between align-items-center" style={{ height: '80px' }}>
            <h3 className='mt-4 mx-4'></h3>
            <div>
                <h5 className='mt-4 mr-4'>{user.name}</h5>
            </div>
        </div>
    );
};

export default Topbar;