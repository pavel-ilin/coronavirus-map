const initialState = {
  errors: [],
  countries: [],
  totalComfirmed: 0,
  totalDeaths: 0,
  totalRecovered: 0,
  countryByConfirmed: [],
  countryByDeaths: [],
  countryByRecovered: [],
  dataLoaded: false
}

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return {
        ...oldState,
        countries: action.countries,
        totalComfirmed: action.totalComfirmed,
        totalDeaths: action.totalDeaths,
        totalRecovered: action.totalRecovered,
        countryByConfirmed: action.countryByConfirmed,
        countryByDeaths: action.countryByDeaths,
        countryByRecovered: action.countryByRecovered,
        dataLoaded: action.dataLoaded
      }
    default:
      return oldState
  }
}

export default reducer