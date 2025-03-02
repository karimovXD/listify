import {
	IconEdit,
	IconGripVertical,
	IconLoader,
	IconTrash
} from '@tabler/icons-react'
import { useFormContext } from 'react-hook-form'

import type {
	ITimeBlockResponse,
	TypeTimeBlockFormState
} from '@/types/time-block.types'

import styles from './TimeBlocking.module.scss'
import { useDeleteTimeBlock } from './hooks/useDeleteTimeBlock'
import { useTimeBlockSortable } from './hooks/useTimeBlockSortable'

export function TimeBlock({ item }: { item: ITimeBlockResponse }) {
	const { attributes, listeners, setNodeRef, style } = useTimeBlockSortable(
		item.id
	)
	const { reset } = useFormContext<TypeTimeBlockFormState>()
	const { deleteTimeBlock, isDeletePending } = useDeleteTimeBlock(item.id)

	return (
		<div
			ref={setNodeRef}
			style={style}
			className='w-full h-[4rem]'
		>
			<div
				className={`${styles.block} flex items-start justify-between`}
				style={{
					backgroundColor: item.color || 'lightgray',
					padding: '0.5rem',
					height: '100%'
				}}
			>
				<div className='flex items-center gap-[0.5rem]'>
					<button
						{...attributes}
						{...listeners}
						aria-describedby='time-block'
					>
						<IconGripVertical className={styles.grip} />
					</button>
					<div>
						{item.name}{' '}
						<i className='text-xs opacity-50'>({item.duration} min.)</i>
					</div>
				</div>

				<div className={styles.actions}>
					<button
						onClick={() => {
							reset({
								id: item.id,
								color: item.color,
								duration: item.duration,
								name: item.name,
								order: item.order
							})
						}}
						className='opacity-50 transition-opacity hover:opacity-100 mr-2'
					>
						<IconEdit size={16} />
					</button>
					<button
						onClick={() => deleteTimeBlock()}
						className='opacity-50 transition-opacity hover:opacity-100'
					>
						{isDeletePending ? (
							<IconLoader size={16} />
						) : (
							<IconTrash size={16} />
						)}
					</button>
				</div>
			</div>
		</div>
	)
}
