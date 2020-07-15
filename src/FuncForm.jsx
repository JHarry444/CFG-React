import React, { useState } from 'react';
import Input from './Input';

export default function FuncForm() {
  const [user, setUser] = useState('');

  const [pass, setPass] = useState('');

  const changeUser = (event) => {
    setUser(event.target.value);
  };

  const changePass = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      user,
      pass,
    });
  };

  return (
    <form  onSubmit={handleSubmit}>
      <label>
        User:
        <Input value={user} name="username" changeHandler={changeUser} />
      </label>
      <label>
        Pass:
        <Input value={pass} type="password" name="password" changeHandler={changePass} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
