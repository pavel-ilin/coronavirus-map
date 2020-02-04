// const herokuUrl = 'https://health-tracker-i.herokuapp.com'
const localhostUrl = 'http://localhost:3000'
const urlInUse = localhostUrl

export function loadData () {
  return (dispatch) => fetch(urlInUse + '/countries')
    .then(r => r.json())
    .then(resp => {
      
      dispatch({
      type: "LOAD_DATA",
      data: resp,
      dataLoaded: true
    })
    })
}