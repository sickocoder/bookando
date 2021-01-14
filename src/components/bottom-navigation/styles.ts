import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding-bottom: 32px;
`;

export const MenuWrapper = styled.View`
  width: 100%;
  height: 56px;
  padding: 32px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MenuItemWrapper = styled.TouchableOpacity<{
  selected?: boolean;
}>`
  padding: 0 16px;
  height: 40px;
  flex-direction: row;

  background-color: ${(props) =>
    props.selected ? 'rgba(0, 0, 0, 0.3)' : 'transparent'};

  border-radius: 20px;

  align-items: center;
`;
