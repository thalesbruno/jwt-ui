import React from 'react';
import useAuth from '../hooks/useAuth';
import useForm from '../hooks/useForm';

export default function LoginPage(): JSX.Element {
  const { values, handleChange } = useForm({
    username: '',
    password: '',
  });

  const { loginUser } = useAuth();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await loginUser(values);
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuário"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button
          disabled={values.username.length < 1 || values.password.length < 1}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
