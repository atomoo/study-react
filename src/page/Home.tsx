/**
 * @file home
 * @author atom
 */
import * as React from 'react';
import {useEffect, useState} from 'react';
import {getUserInfo, IUser} from '../api/user';

const Home: React.FC = () => {
    const [user, setUser] = useState<IUser>(null);
    useEffect(() => {
        console.log('useEffect');
        async function getUser() {
            if (!user) {
                const userInfo = await getUserInfo();
                setUser(userInfo);
            }
        }
        getUser();
    }, []);
    return <div>
        <h1>home</h1>
        <p>{JSON.stringify(user)}</p>
    </div>;
};

export default Home;
