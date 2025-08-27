import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import IconText from './IconText.vue'
import { Typography } from '@/components/atoms'

vi.mock('unicon-vue', () => ({
  default: {
    name: 'Unicon',
    template: '<div class="mock-unicon"></div>',
  },
}))

describe('IconText.vue', () => {
  it('renders the Typography component with the correct text', () => {
    const wrapper = mount(IconText, {
      props: {
        icon: 'user',
        text: 'Hello IconText',
      },
    })

    const typography = wrapper.findComponent(Typography)
    expect(typography.exists()).toBe(true)
    expect(typography.text()).toBe('Hello IconText')
  })

  it('renders the unicon component with the correct icon name', () => {
    const wrapper = mount(IconText, {
      props: { icon: 'user', text: 'Hello IconText' },
      global: {
        components: {
          unicon: {
            props: ['name'],
            template: '<div class="mock-unicon">{{ name }}</div>',
          },
          Typography,
        },
      },
    })

    const unicon = wrapper.find('.mock-unicon')
    expect(unicon.exists()).toBe(true)
    expect(unicon.text()).toBe('user')
  })

  it('applies the correct container class', () => {
    const wrapper = mount(IconText, {
      props: { icon: 'phone', text: 'Phone Icon' },
    })
    expect(wrapper.classes()).toContain('icon-text__container')
  })

  it('renders multiple instances correctly', () => {
    const wrapper = mount({
      template: `
        <div>
          <IconText icon="user" text="User" />
          <IconText icon="phone" text="Phone" />
        </div>
      `,
      components: { IconText },
    })
    const instances = wrapper.findAllComponents(IconText)
    expect(instances).toHaveLength(2)
    expect(instances[0].text()).toContain('User')
    expect(instances[1].text()).toContain('Phone')
  })

  it('matches the component snapshot', () => {
    const wrapper = mount(IconText, {
      props: { icon: 'print', text: 'Print Icon' },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
