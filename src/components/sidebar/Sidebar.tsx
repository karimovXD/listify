import React from 'react'

//components
import SidebarFooter from './SidebarFooter'
import SidebarHeader from './SidebarHeader'
import SidebarMenu from './SidebarMenu'

const Sidebar = () => {
	return (
		<aside className='hidden min-h-screen sm:w-[200px] lg:w-[260px] bg-colors-stone-900 sm:flex flex-col items-center justify-between p-3 gap-3 sticky top-0'>
			<div className='w-full flex flex-col items-start gap-3'>
				<SidebarHeader />
				<SidebarMenu />
			</div>
			<SidebarFooter />
		</aside>
	)
}

export default Sidebar
