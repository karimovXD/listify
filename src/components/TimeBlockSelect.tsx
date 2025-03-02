import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'

export interface IOption {
	label: string
	value: string
}

interface ISingleSelect {
	data: IOption[]
	onChange: (value: string) => void
	value: string
	isColorSelect?: boolean
}

export function TimeBlockSelect({ data, onChange, value }: ISingleSelect) {
	return (
		<div className='w-full h-auto flex flex-col items-start justify-start gap-3'>
			<Label htmlFor='colors'>
				Color: <Badge style={{ backgroundColor: value }}>{value}</Badge>
			</Label>
			<Select
				onValueChange={onChange}
				defaultValue={value}
			>
				<SelectTrigger id='colors'>
					<SelectValue placeholder='Select a verified email to display' />
				</SelectTrigger>
				<SelectContent>
					{data?.map(item => (
						<SelectItem
							key={item.value}
							value={item.value}
						>
							{item.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
