import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Login from './Login'

export const metadata: Metadata = {
	title: 'Log in',
	...NO_INDEX_PAGE
}

const Page = () => <Login />

export default Page
