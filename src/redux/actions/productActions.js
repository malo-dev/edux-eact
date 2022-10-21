import { Actiontype } from "../contants/action-types";
export const setProduct = (product) => {
	return {
		type: Actiontype.SET_PRODUCT,
		payload : product
	}
}
export const selectProduct = (product) => {
	return {
		type: Actiontype.SELECTED_PRODUCT,
		payload: product
	}
}
export const removeSelectProduct = (product) => {
	return {
		type: Actiontype.REMOVE_SELECTED_PRODUCT,
		payload: product
	}
}
