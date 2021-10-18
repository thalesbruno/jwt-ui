import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useCookies } from 'react-cookie';
import { User } from '../interfaces/User';

export default function useGetUser() {
  const [user, setUser] = useState<User | null>(null);
  const [cookies] = useCookies();
  const [isLoggedin, setIsLoggedIn] = useState<boolean>(user !== null);

  async function getUser() {
    const res: AxiosResponse<User, any> = await axios.get('/user/current', {
      headers: {
        Authorization: `Bearer ${cookies['jwt']}`,
      },
    });
    if (res.status === 200) {
      setUser(res.data);
      setIsLoggedIn(true);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return { user, setUser, isLoggedin };
}
