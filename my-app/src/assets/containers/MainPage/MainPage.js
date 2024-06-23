import { useState } from 'react';
import './MainPage.css';
import Card from '../components/Card/Card';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import FormIcon from './FormIcon/FormIcon';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const MainPage = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    if (!username || !password) {
      alert('Please fill in both fields.');
      return;
    }
    alert('Form submitted!');
  };

  return (
    <div className="main-page">
      <Card>
        <div className='title'>
          <FormIcon />
          <h1>Flare</h1>
        </div>
        <Input
          type="text"
          placeholder="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="password-input-wrapper">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <Button label="Submit" onClick={handleSubmit} />
      </Card>
    </div>
  );
};

export default MainPage;