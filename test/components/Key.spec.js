import React from 'react'; // required to get test to work.
import { shallow, describeWithDOM, mount, spyLifecycle } from 'enzyme';
import Key from '../../src/components/Key';


describeWithDOM('(Component) Key', () => {
  let wrapper;
  const props = {
    pianoKey: { label: 'C', type: 'major', isActive: false },
    keyHandler: () => {}
  }

  beforeEach(function() {
     wrapper = mount(<Key {...props} />);
  });

  it('renders a key with props', () => {
    expect(wrapper.props().pianoKey).to.equal(props.pianoKey);
  });

  it('renders key label', () => {
    expect(wrapper.find('.label')).to.have.length(1);
  });

});
