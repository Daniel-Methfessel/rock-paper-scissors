import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HandImage from '../HandImage.vue'
import { Hand } from '@/game/Hand'
import { ref } from 'vue'

describe('HandImage', () => {
  it('renders properly', () => {
    const wrapper = mount(HandImage, { props: { hand: ref(Hand.Rock), isPlayer: false } })
    expect( wrapper.element.tagName.toLowerCase()).toEqual('img')
    expect(wrapper.element.getAttribute('alt')?.toLocaleLowerCase()).toContain('rock')
  })

  it('provides the right tooltip for result', () => {
    const wrapper = mount(HandImage, { props: { hand: ref(Hand.Paper), isPlayer: true } })
    expect( wrapper.element.tagName.toLowerCase()).toEqual('img')
    expect(wrapper.element.getAttribute('title')?.toLocaleLowerCase()).toContain("paper")
  })

  it('provides the right tooltip for clickable', () => {
    const wrapper = mount(HandImage, { props: { hand: ref(Hand.Paper), isPlayer: false } })
    expect( wrapper.element.tagName.toLowerCase()).toEqual('img')
    expect(wrapper.element.getAttribute('title')?.toLocaleLowerCase()).toContain("paper (press '2')")
  })
})
