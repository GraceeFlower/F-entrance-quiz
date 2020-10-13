import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Student from './Student';
import StudentList from '../../components/StudentList/StudentList';

configure({ adapter: new Adapter() });

describe('<Student />', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          students: [
            { id: 1, name: 'Lily' },
            { id: 2, name: 'Bob' },
          ],
        }),
    })
  );

  beforeEach(() => {
    fetch.mockClear();
  });

  it('display student list', () => {
    const wrapper = shallow(<Student />);
    expect(wrapper.find(StudentList).exists()).toBe(true);
  });

  // it('fetch students after mount', () => {
  //   const wrapper = shallow(<Student />);
  //   wrapper.update();
  //
  //   expect(fetch).toHaveBeenCalledTimes(1);
  // });
});
