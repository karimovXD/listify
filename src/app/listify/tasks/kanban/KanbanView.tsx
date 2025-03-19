'use client'

import { DragDropContext } from '@hello-pangea/dnd'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

import { COLUMNS } from '../columns.data'
import { useTaskDnd } from '../hooks/useTaskDnd'
import { useTasks } from '../hooks/useTasks'

import { KanbanColumn } from './KanbanColumn'

export function KanbanView() {
	const { items, setItems } = useTasks()
	const { onDragEnd } = useTaskDnd()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<ScrollArea className='w-96 h-full min-w-full pb-4'>
				<div className='w-full h-full gap-3 flex items-start justify-start'>
					{COLUMNS.map(column => (
						<KanbanColumn
							key={column.value}
							value={column.value}
							label={column.label}
							items={items}
							setItems={setItems}
						/>
					))}
				</div>
				<ScrollBar orientation='horizontal' />
			</ScrollArea>
		</DragDropContext>
	)
}
