import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ChargeToSection from './ChargeToSection.vue'

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

describe('ChargeToSection.vue', () => {
  const addressData = {
    name: 'Company Ltd',
    address: '456 Business Rd',
    label: 'teste',
    code: '123',
    contact: {
      name: 'Alice Smith',
      email: 'alice@example.com',
      phone: '123456789',
      fax: '987654321',
    },
    document: {
      type: 'CNPJ',
      value: '12.345.678/0001-90',
    },
  }

  const wrapper = mount(ChargeToSection, {
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
    expect(card.props('title')).toBe('Charge to')
    expect(card.props('subtitle')).toBe(addressData.name)
  })

  it('renders top-level Stack', () => {
    const stack = wrapper.findComponent(StackMock)
    expect(stack.exists()).toBe(true)
  })

  it('renders all IconText components with correct props', () => {
    const iconTexts = wrapper.findAllComponents(IconTextMock)
    expect(iconTexts).toHaveLength(6)

    expect(iconTexts[0].props()).toEqual({
      icon: 'file-landscape-alt',
      text: `${addressData.document.type}: ${addressData.document.value}`,
    })
    expect(iconTexts[1].props()).toEqual({ icon: 'map-marker', text: addressData.address })
    expect(iconTexts[2].props()).toEqual({ icon: 'user', text: addressData.contact.name })
    expect(iconTexts[3].props()).toEqual({ icon: 'envelope', text: addressData.contact.email })
    expect(iconTexts[4].props()).toEqual({ icon: 'phone', text: addressData.contact.phone })
    expect(iconTexts[5].props()).toEqual({ icon: 'print', text: addressData.contact.fax })
  })

  it('renders content__column class correctly', () => {
    const columnStack = wrapper.find('.content__column')
    expect(columnStack.exists()).toBe(true)
  })

  it('matches the component snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
