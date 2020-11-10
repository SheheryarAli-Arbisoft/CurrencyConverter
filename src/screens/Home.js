import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from 'styled-components';
import { CurrencyContext } from '../contexts';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { Text } from '../components/Text';
import { Field } from '../components/Field';
import { Button } from '../components/Button';
import reverse from '../assets/images/reverse.png';

const getSettingsView = (navigation, theme, insets) => {
  const style = {
    position: 'absolute',
    top: 0,
    paddingTop: insets.top + 10,
    width: '100%',
    alignItems: 'flex-end',
  };

  return (
    <View style={style}>
      <TouchableOpacity onPress={() => navigation.push('Options')}>
        <Icon name='cog' size={36} color={theme.color.white} />
      </TouchableOpacity>
    </View>
  );
};

export const Home = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const theme = useContext(ThemeContext);
  const { baseCurrency, quoteCurrency, conversionRate } = useContext(
    CurrencyContext
  );

  return (
    <Container centered themeBackground>
      {getSettingsView(navigation, theme, insets)}
      <Logo />
      <Text variant='large' colorWhite bold marginBottom>
        Currency Converter
      </Text>
      <Field
        currency={baseCurrency}
        amount='100'
        onPress={() =>
          navigation.navigate('CurrencyList', { title: 'Base Currency' })
        }
      />
      <Field
        currency={quoteCurrency}
        amount='0.8345'
        onPress={() =>
          navigation.navigate('CurrencyList', { title: 'Quote Currency' })
        }
        disabled
      />
      <Text variant='small' colorWhite marginBottom>
        {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${moment(
          Date.now()
        ).format('MMMM Do, YYYY')}`}
      </Text>
      <Button value='Reverse currencies' icon={reverse} themeBackground />
    </Container>
  );
};
