import styled from 'styled-components/native';

export const Container = styled.View`
  width: 128px;
  margin-right: 18px;
  margin-top: 6px;
`;

export const Image = styled.Image`
  width: 128px;
  height: 202px;
  border-radius: 8px;
  overflow: hidden;

  margin-bottom: 8px;
  box-shadow: 10px 5px 5px black;
  /* elevation: 5px; */
`;

export const Text = styled.Text<{ fontSize: number }>`
  color: #828282;
  font-size: ${(props) => props.fontSize}px;
`;
