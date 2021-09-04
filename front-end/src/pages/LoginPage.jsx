import { useState } from 'react';
import { useHistory } from 'react-router';

export const LogInPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const history = useHistory();

  const onLogInClicked = async () => {
    alert('Log In not implemented yet');
  }
  return (
    <div className="content-container">
      <h1>Log In</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input type="text" placeholder="someone@gmail.com" value={emailValue} onChange={e => setEmailValue(e.target.value)} />
      <input type="password" placeholder="password" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} />
      <hr />
      <button disabled={!emailValue || !passwordValue} onClick={onLogInClicked}>Log In</button>
      <button onClick={() => history.push('/forgot-password')}>Forgot your password?</button>
      <button onClick={() => history.push('/signup')}>Don't have an account? Sign Up</button>
    </div>
  )
}