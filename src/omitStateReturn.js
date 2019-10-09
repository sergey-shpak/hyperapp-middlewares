export function omitStateReturn(dispatch){
  return function(action, props){
    action !== undefined && dispatch(action, props)
  }
}