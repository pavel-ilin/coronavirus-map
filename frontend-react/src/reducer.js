const initialState = {
  errors: [],
  data: [],
  dataLoaded: false
}

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return {
        ...oldState,
        data: action.data,
        dataLoaded: action.dataLoaded
      }
    default:
      return oldState
  }
}

export default reducer