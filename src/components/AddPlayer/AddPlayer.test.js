import AddPlayer from './AddPlayer';
import Player from '../Player/Player';
import React from 'react';
import {shallow, mount} from 'enzyme';

it('renders without crashing', () => {
  shallow(<AddPlayer  />);
});

it('renders correct name', () => {
  const onPlayerAdd = jest.fn();
  const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);
  const nameInput = addPlayerComponent.find('input').first().getDOMNode();
  nameInput.value = 'Kamila';

  const form = addPlayerComponent.find('form');
  form.simulate('submit');

  expect(onPlayerAdd).toBeCalledWith('Kamila');
});
