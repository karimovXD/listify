'use client'

import React from 'react'

import StatisticsCard from '@/components/StatisticsCard'
import { Skeleton } from '@/components/ui/skeleton'

import { useProfile } from '@/hooks/useProfile'

const Statistics = () => {
	const { data, isLoading } = useProfile()

	return (
		<div className='w-full pb-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
			{data?.statistics?.map(item =>
				isLoading ? (
					<Skeleton
						key={item.label}
						className='h-[180px]'
					/>
				) : (
					<StatisticsCard
						item={item}
						key={item.label}
					/>
				)
			)}
		</div>
	)
}

export default Statistics
