function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return{
      //take current state
      ...state,
      //overwrite post
      [action.postId]:postComments(state[action.postId],action)
    }
  }
  return state
};

function postComments(state = [],action){
  console.log(state);
  switch (action.type) {
    case 'ADD_COMMENT':
    console.log(state);
      return[
        ...state,{
          user:action.author,
          text:action.comment
        }
      ];
      break;
    case 'REMOVE_COMMENT':
    console.log('rmv comments');
    return [
      ...state.slice(0,action.i),
      ...state.slice(action.i+1)
    ]
      break;
    default:

    return state;
  }
}

export default comments;
