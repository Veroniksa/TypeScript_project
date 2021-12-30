export const getTomorrow = () => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow
}

export const getNextMonthLastDay = () => {
    const today = new Date()
    return new Date(today.getFullYear(), today.getMonth() + 2, 0)
}

export const getPlusTwoDays = (arrival: Date) => {
    const leaving = new Date(arrival)
    leaving.setDate(leaving.getDate() + 2)
    return leaving
}

export const addZero = (dateNumber: number): string => {
    const isSingle = dateNumber < 10
    return (isSingle ? "0" : "") + dateNumber
}

export const getDateString = (date: Date) => {
    const year = date.getFullYear()
    const month = addZero(date.getMonth() + 1)
    const day = addZero(date.getDate())
    return `${day}--${month}--${year}`
}
