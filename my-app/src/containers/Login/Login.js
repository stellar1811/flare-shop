import { useState } from 'react';
import './Login.css';
import Card from './components/Card/Card';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import formIcon from '../../assets/FormIcon.png';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    let hasError = false;

    if (!username) {
      setUsernameError('Please enter the username');
      hasError = true;
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Please enter the password');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (hasError) {
      return;
    }

    if (username !== 'admin' || password !== 'password') {
      setLoginError('Username or password is not correct');
      setSuccessMessage(''); 
      return;
    }

    setLoginError('');
    setSuccessMessage('Logged in successfully!');

    localStorage.setItem('token', 'fake-token');
  };

  return (
    <div className="main-page">
      <Card>
        <div className='title'>
          <img src={formIcon} alt="Form Icon" className="form-icon" />
          <h1>Flare</h1>
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setUsernameError('');
              setLoginError(''); 
              setSuccessMessage(''); 
            }}
            className="text-input"
          />
          {usernameError && <div className="error-message">{usernameError}</div>}
        </div>
        <div className="input-container">
          <div className="password-input-wrapper">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError('');
                setLoginError(''); 
                setSuccessMessage(''); 
              }}
              className="password-input"
            />
            {showPassword ? (
              <IoMdEyeOff
                className="eye-icon"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <IoMdEye
                className="eye-icon"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
          {passwordError && <div className="error-message">{passwordError}</div>}
        </div>
        {loginError && <div className="error-message">{loginError}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <Button label="Submit" onClick={handleSubmit} />
      </Card>
    </div>
  );
};

export default Login;