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

import type { TypeTaskFormState } from '@/types/task.types'

import { useCreateTask } from '../hooks/useCreateTasks'

interface IKanbanAddCardInput {
	filterDate?: string
}

export function KanbanAddCardInput({ filterDate }: IKanbanAddCardInput) {
	const { createTask } = useCreateTask()

	const { register, handleSubmit, control } = useForm<TypeTaskFormState>({
		defaultValues: {
			createdAt: filterDate
		}
	})

	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button
						variant='default'
						className='italic text-sm'
					>
						Add task...
					</Button>
				</DialogTrigger>
				<DialogContent className='p-3'>
					<DialogHeader>
						<DialogTitle>Add task</DialogTitle>
						<DialogDescription aria-describedby='Add task' />
					</DialogHeader>
					<form
						className='grid gap-4 py-4'
						onSubmit={handleSubmit(data => {
							createTask(data)
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
										<SelectContent>
											<SelectGroup>
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
