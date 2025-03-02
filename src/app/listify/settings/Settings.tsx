'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { TypeUserForm } from '@/types/auth.types'

import { useInitialData } from './useInitialData'
import { useUpdateSettings } from './useUpdateSettings'

const Settings = () => {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	})

	useInitialData(reset)

	const { isPending, mutate } = useUpdateSettings()

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data

		mutate({
			...rest,
			password: password || undefined
		})
	}

	return (
		<form
			className='w-full flex flex-col items-start justify-start gap-3'
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-3'>
				<div className='flex flex-col items-start justify-start gap-3'>
					<Label htmlFor='email'>Email:</Label>
					<Input
						id='email'
						type='email'
						placeholder='Email'
						{...register('email', {
							required: 'Email is required!'
						})}
					/>
				</div>
				<div className='flex flex-col items-start justify-start gap-3'>
					<Label htmlFor='workInterval'>Work interval (min.):</Label>
					<Input
						id='workInterval'
						type='number'
						{...register('workInterval', {
							valueAsNumber: true
						})}
					/>
				</div>
				<div className='flex flex-col items-start justify-start gap-3'>
					<Label htmlFor='name'>Name:</Label>
					<Input
						id='name'
						type='text'
						placeholder='Name'
						{...register('name')}
					/>
				</div>
				<div className='flex flex-col items-start justify-start gap-3'>
					<Label htmlFor='breakInterval'>Break interval(min.):</Label>
					<Input
						id='breakInterval'
						type='number'
						{...register('breakInterval', {
							valueAsNumber: true
						})}
					/>
				</div>
				<div className='flex flex-col items-start justify-start gap-3'>
					<Label htmlFor='password'>Password:</Label>
					<Input
						id='password'
						placeholder='password'
						type='password'
						{...register('password')}
					/>
				</div>
				<div className='flex flex-col items-start justify-start gap-3'>
					<Label htmlFor='intervalsCount'>Intervals count(max 10):</Label>
					<Input
						id='intervalsCount'
						type='number'
						{...register('intervalsCount', {
							valueAsNumber: true
						})}
					/>
				</div>
			</div>
			<Button
				className='w-auto'
				type='submit'
				disabled={isPending}
			>
				Save
			</Button>
		</form>
	)
}

export default Settings
