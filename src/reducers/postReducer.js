export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_POSTS_COMPLETE':
        console.log(action)
        return action.payload;
      case 'INCREMENT_LIKES':
        console.log('hi')
        break;
      default:
          return state;
    }
}
