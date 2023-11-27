import { Check } from '@phosphor-icons/react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

export interface CheckboxProps {}

export function Checkbox() {
  return (
    <CheckboxPrimitive.Root className="w-6 h-6 bg-gray-800 rounded">
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
