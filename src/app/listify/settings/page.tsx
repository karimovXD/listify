import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Settings } from './Settings'

export const metadata: Metadata = {
	title: 'Settings',
	...NO_INDEX_PAGE
}

const Page = () => {
	return <Settings />
}

export default Page
