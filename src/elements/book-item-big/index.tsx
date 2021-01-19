import React, { FC } from 'react';
import { Container, Image } from './styles';
import { Dimensions, View } from 'react-native';

interface BookItemBigProps {
  image: Object;
}
const BookItemBig: FC<BookItemBigProps> = ({ image }) => {
  const width = Dimensions.get('window').width;

  return (
    <Container
      style={{
        width,
      }}
    >
      <View
        style={{
          overflow: 'hidden',
          borderRadius: 16,
          // shadowColor: 'rgba(0, 0, 0, 0.35)',
          // shadowOffset: {
          //   width: 0,
          //   height: 5,
          // },
          // shadowOpacity: 0.34,
          // shadowRadius: 6.27,
          // elevation: 10,
        }}
      >
        <Image source={image} resizeMode="cover" />
      </View>
    </Container>
  );
};

export default BookItemBig;
