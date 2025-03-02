import { IconEdit } from '@tabler/icons-react'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'

import type { ITaskResponse, TypeTaskFormState } from '@/types/task.types'

import { useUpdateTask } from '@/app/listify/tasks/hooks/useUpdateTasks'

interface IKanbanAddCardInput {
	filterDate?: string
	taskId?: string
	item?: ITaskResponse
}

export default function KanbanAddCardInput({
	filterDate,
	taskId,
	item
}: IKanbanAddCardInput) {
	const { updateTask } = useUpdateTask()

	const { register, handleSubmit, control } = useForm<TypeTaskFormState>({
		defaultValues: {
			name: item?.name,
			isCompleted: item?.isCompleted,
			createdAt: item?.createdAt,
			priority: item?.priority
		}
	})

	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button
						variant={'outline'}
						className='opacity-40 transition-opacity hover:opacity-100'
					>
						<IconEdit size={15} />
					</Button>
				</DialogTrigger>
				<DialogContent className='p-3'>
					<DialogHeader>
						<DialogTitle>Update task</DialogTitle>
						<DialogDescription aria-describedby='Add task' />
					</DialogHeader>
					<form
						className='grid gap-4 py-4'
						onSubmit={handleSubmit(data => {
							updateTask({ id: taskId!, data })
						})}
					>
						<div className='flex items-center justify-between gap-3'>
							<Input
								id='name'
								className='col-span-3'
								{...register('name', { required: 'Task name is required' })}
								placeholder='Task name'
							/>
							<Controller
								control={control}
								name='priority'
								render={({ field: { value, onChange } }) => (
									<Select onValueChange={onChange}>
										<SelectTrigger className='w-[200px]'>
											<SelectValue placeholder='Priority' />
										</SelectTrigger>
										<SelectContent defaultValue={item?.priority}>
											<SelectGroup defaultValue={item?.priority}>
												<SelectLabel>priorities</SelectLabel>
												{['high', 'medium', 'low'].map(item => (
													<SelectItem
														value={item}
														key={item}
													>
														{item}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
								)}
							/>
						</div>
						<DialogFooter className='border'>
							<Button
								type='submit'
								className='w-full'
							>
								Save changes
							</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		</>
	)
}
