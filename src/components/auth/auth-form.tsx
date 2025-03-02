'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type FormData = {
	email: string
	password: string
}

const AuthForm: React.FC<{
	name: 'login' | 'signup'
	onSubmit: (data: FormData) => void
}> = ({ name, onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>()

	return (
		<div className='flex flex-col gap-6'>
			<Card className='overflow-hidden rounded-md'>
				<CardContent className='grid p-0 md:grid-cols-2'>
					<form
						className='p-6 md:p-8'
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className='flex flex-col gap-16'>
							<div className='flex flex-col gap-8'>
								<div className='flex flex-col items-center text-center'>
									<h1 className='text-2xl font-bold'>
										{name === 'login' ? `Welcome back` : `Welcome`}
									</h1>
									<p className='text-balance text-muted-foreground first-letter:uppercase '>
										{name === 'login' ? `log in` : `sign up`} to your Listify
										account
									</p>
								</div>
								<div className='grid gap-4'>
									<Label htmlFor='email'>Email</Label>
									<Input
										id='email'
										type='email'
										placeholder='✉'
										required
										{...register('email', { required: 'Email is required' })}
									/>
									{errors.email && (
										<p className='text-red-500'>{errors.email.message}</p>
									)}
								</div>
								<div className='grid gap-4'>
									<Label htmlFor='password'>Password</Label>
									<Input
										id='password'
										type='password'
										placeholder='🔒'
										required
										{...register('password', {
											required: 'Password is required'
										})}
									/>
									{errors.password && (
										<p className='text-red-500'>{errors.password.message}</p>
									)}
								</div>
							</div>

							<div className='flex flex-col gap-4'>
								<Button
									type='submit'
									className='w-full'
								>
									Submit
								</Button>
								<div className='text-center text-sm'>
									{name === 'login'
										? `Don't have an account?${' '}`
										: `Already have an account?${' '}`}
									<Link
										href={name === 'login' ? `/auth/signup` : `/auth/login`}
										className='underline underline-offset-4'
									>
										{name === 'login' ? `sign up` : `log in`}
									</Link>
								</div>
							</div>
						</div>
					</form>
					<div className='relative hidden bg-muted md:block'>
						<Image
							src='/assets/images/auth/auth-image.jpg'
							alt='Image'
							fill
							sizes='50vw'
							priority
							className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.9] dark:grayscale'
						/>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default AuthForm
