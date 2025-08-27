import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Card from './Card.vue'

describe('Card.vue', () => {
  it('renders the title prop correctly', () => {
    const wrapper = mount(Card, {
      props: {
        title: 'Card Title',
      },
    })

    const typography = wrapper.findComponent({ name: 'Typography' })
    expect(typography.text()).toBe('Card Title')
  })

  it('renders the subtitle prop inside Typography when slot is not provided', () => {
    const wrapper = mount(Card, {
      props: {
        subtitle: 'Card Subtitle',
      },
    })

    const typographies = wrapper.findAllComponents({ name: 'Typography' })
    expect(typographies[1].text()).toBe('Card Subtitle')
  })

  it('renders the subtitle slot instead of the subtitle prop', () => {
    const wrapper = mount(Card, {
      props: {
        subtitle: 'Card Subtitle',
      },
      slots: {
        subtitle: '<span class="custom-subtitle">Custom Subtitle</span>',
      },
    })

    const customSubtitle = wrapper.find('.custom-subtitle')
    expect(customSubtitle.exists()).toBe(true)
    expect(customSubtitle.text()).toBe('Custom Subtitle')
  })

  it('renders default slot content', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '<div class="slot-content">Slot Content</div>',
      },
    })

    const slotContent = wrapper.find('.slot-content')
    expect(slotContent.exists()).toBe(true)
    expect(slotContent.text()).toBe('Slot Content')
  })

  it('applies the correct CSS class on the container', () => {
    const wrapper = mount(Card)
    expect(wrapper.classes()).toContain('card__container')
  })

  it('matches the component snapshot', () => {
    const wrapper = mount(Card, {
      props: {
        title: 'Snapshot Title',
        subtitle: 'Snapshot Subtitle',
      },
      slots: {
        default: '<div>Snapshot Slot</div>',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
