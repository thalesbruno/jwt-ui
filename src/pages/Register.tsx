import React from 'react';

export default function RegisterPage(): JSX.Element {
  return (
    <div className="login">
      <form action="submit">
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar a senha" />
        <select name="role">
          <option value="">--Select a role--</option>
          <option value="AUTHOR">Author</option>
          <option value="DEVELOPER">Developer</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
