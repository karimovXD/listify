import { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { TimeBlocking } from './TimeBlocking'

export const metadata: Metadata = {
	title: 'Time blocking',
	...NO_INDEX_PAGE
}
const Page = () => <TimeBlocking />

export default Page
