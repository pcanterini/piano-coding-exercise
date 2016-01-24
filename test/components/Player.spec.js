
import React from 'react';
import { shallow, describeWithDOM, mount, spyLifecycle } from 'enzyme';
import Player from '../../src/components/Player';

let wrapper;

describeWithDOM('(Component) Player', () => {

  const props = {
    updateKeyState: () => {},
    handlePlay: () => {}
  }

  beforeEach(function() {
     wrapper = shallow(<Player {...props} />);
  });

  it('renders main Player as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('contains input status text', () => {
    expect(wrapper.find('.inputStatus')).to.have.length(1);
  });

  it('contains one input field', () => {
    expect(wrapper.find('.playListInput')).to.have.length(1);
  });

  it('contains a play button', () => {
    expect(wrapper.find('.play-btn')).to.have.length(1);
  });

  it('it should validate input', () => {
    const playerWrapper = mount(<Player {...props} />);
    // Probably not the best way to test this. Would have to look into it.
    expect(playerWrapper.node.isValidInput('C,D,E,E,E')).to.equal(true);
    expect(playerWrapper.node.isValidInput('X,D,A,V,W')).to.equal(false);
  });

  it('it should create playlist from CSV String', () => {
    const playerWrapper = mount(<Player {...props} />);
    // Probably not the best way to test this. Would have to look into it.
    const playList = playerWrapper.node.createPlaylistFromCSV('C,D,E,E,E');
    expect(playList).to.be.an('array');
    expect(playList).to.have.length(5);
  });

});
