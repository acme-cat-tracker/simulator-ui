import React, { useState } from 'react'
import { Slider } from './Slider'
import type { Update } from './updateReported'

export const HeartRateMonitor = ({
	queueUpdate,
}: {
	queueUpdate: (u: Update) => void
}) => {
	const [heartRate, setHeartRate] = useState<number>(180)
	return (
		<>
			<dt>Heart rate: {heartRate}</dt>
			<dd>
				<Slider
					id="heartRate"
					value={heartRate}
					min={140}
					max={220}
					onChange={(heartRate) => {
						setHeartRate(Math.round(heartRate))
						queueUpdate({
							property: 'heartrate',
							v: Math.round(heartRate),
						})
					}}
				/>
			</dd>
		</>
	)
}
