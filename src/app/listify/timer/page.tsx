import { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Timer from './Timer'

export const metadata: Metadata = {
	title: 'Timer',
	...NO_INDEX_PAGE
}

const page = () => <Timer />

export default page
