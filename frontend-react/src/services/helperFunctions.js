export function filterData (data) {
  let filteredResults = {
    totalComfirmed: 0,
    totalDeaths: 0,
    totalRecovered: 0,
    countryByConfirmed: [],
    countryByDeaths: [],
    countryByRecovered: []
  }

  for(let i = 0; i < data.length; i++){
    let totalConfirmedObject = {country: data[i].title, confirmed: 0}
    let totalDeathsObject = {country: data[i].title, deaths: 0}
    let totalRecoveredObject = {country: data[i].title, recovered: 0}


    filteredResults.countryByConfirmed.push(totalConfirmedObject)
    filteredResults.countryByDeaths.push(totalDeathsObject)
    filteredResults.countryByRecovered.push(totalRecoveredObject)

    for(let q = 0; q < data[i].provinces.length; q++){
      filteredResults.totalComfirmed += data[i].provinces[q].confirmed
      filteredResults.totalDeaths += data[i].provinces[q].deaths
      filteredResults.totalRecovered += data[i].provinces[q].recovered


      totalConfirmedObject.confirmed += data[i].provinces[q].confirmed
      totalDeathsObject.deaths += data[i].provinces[q].deaths
      totalRecoveredObject.recovered += data[i].provinces[q].recovered
    }
  }
  return filteredResults
}

export function sortCountries (data) {
  let sortedData = data.sort((a, b) => (a.confirmed < b.confirmed) ? 1 : -1)
  return sortedData
}

export function sortCountriesDeaths (data) {
  let sortedData = data.sort((a, b) => (a.deaths < b.deaths) ? 1 : -1)
  return sortedData
}

export function sortCountriesRecovered (data) {
  let sortedData = data.sort((a, b) => (a.recovered < b.recovered) ? 1 : -1)
  return sortedData
}

const helperFunctions = {
  filterData,
  sortCountries,
  sortCountriesDeaths,
  sortCountriesRecovered
}

export default helperFunctions