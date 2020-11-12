import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useCurrency = (name, initialValue) => {
  const [value, setValue] = useState(initialValue);

  const setNewValue = newValue => {
    AsyncStorage.setItem(name, newValue).then(() => setValue(newValue));
  };

  useEffect(() => {
    AsyncStorage.getItem(name).then(loadedValue => {
      if (loadedValue) {
        setValue(loadedValue);
      }
    });
  }, []);

  return [value, setNewValue];
};
