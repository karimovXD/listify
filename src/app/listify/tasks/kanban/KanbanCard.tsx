import { IconEdit, IconLoader, IconTrash } from '@tabler/icons-react'
import cn from 'clsx'
import type { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Badge } from '@/components/Badge'
import UpdateModal from '@/components/modal/tasks/UpdateModal'
import { DatePicker } from '@/components/task/date-picker/DatePicker'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

import type { ITaskResponse, TypeTaskFormState } from '@/types/task.types'

import { useDeleteTask } from '../hooks/useDeleteTasks'
import { useTaskDebounce } from '../hooks/useTaskDebounce'

import styles from './KanbanView.module.scss'

interface IKanbanCard {
	item: ITaskResponse
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function KanbanCard({ item, setItems }: IKanbanCard) {
	const { register, control, watch } = useForm<TypeTaskFormState>({
		defaultValues: {
			name: item.name,
			isCompleted: item.isCompleted,
			createdAt: item.createdAt,
			priority: item.priority
		}
	})

	useTaskDebounce({ watch, itemId: item.id })

	const { deleteTask, isDeletePending } = useDeleteTask()

	return (
		<div
			className={cn(
				styles.card,
				{
					[styles.completed]: watch('isCompleted')
				},
				'animation-opacity'
			)}
		>
			<div className='flex items-center justify-between'>
				<div className={styles.cardActions}>
					<Button
						onClick={() =>
							item.id
								? deleteTask(item.id)
								: setItems(prev => prev?.slice(0, -1))
						}
						className='opacity-40 transition-opacity hover:opacity-100'
						variant={'outline'}
					>
						{isDeletePending ? (
							<IconLoader size={15} />
						) : (
							<IconTrash size={15} />
						)}
					</Button>
				</div>
				<div>
					{/*<Button
						variant={'outline'}
						className='opacity-40 transition-opacity hover:opacity-100'
						onClick={() => console.log(item.id)}
					>
						<IconEdit size={15} />
					</Button>*/}
					<UpdateModal
						item={item}
						taskId={item.id}
					/>
				</div>
			</div>
			<div className='flex items-center justify-start gap-2'>
				<Controller
					control={control}
					name='isCompleted'
					render={({ field: { value, onChange } }) => (
						<Checkbox
							onCheckedChange={onChange}
							checked={value}
							className='rounded'
						/>
					)}
				/>
				<h4 className='font-semibold text-lg line-clamp-2'>{item.name}</h4>
			</div>
			<div className='flex items-center justify-between gap-2'>
				<Controller
					control={control}
					name='createdAt'
					render={({ field: { value, onChange } }) => (
						<DatePicker
							onChange={onChange}
							value={value || ''}
							position='left'
						/>
					)}
				/>

				<Controller
					control={control}
					name='priority'
					render={({ field: { value, onChange } }) => (
						<Badge
							className='text-center flex items-center justify-center'
							variant={item?.priority}
						>
							{item?.priority}
						</Badge>
					)}
				/>
			</div>
		</div>
	)
}
