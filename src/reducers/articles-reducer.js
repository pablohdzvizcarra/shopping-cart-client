export const articlesReducer = (state, action) => {
  switch (action.type) {
    case 'article': {
      return {
        ...state, 
        articles: [action.payload, ...state.articles]
      }
    }  
    
    case 'alert': {
      return {
        ...state,
        alertArticles: {...action.payload}
      }
    }
      
    case 'setAllData': {
      return {
        ...state,
        articles: [...action.payload]
      }
    }
  
    default:
      break
  }
}