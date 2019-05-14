export default (state = [], action) => {
  switch (action.type){
    case 'ADD_QUOTE':
      return [...state, {...action.quote, votes: 0}];

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      let idx;
      console.log('action', action.quoteId);

      return state.map(arrayElement => {
        console.log('arrayElement 0->> ', arrayElement);

        // check if ID of elemet is same as action.quoteId and return an updared object
        if(arrayElement.id === action.quoteId){
          arrayElement.votes = arrayElement.votes + 1;
        }
        return arrayElement;
      });

    case 'DOWNVOTE_QUOTE':
      return state.map(arrayElement => {
        if(arrayElement.id === action.quoteId){
          if(arrayElement.votes === 0){
            return arrayElement;
          }
          arrayElement.votes = arrayElement.votes - 1;
          return arrayElement;
        }
      });

    default:
      return state;
  }
}

