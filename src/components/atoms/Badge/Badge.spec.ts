import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Badge from './Badge.vue'

describe('Badge.vue', () => {
  it('renders the slot content correctly', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Badge Text',
      },
    })

    expect(wrapper.text()).toBe('Badge Text')
  })

  it('renders the Typography component inside the badge', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Badge Content',
      },
    })

    const typography = wrapper.findComponent({ name: 'Typography' })
    expect(typography.exists()).toBe(true)
  })

  it('has the correct CSS class on the container', () => {
    const wrapper = mount(Badge)
    expect(wrapper.classes()).toContain('badge__container')
  })

  it('applies the correct color prop to Typography', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Badge Text',
      },
    })

    const typography = wrapper.findComponent({ name: 'Typography' })
    expect(typography.props('color')).toBe('primary')
  })

  it('matches the component snapshot', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Snapshot Test',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
