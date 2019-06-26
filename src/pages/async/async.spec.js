import { shallowMount } from '@vue/test-utils';
import Component from './index';

async function addAsyncData(Component) {
  if (!Component.asyncData) {
    return Component;
  }

  const data =
    Component.data ||
    function() {
      return {};
    };
  const asyncData = await Component.asyncData();

  Component.data = function() {
    return { ...data.call(this), ...asyncData };
  };

  return Component;
}

describe('Async Page', () => {
  it('x', async () => {
    const component = await addAsyncData(Component);

    const wrapper = shallowMount(component);
    console.log(wrapper.html());
    expect(1).toBe(1);
  });
});
