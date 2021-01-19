import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, SearchInput } from './styles';
import { Feather } from '@expo/vector-icons';

const HomeHeader: FC = () => {
  return (
    <Container>
      <SearchInput placeholder="Procurar por livro" />
      <TouchableOpacity>
        <Feather name="menu" size={28} color="black" />
      </TouchableOpacity>
    </Container>
  );
};

export default HomeHeader;
