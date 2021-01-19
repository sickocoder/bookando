import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { SectionHeaderProps } from './section-header.types';

import { Container, Title, MoreButtonText } from './styles';

const SectionHeader: FC<SectionHeaderProps> = ({ title, onMorePressed }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TouchableOpacity onPress={() => onMorePressed()}>
        <MoreButtonText>more</MoreButtonText>
      </TouchableOpacity>
    </Container>
  );
};

export default SectionHeader;
