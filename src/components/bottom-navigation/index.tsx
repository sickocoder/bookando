import React, { FC, useRef, useState } from 'react';
import { Text, View, Animated, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { Container, MenuWrapper, MenuItemWrapper } from './styles';

const BottomNavigation: FC = () => {
  const [selected, setSelected] = useState(false);
  const [showText, setShowText] = useState(false);
  // const width = new Animated.Value(56);
  const width = useRef(new Animated.Value(56)).current;

  const data = [
    {
      title: 'Home',
      icon: <AntDesign name="home" size={24} color="black" />,
    },
    {
      title: 'Home1',
      icon: <AntDesign name="barschart" size={24} color="black" />,
    },
    {
      title: 'Home2',
      icon: <AntDesign name="staro" size={24} color="black" />,
    },
  ];

  const handleSelect = () => {
    setSelected(true);
    Animated.timing(width, {
      toValue: 112,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setShowText(true);
    });
  };

  return (
    <Container>
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
        }}
      />
      <MenuWrapper>
        {/* {data.map(item)} */}
        <Animated.View style={{ width }}>
          <MenuItemWrapper selected={selected} onPress={() => handleSelect()}>
            <AntDesign name="home" size={24} color="black" />
            {showText && <Text style={{ marginLeft: 8 }}>Home</Text>}
          </MenuItemWrapper>
        </Animated.View>
        <MenuItemWrapper>
          <AntDesign name="barschart" size={24} color="black" />
        </MenuItemWrapper>
        <MenuItemWrapper>
          <AntDesign name="staro" size={24} color="black" />
        </MenuItemWrapper>
      </MenuWrapper>
    </Container>
  );
};

export default BottomNavigation;
