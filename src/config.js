export const activeButton = [
  "Upcoming",
  "Running",
  "Completed"
]
export const query = `query schedule($type: String!, $status: String!) {
  schedule(type: $type, status: $status) {
    matchID
    seriesName
    matchNumber
    venue
    homeTeamName
    awayTeamName
    startDate
  }
}`
export const initialObj = {
  type: 'All',
  status: 'upcoming'
}
export const URI = 'https://api.devcdc.com/cricket';