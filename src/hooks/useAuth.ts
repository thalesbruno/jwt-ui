import axios, { AxiosResponse } from 'axios';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router';
import { FormValuesState } from '../interfaces/FormValuesState';
import { Token } from '../interfaces/Token';

export default function useAuth() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const history = useHistory();

  const loginUser = async (data: FormValuesState) => {
    const { username, password } = data;
    try {
      const res: AxiosResponse<Token, any> = await axios.post('/auth/login', {
        username,
        password,
      });
      const { token } = res.data;
      setCookie('jwt', token);
      history.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  const logoutUser = async () => {
    removeCookie('jwt');
    history.push('/');
  };

  return { loginUser, logoutUser };
}
