import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import SupplierSection from './SupplierSection.vue'

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

describe('SupplierSection.vue', () => {
  const supplierData = {
    name: 'Supplier Inc',
    code: 'SUP001',
    address: '123 Supplier Rd',
    contact: {
      name: 'Alice Johnson',
      email: 'alice@example.com',
      phone: '111222333',
      fax: '999888777',
    },
    document: {
      type: 'CNPJ',
      value: '12.345.678/0001-90',
    },
    readAt: '2025-08-27',
  }

  const wrapper = mount(SupplierSection, {
    props: { data: supplierData },
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

  it('renders Card with title "Supplier"', () => {
    const card = wrapper.findComponent(CardMock)
    expect(card.exists()).toBe(true)
    expect(card.props('title')).toBe('Supplier')
  })

  it('renders subtitle with Typography and Badge', () => {
    const typography = wrapper.findComponent(TypographyMock)
    expect(typography.exists()).toBe(true)

    const badge = wrapper.findComponent(BadgeMock)
    expect(badge.exists()).toBe(true)
    expect(badge.text()).toBe(`#${supplierData.code}`)
  })

  it('renders all IconText components with correct props', () => {
    const iconTexts = wrapper.findAllComponents(IconTextMock)
    expect(iconTexts).toHaveLength(7)

    expect(iconTexts[0].props()).toEqual({
      icon: 'file-landscape-alt',
      text: `${supplierData.document.type}: ${supplierData.document.value}`,
    })
    expect(iconTexts[1].props()).toEqual({ icon: 'map-marker', text: supplierData.address })
    expect(iconTexts[2].props()).toEqual({ icon: 'user', text: supplierData.contact.name })
    expect(iconTexts[3].props()).toEqual({ icon: 'envelope', text: supplierData.contact.email })
    expect(iconTexts[4].props()).toEqual({ icon: 'phone', text: supplierData.contact.phone })
    expect(iconTexts[5].props()).toEqual({ icon: 'print', text: supplierData.contact.fax })
    expect(iconTexts[6].props()).toEqual({ icon: 'eye', text: supplierData.readAt })
  })

  it('renders supplier__container, info__container and content__column classes', () => {
    expect(wrapper.find('.supplier__container').exists()).toBe(true)
    expect(wrapper.find('.info__container').exists()).toBe(true)
    expect(wrapper.find('.content__column').exists()).toBe(true)
  })

  it('matches the component snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
