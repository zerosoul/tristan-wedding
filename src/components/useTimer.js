import { useState } from 'react'
import { createTimeModel, useTimeModel } from 'react-compound-timer'

const useTimer = () => {
  const [value, setValue] = useState({})
  const startTimer = () => {
    const deadline = new Date(2021, 8, 15, 0, 0, 0).getTime()
    const timer = createTimeModel({
      direction: 'forward',
      startImmediately: true,
      initialTime: Date.now() - deadline,
      timeToUpdate: 1000
    })
    const { value } = useTimeModel(timer)
    setValue(value)
  }

  return {
    value,
    startTimer
  }
}

export default useTimer
