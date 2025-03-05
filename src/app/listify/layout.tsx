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
		<div className='flex items-start justify-between min-h-screen relative'>
			<Sidebar />
			<div className='flex-1 min-h-screen flex flex-col items-start gap-3 p-3 pt-0'>
				<Header />
				{children}
			</div>
		</div>
	)
}
