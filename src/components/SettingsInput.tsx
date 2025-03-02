'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

import { TypeUserForm } from '@/types/auth.types'

import { Input } from './ui/input'
import { Label } from './ui/label'

enum InputType {
	TEXT = 'text',
	EMAIL = 'email',
	PASSWORD = 'password',
	NUMBER = 'number'
}

const SettingsInput: React.FC<{
	label: string
	type: InputType
	registerValue: keyof TypeUserForm
	AsNumber: boolean
}> = ({ label, type, registerValue, AsNumber }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	return (
		<div>
			<Label>{label}</Label>
			<Input type={type} />
		</div>
	)
}

export default SettingsInput
