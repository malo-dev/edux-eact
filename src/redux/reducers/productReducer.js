import { Actiontype } from "../contants/action-types";
const initialState = {
	// products: [{
	// 	id: 1,
	// 	title: "dispetch",
	// 	category : "programmer"
	// }]
	product : []
}
export const productReducer = (state = initialState, {type,payload}) => {
	switch (type) {
		case Actiontype.SET_PRODUCT:
			return { ...state }
		case Actiontype.SELECTED_PRODUCT:
			return {...state,products : payload}
		default:
			return state
	}
}