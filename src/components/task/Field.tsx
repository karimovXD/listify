import cn from 'clsx'
import { type InputHTMLAttributes, forwardRef } from 'react'

import { Input } from '../ui/input'

type TypeTransparentField = InputHTMLAttributes<HTMLInputElement>

export const TransparentField = forwardRef<
	HTMLInputElement,
	TypeTransparentField
>(({ className, ...rest }, ref) => {
	return (
		<Input
			className={cn(
				'bg-transparent border-none focus:outline-0 focus:shadow-transparent w-full',
				className
			)}
			ref={ref}
			{...rest}
		/>
	)
})

TransparentField.displayName = 'TransparentField'
