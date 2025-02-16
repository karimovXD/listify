import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Register from './Register'

export const metadata: Metadata = {
	title: 'Sign up',
	...NO_INDEX_PAGE
}

const Page = () => <Register />

export default Page
