import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BillToSection from './BillToSection.vue'

const CardMock = {
  name: 'Card',
  props: ['title', 'subtitle'],
  template: '<div class="mock-card"><slot /></div>',
}

const StackMock = {
  name: 'Stack',
  props: ['direction', 'spacing'],
  template: '<div class="mock-stack"><slot /></div>',
}

const IconTextMock = {
  name: 'IconText',
  props: ['icon', 'text'],
  template: '<div class="mock-icon-text">{{ icon }}:{{ text }}</div>',
}

describe('BillToSection.vue', () => {
  const addressData = {
    name: 'John Doe',
    address: '123 Main St',
    label: 'teste',
    code: '123',
    contact: {
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '123456789',
      fax: '987654321',
    },
  }

  const wrapper = mount(BillToSection, {
    props: { data: addressData },
    global: {
      components: {
        Card: CardMock,
        Stack: StackMock,
        IconText: IconTextMock,
      },
    },
  })

  it('renders Card with correct title and subtitle', () => {
    const card = wrapper.findComponent(CardMock)
    expect(card.exists()).toBe(true)
    expect(card.props('title')).toBe('Bill to')
    expect(card.props('subtitle')).toBe(addressData.name)
  })

  it('renders Stack inside Card', () => {
    const stack = wrapper.findComponent(StackMock)
    expect(stack.exists()).toBe(true)
    expect(stack.props('direction')).toBe('column')
    expect(stack.props('spacing')).toBe(16)
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

  it('matches the component snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
