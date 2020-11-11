import { useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from 'styled-components';

export const useThemeContext = () => {
  const [themeColor, setThemeColor] = useState('blue');
  const theme = useContext(ThemeContext);

  const setNewThemeColor = value => {
    AsyncStorage.setItem('theme-color', value).then(() => setThemeColor(value));
  };

  useEffect(() => {
    AsyncStorage.getItem('theme-color').then(value => {
      if (value) {
        setThemeColor(value);
      }
    });
  }, []);

  return { theme, themeColor, setNewThemeColor };
};
