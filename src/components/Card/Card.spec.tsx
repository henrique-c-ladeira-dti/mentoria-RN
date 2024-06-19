import React from 'react';
import {render} from '@testing-library/react-native';
import {Card, LabelValue} from './Card';
import {faker} from '@faker-js/faker';

describe('Card', () => {
  const makeSut = (fields: LabelValue[] = [], image?: string) => {
    const sut = render(<Card fields={fields} image={image} />);
    return {sut};
  };

  it('display label and text if one is provided', () => {
    const fields = [
      {
        label: faker.string.alphanumeric(),
        value: faker.string.alphanumeric(),
      },
    ];
    const {sut} = makeSut(fields);

    expect(
      sut.getByText(`${fields[0].label}: ${fields[0].value}`),
    ).toBeDefined();
  });

  it('display label and text if two are provided', () => {
    const fields = [
      {
        label: faker.string.alphanumeric(),
        value: faker.string.alphanumeric(),
      },
      {
        label: faker.string.alphanumeric(),
        value: faker.string.alphanumeric(),
      },
    ];

    const {sut} = makeSut(fields);

    expect(
      sut.getByText(`${fields[0].label}: ${fields[0].value}`),
    ).toBeDefined();
    expect(
      sut.getByText(`${fields[1].label}: ${fields[1].value}`),
    ).toBeDefined();
  });

  it('displays image if one is provided', () => {
    const imageUrl = faker.image.url();
    const {sut} = makeSut([], imageUrl);

    const image = sut.getByTestId('card-image');
    expect(image.props.source).toEqual({uri: imageUrl});
  });

  it('does not display image if none provided', () => {
    const {sut} = makeSut();

    const image = sut.queryByTestId('card-image');
    expect(image).toBeNull();
  });
});
