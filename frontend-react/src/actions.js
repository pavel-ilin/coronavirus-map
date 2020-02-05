import { filterData } from './services/helperFunctions'
// const herokuUrl = 'https://health-tracker-i.herokuapp.com'
const localhostUrl = 'http://localhost:3000'
const urlInUse = localhostUrl

export function loadData () {
  return (dispatch) => fetch(urlInUse + '/countries')
    .then(r => r.json())
    .then(resp => {

      let results = filterData(resp)

      dispatch({
      type: "LOAD_DATA",
      countries: resp,
      totalComfirmed: results.totalComfirmed,
      totalDeaths: results.totalDeaths,
      totalRecovered: results.totalRecovered,
      countryByConfirmed: results.countryByConfirmed,
      countryByDeaths: results.countryByDeaths,
      countryByRecovered: results.countryByRecovered,
      dataLoaded: true
    })
    })
}