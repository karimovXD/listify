import { Draggable, Droppable } from '@hello-pangea/dnd'
import type { Dispatch, SetStateAction } from 'react'

import type { ITaskResponse } from '@/types/task.types'

import { FILTERS } from '../columns.data'
import { filterTasks } from '../filter-tasks'

import { KanbanAddCardInput } from './KanbanAddCard'
import { KanbanCard } from './KanbanCard'

interface IKanbanColumn {
	value: string
	label: string
	items: ITaskResponse[] | undefined
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function KanbanColumn({ value, items, label, setItems }: IKanbanColumn) {
	return (
		<Droppable droppableId={value}>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
					className='h-auto'
				>
					<div className='h-auto bg-colors-secondary p-2 rounded flex flex-col gap-6'>
						<h2 className='text-2xl font-semibold'>{label}</h2>

						<div className='flex flex-col gap-1'>
							{filterTasks(items, value)?.map((item, index) => (
								<Draggable
									key={item.id}
									draggableId={`${item.id}`}
									index={index}
								>
									{provided => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
										>
											<KanbanCard
												key={item.id}
												item={item}
												setItems={setItems}
											/>
										</div>
									)}
								</Draggable>
							))}
						</div>

						{provided.placeholder}

						{value !== 'completed' && (
							<KanbanAddCardInput
								filterDate={
									FILTERS[value] ? FILTERS[value].format() : undefined
								}
							/>
						)}
					</div>
				</div>
			)}
		</Droppable>
	)
}
