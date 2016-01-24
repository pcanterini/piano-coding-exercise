
import React from 'react';
import { shallow } from 'enzyme';
import Piano from '../../src/components/Piano';
import Player from '../../src/components/Player';
import Key from '../../src/components/Key';
import Logger from '../../src/components/Logger';

describe('(Component) Piano', () => {

  const props = {
    onMount: () => {}
  }

  it('contains 12 keys', () => {
    const wrapper = shallow(<Piano {...props} />);
    expect(wrapper.find(Key)).to.have.length.of(12);
  });

  it('contains a player', () => {
    const wrapper = shallow(<Piano {...props} />);
    expect(wrapper.find(Player)).to.have.length.of(1);
  });

  it('contains a logger', () => {
    const wrapper = shallow(<Piano {...props} />);
    expect(wrapper.find(Logger)).to.have.length.of(1);
  });

});
