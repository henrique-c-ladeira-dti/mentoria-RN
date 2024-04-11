import styled from 'styled-components/native';

export const Container = styled.View`
  width: 45%;
  background-color: #efefef;
  padding: 8px;
  justify-content: center;
  align-items: center;
`;

export const ImageSC = styled.Image.attrs({
  height: 100,
  width: 100,
})`
  border-radius: 100px;
`;

export const TextSC = styled.Text`
  font-size: 16px;
`;
