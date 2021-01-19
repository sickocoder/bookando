import React, { FC } from 'react';
import { Container, Image, Text } from './styles';
import { Dimensions, View } from 'react-native';

interface BookItemSmallProps {
  title: string;
  image: Object;
  price: number;
}
const BookItemSmall: FC<BookItemSmallProps> = ({ title, image, price }) => {
  return (
    <Container>
      <View
        style={{
          shadowColor: 'rgba(0, 0, 0, 0.35)',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10,
        }}
      >
        <Image source={image} resizeMode="cover" />
      </View>
      <Text fontSize={18} numberOfLines={1}>
        {title}
      </Text>
      <Text fontSize={18}>${price}</Text>
    </Container>
  );
};

export default BookItemSmall;
