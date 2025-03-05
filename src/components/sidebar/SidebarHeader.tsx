import { IconLayout } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

import { SITE_NAME } from '@/constants/seo.constants'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

const SidebarHeader = () => {
	return (
		<Link
			href={DASHBOARD_PAGES.HOME}
			className='w-full'
		>
			<header className='flex items-center justify-center gap-2 pb-3'>
				<IconLayout size={24} />{' '}
				<h3 className='text-2xl font-bold'>{SITE_NAME}</h3>
			</header>
		</Link>
	)
}

export default SidebarHeader
