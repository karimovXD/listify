'use client'

import {
	IconLoader,
	IconPlayerPause,
	IconPlayerPlay,
	IconRefresh
} from '@tabler/icons-react'
import React from 'react'

import { Button } from '@/components/TimerButton'

import { formatTime } from './format-time'
import { useCreateSession } from './hooks/useCreateSession'
import { useDeleteSession } from './hooks/useDeleteSession'
import { useTimer } from './hooks/useTimer'
import { useTimerActions } from './hooks/useTimerAction'
import { useTodaySession } from './hooks/useTodaySession'
import { PomodoroRounds } from './round/Pomodoro'

const Timer = () => {
	const timerState = useTimer()
	const { isLoading, sessionsResponse, workInterval } =
		useTodaySession(timerState)

	const rounds = sessionsResponse?.data.rounds
	const actions = useTimerActions({ ...timerState, rounds })

	const { isPending, mutate } = useCreateSession()
	const { deleteSession, isDeletePending } = useDeleteSession(() =>
		timerState.setSecondsLeft(workInterval * 60)
	)

	return (
		<div className='relative w-full text-center p-3'>
			{!isLoading && (
				<div className='text-7xl font-semibold'>
					{formatTime(timerState.secondsLeft)}
				</div>
			)}
			{isLoading ? (
				<IconLoader />
			) : sessionsResponse?.data ? (
				<div>
					<PomodoroRounds
						rounds={rounds}
						nextRoundHandler={actions.nextRoundHandler}
						prevRoundHandler={actions.prevRoundHandler}
						activeRound={timerState.activeRound}
					/>
					<button
						className='opacity-80 hover:opacity-100 transition-opacity'
						onClick={
							timerState.isRunning ? actions.pauseHandler : actions.playHandler
						}
						disabled={actions.isUpdateRoundPending}
					>
						{timerState.isRunning ? (
							<IconPlayerPause size={30} />
						) : (
							<IconPlayerPlay size={30} />
						)}
					</button>
					<button
						onClick={() => {
							timerState.setIsRunning(false)
							deleteSession(sessionsResponse.data.id)
						}}
						className='absolute top-0 right-0 opacity-40 hover:opacity-90 transition-opacity'
						disabled={isDeletePending}
					>
						<IconRefresh size={19} />
					</button>
				</div>
			) : (
				<Button
					onClick={() => mutate()}
					className='mt-3'
					disabled={isPending}
				>
					Create session
				</Button>
			)}
		</div>
	)
}

export default Timer
