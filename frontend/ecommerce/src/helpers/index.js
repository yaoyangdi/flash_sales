export const sortByStartTime = (arr) => {
    return arr.sort((a,b)=>new Date((a.startTime)) - new Date((b.startTime)))
}