import { DELETE_TODO_ITEM } from './actionType'
export const deleteItemAction = (id) => {
  return {
    type: DELETE_TODO_ITEM,
    id
  }
}
