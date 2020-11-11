import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useCurrency = (name, initialValue) => {
  const [value, setValue] = useState(initialValue);

  const setNewValue = value => {
    AsyncStorage.setItem(name, value).then(() => setValue(value));
  };

  useEffect(() => {
    AsyncStorage.getItem(name).then(value => {
      if (value) {
        setValue(value);
      }
    });
  }, []);

  return [value, setNewValue];
};
