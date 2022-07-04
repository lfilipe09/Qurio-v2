export const msToTime = (millisec: number) => {
  let seconds = Number((millisec / 1000).toFixed(0))
  let minutes = Math.floor(seconds / 60)
  let hours = 0
  if (minutes > 59) {
    hours = Math.floor(minutes / 60)
    hours = Number(hours >= 10 ? hours : '0' + hours)
    minutes = minutes - hours * 60
    minutes = Number(minutes >= 10 ? minutes : '0' + minutes)
  }

  seconds = Math.floor(seconds % 60)
  seconds = seconds >= 10 ? seconds : 0 + seconds
  if (hours != 0) {
    return `${hours}h ${minutes}`
  }
  return `${minutes}m`
}
