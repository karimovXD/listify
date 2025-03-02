import debounce from 'lodash.debounce'
import { useCallback, useEffect } from 'react'
import { UseFormWatch } from 'react-hook-form'

import { TypeTaskFormState } from '@/types/task.types'

import { useCreateTask } from './useCreateTasks'
import { useUpdateTask } from './useUpdateTasks'

interface IUseTaskDebounce {
    watch: UseFormWatch<TypeTaskFormState>
    itemId: string
}

export function useTaskDebounce({ watch, itemId }: IUseTaskDebounce) {
    const { createTask } = useCreateTask()
    const { updateTask } = useUpdateTask()

    // Теперь debouncedUpdateTask будет сохраняться между рендерами, и debounce будет работать как ожидается.
    const debouncedUpdateTask = useCallback(
        debounce((formData: TypeTaskFormState) => {
            updateTask({ id: itemId, data: formData })
        }, 500),
        []
    )

    useEffect(() => {
        const { unsubscribe } = watch(formData => {
            if (itemId) {
                debouncedUpdateTask({
                    ...formData,
                    priority: formData.priority || undefined
                })
            }
        })

        return () => {
            unsubscribe()
        }
    }, [watch(), debouncedUpdateTask])
}
