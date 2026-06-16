import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Online Library
        </Typography>
        <Button color="inherit" component={Link} to="/home">Главная</Button>
        <Button color="inherit" component={Link} to="/about">О нас</Button>
        <Button color="inherit" component={Link} to="/best-courses">Лучшие курсы</Button>
        <Button color="inherit" component={Link} to="/faq">Вопросы</Button>
        <Button color="inherit" component={Link} to="/profile">Профиль</Button>
        <Button color="inherit" component={Link} to="/logout">Выйти</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;