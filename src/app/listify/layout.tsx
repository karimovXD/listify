import React from 'react'

import Header from '@/components/header/Header'
import Sidebar from '@/components/sidebar/Sidebar'

import '@/app/globals.scss'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='h-full p-3 gap-3 flex items-start justify-between relative'>
			<Sidebar />
			<div className='flex-1 h-full flex flex-col items-start gap-3'>
				<Header />
				{children}
			</div>
		</div>
	)
}
