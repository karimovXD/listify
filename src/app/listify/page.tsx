import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Statistics from './Statistics'

export const metadata: Metadata = {
	title: 'Statistics',
	...NO_INDEX_PAGE
}

const Page = () => <Statistics />

export default Page
