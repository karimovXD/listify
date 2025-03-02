import Link from 'next/link'
import React from 'react'

import { Button } from '../ui/button'

import { SidebarMenuType } from './SidebarMenuType'

//hover:bg-accent hover:text-accent-foreground

const SidebarMenuItem: React.FC<{
	item: SidebarMenuType
	currentPage: string
}> = ({ item, currentPage }) => {
	return (
		<Link
			href={item.link}
			key={item.name}
			className='w-full'
		>
			<Button
				variant='ghost'
				className={`w-full flex items-center justify-start gap-3 ${currentPage === item.link ? 'bg-accent text-accent-foreground' : ''}`}
			>
				<item.icon size={24} />
				{item.name}
			</Button>
		</Link>
	)
}

export default SidebarMenuItem
