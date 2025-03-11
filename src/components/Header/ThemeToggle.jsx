// src/components/ThemeToggle.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../features/theme/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  
  return (
    <button onClick={() => dispatch(toggleTheme())}>
      {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;