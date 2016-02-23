import React from 'react'; // required to get test to work.
import { shallow } from 'enzyme';
import App from '../../src/containers/App';
import Piano from '../../src/components/Piano';

describe('(Container) App', () => {
  it('renders main App container as a <div>', () => {
    const wrapper = shallow(<App onAppRender={()=>{}} />);
    expect(wrapper.type()).to.eql('div');
  });

  it('contains a header title', () => {
    const wrapper = shallow(<App onAppRender={()=>{}} />);
    expect(wrapper.find('.title-header')).to.have.length(1);
  });

  it('contains a piano component', () => {
    const wrapper = shallow(<App onAppRender={()=>{}} />);
    expect(wrapper.find(Piano).length >= 0).to.equal(true);
  });

});
