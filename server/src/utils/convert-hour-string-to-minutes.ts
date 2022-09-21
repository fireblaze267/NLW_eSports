export function convertHourStringToMinutes(houtString:string){
    const [hours, minutes] = houtString.split(':').map(Number)

    const minutesAmount = (hours * 60) + minutes

    return minutesAmount
}