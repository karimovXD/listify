import React from 'react'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const StatisticsCard: React.FC<{ item: { label: string; value: string } }> = ({
	item
}) => {
	return (
		<div className='flex flex-col gap-1'>
			<div className='w-full p-3 bg-colors-secondary rounded'>
				<h3 className='font-semibold text-center'>{item?.label}</h3>
			</div>
			<ScrollArea className='whitespace-nowrap rounded-md border border-dashed h-[150px] p-3'>
				<h4 className='text-8xl text-center font-extrabold text-colors-primary'>
					{item?.value}
				</h4>
				<ScrollBar orientation='horizontal' />
			</ScrollArea>
		</div>
	)
}

export default StatisticsCard
