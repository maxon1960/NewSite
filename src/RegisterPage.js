import React, { useState } from 'react';
import { Container, TextField, Button, Paper } from '@mui/material';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ username, email, password });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <form onSubmit={handleSubmit}>
          <TextField label="Имя пользователя" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth margin="normal"/>
          <TextField type="email" label="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal"/>
          <TextField type="password" label="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth margin="normal"/>
          <Button type="submit" variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterPage;