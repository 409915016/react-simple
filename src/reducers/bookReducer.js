import { v1 as uuid } from 'uuid'

export const bookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK': 
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuid()
            }]
        case 'REMOVE_BOOK':
            return state.filter(i => i.id !== action.id)

        default:
            return state
    }

}