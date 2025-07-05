import React from 'react'
import ScheduleItem from './ScheduleItem'

export default function ScheduleList({ schedules, deleteSchedule }) {
  return (
    Array.from(schedules).map(schedule => {
      return <ScheduleItem key={schedule.id} schedule={schedule} deleteSchedule={deleteSchedule} />
    })
  )
}
