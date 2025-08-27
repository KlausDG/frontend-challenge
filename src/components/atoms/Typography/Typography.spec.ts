import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Typography from './Typography.vue'

// Mock CSS module to simplify class checks
vi.mock('./Typography.module.scss', () => ({
  default: {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'body',
    caption: 'caption',
    semibold: 'semibold',
    primary: 'primary',
    secondary: 'secondary',
    dark: 'dark',
    text: 'text',
    success: 'success',
  },
}))

describe('Typography.vue', () => {
  it('renders slot content correctly', () => {
    const wrapper = mount(Typography, {
      slots: {
        default: 'Hello Typography',
      },
    })
    expect(wrapper.text()).toBe('Hello Typography')
  })

  it('renders with default tag "p"', () => {
    const wrapper = mount(Typography)
    expect(wrapper.element.tagName.toLowerCase()).toBe('p')
  })

  it('renders with the tag prop if provided', () => {
    const wrapper = mount(Typography, {
      props: { tag: 'h3' },
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('h3')
  })

  it('applies default variant class based on tag mapping', () => {
    const wrapper = mount(Typography, { props: { tag: 'h1' } })
    expect(wrapper.classes()).toContain('h1')
  })

  it('applies variant prop over tag mapping', () => {
    const wrapper = mount(Typography, {
      props: { tag: 'h1', variant: 'semibold' },
    })
    expect(wrapper.classes()).toContain('semibold')
  })

  it('applies default color class "text"', () => {
    const wrapper = mount(Typography)
    expect(wrapper.classes()).toContain('text')
  })

  it('applies color prop class correctly', () => {
    const wrapper = mount(Typography, {
      props: { color: 'primary' },
    })
    expect(wrapper.classes()).toContain('primary')
  })

  it('matches the component snapshot', () => {
    const wrapper = mount(Typography, {
      props: { tag: 'h2', variant: 'h2', color: 'dark' },
      slots: { default: 'Snapshot Typography' },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
