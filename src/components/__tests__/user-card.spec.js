import React from 'react';
import { shallow } from 'enzyme';
import { UserCard, Container, Header } from "../user-card";

describe('<UserCard />', () => {
  it('renders Container', () => {
    const wrapper = shallow(<UserCard user={{}} />);
    expect(wrapper.find(Container)).toHaveLength(1);
  });
  it('renders Header', () => {
    const wrapper = shallow(<UserCard user={{ name: 'Joe Doe' }} />);
    expect(wrapper.find(Header).props()).toMatchObject({ children: 'Joe Doe' });
  });
});