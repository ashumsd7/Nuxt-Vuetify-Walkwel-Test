import { mount } from '@vue/test-utils'
import { url, setupTest } from "@nuxt/test-utils";
import Header from '../components/Header.vue'

describe("Header","ssr", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Header);
    expect(wrapper.vm).toBeTruthy();
  });
});
