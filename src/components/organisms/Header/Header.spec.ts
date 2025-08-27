import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Header from './Header.vue'

const TypographyMock = {
  name: 'Typography',
  props: ['tag', 'color'],
  template: '<div class="mock-typography"><slot /></div>',
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

const UniconMock = {
  name: 'unicon',
  props: ['name', 'iconStyle', 'fill'],
  template: '<div class="mock-unicon">{{ name }}</div>',
}

describe('Header.vue', () => {
  const headerData = {
    number: '123',
    serial: '456',
    buyer: 'John Doe',
    contact: {
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '123456789',
      fax: '987654321',
    },
    currency: 'USD',
    price: 99.99,
    status: 'Paid',
    createdAt: '2025-08-27',
  }

  const wrapper = mount(Header, {
    props: { data: headerData },
    global: {
      components: {
        Typography: TypographyMock,
        Stack: StackMock,
        IconText: IconTextMock,
        unicon: UniconMock,
      },
    },
  })

  it('renders left section with Pre-Order and data', () => {
    const leftSection = wrapper.find('.header__left_section')
    expect(leftSection.exists()).toBe(true)
    expect(leftSection.text()).toContain('Pre-Order')
    expect(leftSection.text()).toContain(headerData.number)
    expect(leftSection.text()).toContain(`#ME${headerData.serial}`)
  })

  it('renders middle section with buyer and contact info', () => {
    const middleSection = wrapper.find('.header__middle_section')
    expect(middleSection.exists()).toBe(true)
    expect(middleSection.text()).toContain(headerData.buyer)

    const iconTexts = middleSection.findAllComponents(IconTextMock)
    expect(iconTexts).toHaveLength(4)
    expect(iconTexts[0].props('icon')).toBe('user')
    expect(iconTexts[0].props('text')).toBe(headerData.contact.name)
  })

  it('renders right section with price, status, and createdAt', () => {
    const rightSection = wrapper.find('.header__right_section')
    expect(rightSection.exists()).toBe(true)
    expect(rightSection.text()).toContain(`${headerData.currency} ${headerData.price}`)
    expect(rightSection.text()).toContain(headerData.status)
    expect(rightSection.text()).toContain(headerData.createdAt)

    const unicon = rightSection.findComponent(UniconMock)
    expect(unicon.exists()).toBe(true)
    expect(unicon.props('name')).toBe('exclamation-circle')
  })

  it('matches the component snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
