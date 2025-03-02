'use client'

import React from 'react'

import { useProfile } from '@/hooks/useProfile'

import { Skeleton } from '../ui/skeleton'

const UserProfile = () => {
	const { data, isLoading } = useProfile()

	return (
		<div className='h-full'>
			{isLoading ? (
				<div className='flex items-center justify-end space-x-4'>
					<div className='space-y-2 flex flex-col items-end'>
						<Skeleton className='h-2 w-[50px]' />
						<Skeleton className='h-2 w-[100px]' />
					</div>
					<Skeleton className='h-8 w-8 rounded' />
				</div>
			) : (
				<div className='flex items-center justify-end gap-2 h-full'>
					<div className='flex flex-col items-end justify-end relative h-full'>
						<h5 className='text-[12px] font-medium line-clamp-1 absolute top-0'>
							{data?.user?.name === '' ? 'User' : data?.user?.name}
						</h5>
						<h6 className='text-[10px] text-colors-stone-400 line-clamp-1 h-4'>
							{data?.user?.email}
						</h6>
					</div>
					<div className='w-8 h-8 flex justify-center items-center text-xl text-white rounded uppercase border select-none'>
						{data?.user.name?.charAt(0) || 'U'}
					</div>
				</div>
			)}
		</div>
	)
}

export default UserProfile
