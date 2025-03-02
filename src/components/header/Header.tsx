import React from 'react'

import DrawerButton from './DrawerButton'
import HeaderTitle from './HeaderTitle'
import UserProfile from './UserProfile'

const Header = () => {
	return (
		<header className='h-auto w-full flex items-center justify-between border-t sm:border-t-0 border-b py-3'>
			<div className='flex items-center justify-start gap-3'>
				<DrawerButton />
				<HeaderTitle />
			</div>
			<UserProfile />
		</header>
	)
}

export default Header
