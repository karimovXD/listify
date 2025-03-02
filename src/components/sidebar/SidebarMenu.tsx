'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

import { SidebarMenuData } from '@/components/sidebar/SidebarMenuData'

import SidebarMenuItem from './SidebarMenuItem'

const SidebarMenu = () => {
	const pathname = usePathname()

	return (
		<main className='flex flex-col items-center gap-2 w-full'>
			{SidebarMenuData.map(item => (
				<SidebarMenuItem
					key={item.name}
					item={item}
					currentPage={pathname}
				/>
			))}
		</main>
	)
}

export default SidebarMenu
