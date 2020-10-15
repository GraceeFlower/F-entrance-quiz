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
    // TODO 还可以测试StudentList收到的props含有你请求后传递给他的data
    expect(wrapper.find(StudentList).exists()).toBe(true);
  });

  it('fetch students after mount', () => {
    const wrapper = shallow(<Student />);
    wrapper.update();

    // TODO 你使用的axios，应该mock axios测试calledTimes而不是测和mockfetch
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
