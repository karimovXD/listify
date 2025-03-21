import { IconLayoutKanban, IconListDetails } from '@tabler/icons-react'
import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { KanbanView } from './kanban/KanbanView'

export const Tasks = () => {
	return (
		<Tabs
			defaultValue='board'
			className='w-full flex-1 flex flex-col items-start justify-start'
		>
			<TabsList className='grid w-[200px] grid-cols-2'>
				<TabsTrigger
					value='board'
					className='flex items-center justify-center gap-1'
				>
					<IconLayoutKanban size={16} />
					Board
				</TabsTrigger>
				<TabsTrigger
					value='list'
					className='flex items-center justify-center gap-1'
				>
					<IconListDetails size={16} />
					List
				</TabsTrigger>
			</TabsList>
			<TabsContent
				value='board'
				className='w-full h-full'
			>
				<KanbanView />
			</TabsContent>
			<TabsContent
				value='list'
				className='w-full'
			>
				<h1>Soon</h1>
			</TabsContent>
		</Tabs>
	)
}
