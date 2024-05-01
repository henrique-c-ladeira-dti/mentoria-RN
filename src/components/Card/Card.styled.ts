import styled from 'styled-components/native';

export const Container = styled.View`
  width: 45%;
  background-color: #efefef;
  padding: 8px;
  justify-content: center;
  align-items: baseline;
  border-radius: 16px;
`;

export const ImageSC = styled.Image.attrs({
  height: 100,
  width: 100,
})`
  border-radius: 100px;
  align-self: center;
`;

export const LabelText = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const ValueText = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

export const LabelContainer = styled.View`
  margin-top: 16px;
  margin-left: 8px;
  margin-bottom: 8px;
`;
