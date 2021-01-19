import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 0 16px;

  flex-direction: row;
  align-items: center;
  margin-bottom: 16px; // remove later
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  background-color: #e5e5e5;
  font-size: 18px;
  padding: 12px;
  border-radius: 16px;
  margin-right: 16px;
`;
