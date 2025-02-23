import { useState } from 'react';
import Input from './Input';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full max-w-sm mx-auto p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
      <div className="flex flex-col gap-2 mb-6">
        <div>
          <Input
            type="email"
            label="Email"
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </div>
        <div>
          <Input
            type="password"
            label="Password"
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </div>
      </div>
      <div className="flex justify-end gap-4 ">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <button className='px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
