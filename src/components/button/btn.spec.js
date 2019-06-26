import { shallowMount } from '@vue/test-utils';
import Btn from './btn';

const factory = () =>
  shallowMount(Btn, {
    propsData: {
      label: 'click me!'
    }
  });

describe('Btn', () => {
  test('mounts properly', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders properly', () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('calls handleClick on click', () => {
    const wrapper = factory();
    wrapper.find('button').trigger('click');
  });

  test('clicked is true after click', () => {
    const wrapper = factory();
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.clicked).toBe(true);
  });
});
