import React, { FC } from 'react';
import { View, Text } from 'react-native';

const CartPage: FC = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#F2F2F2',
    }}
  >
    <Text style={{ fontWeight: 'bold', fontSize: 32 }}>
      Carrinho de compras!
    </Text>
    <Text>this page is under development</Text>
  </View>
);

export default CartPage;
