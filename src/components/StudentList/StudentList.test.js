import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StudentList from "./StudentList";

configure({ adapter: new Adapter() });

describe('<StudentList />', () => {
  const props = {
    students: [
      {
        id: 1,
        name: 'Lily',
      },
      {
        id: 2,
        name: 'Bob',
      },
    ],
  };

  it('display a header', () => {
    const wrapper = shallow(<StudentList students={props.students} />);
    expect(wrapper.text()).toContain('学员列表');
  });

  it('display student list', () => {
    const wrapper = shallow(<StudentList students={props.students} />);
    expect(wrapper.find('.student-list').exists()).toBe(true);
    expect(wrapper.find('.student-list').children().length).toEqual(2);
  });

  it('should display students id and name', () => {
    const wrapper = shallow(<StudentList students={props.students} />);
    expect(wrapper.text()).toContain('1. Lily');
  });
});
