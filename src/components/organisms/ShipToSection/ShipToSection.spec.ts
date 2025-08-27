import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ShipToSection from './ShipToSection.vue'

const CardMock = {
  name: 'Card',
  props: ['title'],
  template: '<div class="mock-card"><slot name="subtitle" /><slot /></div>',
}

const StackMock = {
  name: 'Stack',
  props: ['direction', 'spacing', 'class'],
  template: '<div class="mock-stack"><slot /></div>',
}

const TypographyMock = {
  name: 'Typography',
  props: ['tag', 'variant', 'color'],
  template: '<div class="mock-typography"><slot /></div>',
}

const BadgeMock = {
  name: 'Badge',
  props: [''],
  template: '<div class="mock-badge"><slot /></div>',
}

const IconTextMock = {
  name: 'IconText',
  props: ['icon', 'text'],
  template: '<div class="mock-icon-text">{{ icon }}:{{ text }}</div>',
}

describe('ShipToSection.vue', () => {
  const addressData = {
    name: 'Jane Doe',
    code: '001',
    address: '789 Shipping St',
    contact: {
      name: 'John Smith',
      email: 'john@example.com',
      phone: '123456789',
      fax: '987654321',
    },
  }

  const wrapper = mount(ShipToSection, {
    props: { data: addressData },
    global: {
      components: {
        Card: CardMock,
        Stack: StackMock,
        Typography: TypographyMock,
        Badge: BadgeMock,
        IconText: IconTextMock,
      },
    },
  })

  it('renders Card with title "Ship to"', () => {
    const card = wrapper.findComponent(CardMock)
    expect(card.exists()).toBe(true)
    expect(card.props('title')).toBe('Ship to')
  })

  it('renders subtitle with Typography and Badge', () => {
    const typography = wrapper.findComponent(TypographyMock)
    expect(typography.exists()).toBe(true)

    const badge = wrapper.findComponent(BadgeMock)
    expect(badge.exists()).toBe(true)
    expect(badge.text()).toBe(`#${addressData.code}`)
  })

  it('renders all IconText components with correct props', () => {
    const iconTexts = wrapper.findAllComponents(IconTextMock)
    expect(iconTexts).toHaveLength(5)

    expect(iconTexts[0].props()).toEqual({ icon: 'map-marker', text: addressData.address })
    expect(iconTexts[1].props()).toEqual({ icon: 'user', text: addressData.contact.name })
    expect(iconTexts[2].props()).toEqual({ icon: 'envelope', text: addressData.contact.email })
    expect(iconTexts[3].props()).toEqual({ icon: 'phone', text: addressData.contact.phone })
    expect(iconTexts[4].props()).toEqual({ icon: 'print', text: addressData.contact.fax })
  })

  it('renders content__column class correctly', () => {
    const columnStack = wrapper.find('.content__column')
    expect(columnStack.exists()).toBe(true)
  })

  it('renders subtitle__container class correctly', () => {
    const subtitleStack = wrapper.find('.subtitle__container')
    expect(subtitleStack.exists()).toBe(true)
  })

  it('matches the component snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
