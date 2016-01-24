import React from 'react'; // required to get test to work.
import { shallow, describeWithDOM, mount, spyLifecycle } from 'enzyme';
import Logger from '../../src/components/Logger';


describeWithDOM('(Component) Logger', () => {

  const loggerData = ['C','E','D'];
  let wrapper;

  beforeEach(function() {
     wrapper = mount(<Logger loggerData={loggerData} />);
  });

  it('renders a logger', () => {
    expect(wrapper.props().loggerData).to.equal(loggerData);
  });
  //
  it('renders keys based on passed data', () => {
    expect(wrapper.find('span')).to.have.length(3);
  });

});
