import React, { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
          .then((res) => res.json())
          .then((data) => console.log(data));
      }, [user?.email]);
    

    return (
        <div>
            <h1>My orders</h1>
        </div>
    );
};

export default MyOrders;