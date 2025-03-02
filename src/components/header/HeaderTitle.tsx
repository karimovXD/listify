'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

const HeaderTitle = () => {
	const pathname = usePathname()

	const breadcrumb = pathname.split(' ')

	return <h3 className='text-2xl font-medium'>{breadcrumb}</h3>
}

export default HeaderTitle
