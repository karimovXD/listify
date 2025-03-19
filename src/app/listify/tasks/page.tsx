import { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Tasks } from './Tasks'

export const metadata: Metadata = {
	title: 'Tasks',
	...NO_INDEX_PAGE
}
const Page = () => <Tasks />

export default Page
