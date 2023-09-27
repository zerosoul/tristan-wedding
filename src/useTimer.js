import { useState } from 'react'
import dayjs from 'dayjs'

const initTime = dayjs(new Date(2021, 8, 15, 0, 0, 0))
let inter = 0
const useTimer = () => {
  const [value, setValue] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0
  })
  const startTimer = () => {
    inter = setInterval(() => {
      const nowTime = dayjs(new Date())
      const day = nowTime.diff(initTime, 'd') //  default milliseconds
      const hour = (nowTime.diff(initTime, 'h') % 24)
        .toString()
        .padStart(2, '0') //  default milliseconds
      const minute = (nowTime.diff(initTime, 'm') % 60)
        .toString()
        .padStart(2, '0') //  default milliseconds
      const second = (nowTime.diff(initTime, 's') % 60)
        .toString()
        .padStart(2, '0') //  default milliseconds
      setValue({
        day,
        hour,
        minute,
        second
      })
    })
  }
  const stopTimer = () => {
    clearInterval(inter)
  }
  return {
    stopTimer,
    startTimer,
    value
  }
}
export default useTimer
