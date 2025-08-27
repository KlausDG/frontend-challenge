import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Stack from './Stack.vue'

describe('Stack.vue', () => {
  it('renders default slot content', () => {
    const wrapper = mount(Stack, {
      slots: {
        default: '<div class="slot-content">Slot Content</div>',
      },
    })

    const slotContent = wrapper.find('.slot-content')
    expect(slotContent.exists()).toBe(true)
    expect(slotContent.text()).toBe('Slot Content')
  })

  it('applies row direction by default', () => {
    const wrapper = mount(Stack)
    const container = wrapper.find('.stack__container')
    expect((container.element as HTMLElement).style.flexDirection).toBe('row')
  })

  it('applies column direction when passed via props', () => {
    const wrapper = mount(Stack, {
      props: { direction: 'column' },
    })
    const container = wrapper.find('.stack__container')
    expect((container.element as HTMLElement).style.flexDirection).toBe('column')
  })

  it('applies spacing in px when spacing prop is provided', () => {
    const wrapper = mount(Stack, {
      props: { spacing: 12 },
    })
    const container = wrapper.find('.stack__container')
    expect((container.element as HTMLElement).style.gap).toBe('12px')
  })

  it('defaults spacing to 0px when spacing prop is not provided', () => {
    const wrapper = mount(Stack)
    const container = wrapper.find('.stack__container')
    expect((container.element as HTMLElement).style.gap).toBe('0px')
  })

  it('matches the component snapshot', () => {
    const wrapper = mount(Stack, {
      props: { direction: 'column', spacing: 8 },
      slots: {
        default: '<div>Snapshot Slot</div>',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
