'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import AuthForm from '@/components/auth/auth-form'

import { AuthFormType } from '@/types/auth.types'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { authService } from '@/services/auth.service'

export default function Login() {
	
	const { reset } = useForm<AuthFormType>({
		mode: 'onChange'
	})

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: AuthFormType) => authService.login(data),
		onSuccess() {
			toast.success('Successfully login!')
			reset()
			push(DASHBOARD_PAGES.HOME);
		},
	})

	const onSubmit = (data: AuthFormType) => {
		mutate(data)
	}

	return (
		<div className='flex min-h-svh flex-col items-center justify-center p-2 md:p-4'>
			<div className='w-full max-w-sm md:max-w-3xl'>
				<AuthForm
					name='login'
					onSubmit={onSubmit}
				/>
			</div>
		</div>
	)
}
