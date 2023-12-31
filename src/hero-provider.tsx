import { defineComponent, ref, type ExtractPropTypes, type PropType } from 'vue'
import { useProvideHeroContext, type HeroContext } from './use-hero-context'

interface Transition {
  delay: number
  repeat: number
  repeatDelay: number
  repeatType: 'loop' | 'mirror' | 'reverse'
  type: 'spring' | 'keyframes'
  stiffness: number
  damping: number
  mass: number
  bounce: number
  duration: number
  ease: string
}

const props = {
  transition: { type: Object as PropType<Partial<Transition>>, default: undefined }
}

export type HeroProviderProps = ExtractPropTypes<typeof props>

const HeroProvider = defineComponent({
  props,

  setup (props, { slots }) {
    const context: HeroContext = { layouts: ref({}), props }
    useProvideHeroContext(context)

    return () => (
      <>
        {slots.default?.()}
      </>
    )
  }
})

export { HeroProvider }
