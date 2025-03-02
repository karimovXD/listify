'use client'

import { IconLogout } from '@tabler/icons-react'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React from 'react'

import { Button } from '../ui/button'

import { authService } from '@/services/auth.service'

const SidebarFooter = () => {
	const router = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth/login')
	})

	return (
		<footer className='w-full'>
			<Button
				className='w-full rounded-[6px] flex items-center justify-center gap-2'
				onClick={() => mutate()}
			>
				<IconLogout size={20} /> Log out
			</Button>
		</footer>
	)
}

export default SidebarFooter
