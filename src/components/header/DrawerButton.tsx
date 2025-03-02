import { IconLayoutSidebarLeftExpand } from '@tabler/icons-react'
import React from 'react'

import SidebarFooter from '../sidebar/SidebarFooter'
import SidebarMenu from '../sidebar/SidebarMenu'
import { Button } from '../ui/button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '../ui/sheet'

const DrawerButton = () => {
	return (
		<>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						className='flex sm:hidden'
						variant={'secondary'}
					>
						<IconLayoutSidebarLeftExpand size={24} />
					</Button>
				</SheetTrigger>
				<SheetContent
					side={'left'}
					className='flex flex-col items-start justify-start gap-3 p-3'
				>
					<SheetHeader>
						<SheetTitle className='text-3xl'>Listify</SheetTitle>
						<SheetDescription aria-describedby={undefined} />
					</SheetHeader>
					<SidebarMenu />
					<SheetFooter>
						<SheetClose asChild>
							<SidebarFooter />
						</SheetClose>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</>
	)
}

export default DrawerButton
