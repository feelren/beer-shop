import {api} from "../api/api";

const SET_ITEMS = "SET_ITEMS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const CHANGE_ITEMS_COUNT_ON_PAGE = "CHANGE_ITEMS_COUNT_ON_PAGE";
const SET_ITEMS_TOTAL_COUNT = "SET_ITEMS_TOTAL_COUNT";
const SET_TOTAL_PAGES_COUNT = " SET_TOTAL_PAGES_COUNT";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
const RESET_CURRENT_PAGE = "RESET_CURRENT_PAGE";
const CHANGE_LAYOUT_TO_GRID = "CHANGE_LAYOUT_TO_GRID";
const CHANGE_LAYOUT_TO_LIST = "CHANGE_LAYOUT_TO_LIST";
const SET_SELECTED_ITEM = "SET_SELECTED_ITEM";
const CLOSE_PRODUCT_MODAL = "CLOSE_PRODUCT_MODAL";
const OPEN_PRODUCT_MODAL = "OPEN_PRODUCT_MODAL";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const TOGGLE_IS_SETTINGS_WINDOW_ACTIVE = "TOGGLE_IS_SETTINGS_WINDOW_ACTIVE";

//itemsLayout === "grid" или "list"
let initialState = {
	items: [],
	selectedItem: null,
	cart: [],
	itemsTotalCount: null,
	itemsCountOnPage: 12,
	currentPage: 1,
	totalPagesCount: null,
	isFetching: false,
	itemsLayout: "list",
	isProductModalActive: false,
	isSettingsWindowActive: false,
};

let reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ITEMS: {
			return {
				...state,
				items: action.items,
			};
		}

		case ADD_TO_CART: {
			return {
				...state,
				cart: [...state.cart, action.id],
			};
		}

		case TOGGLE_IS_SETTINGS_WINDOW_ACTIVE: {
			return {
				...state,
				isSettingsWindowActive: !state.isSettingsWindowActive,
			};
		}

		case REMOVE_FROM_CART: {
			let index = state.cart.findIndex((item) => item === action.id);
			let cartCopy = [...state.cart];
			cartCopy.splice(index, 1);

			return {
				...state,
				cart: [...cartCopy],
			};
		}

		case SET_SELECTED_ITEM: {
			return {
				...state,
				selectedItem: action.item,
			};
		}

		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: !state.isFetching,
			};
		}

		case CHANGE_ITEMS_COUNT_ON_PAGE: {
			return {
				...state,
				itemsCountOnPage: action.count,
			};
		}

		case SET_ITEMS_TOTAL_COUNT: {
			return {
				...state,
				itemsTotalCount: action.count,
			};
		}

		case SET_TOTAL_PAGES_COUNT: {
			return {
				...state,
				totalPagesCount: action.count,
			};
		}

		case CHANGE_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.page,
			};
		}

		case RESET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: 1,
			};
		}

		case CHANGE_LAYOUT_TO_GRID: {
			return {
				...state,
				itemsLayout: "grid",
			};
		}

		case CHANGE_LAYOUT_TO_LIST: {
			return {
				...state,
				itemsLayout: "list",
			};
		}

		case OPEN_PRODUCT_MODAL: {
			return {
				...state,
				isProductModalActive: true,
			};
		}

		case CLOSE_PRODUCT_MODAL: {
			return {
				...state,
				isProductModalActive: false,
			};
		}

		default:
			return state;
	}
};

//          AC - Action Creator

export let setItemsAC = (items) => ({
	type: SET_ITEMS,
	items,
});

export let setSelectedItemAC = (item) => ({
	type: SET_SELECTED_ITEM,
	item,
});

export let toggleIsSettingsWindowActiveAC = () => ({
	type: TOGGLE_IS_SETTINGS_WINDOW_ACTIVE,
});

let toggleIsFetchingAC = () => ({
	type: TOGGLE_IS_FETCHING,
});

export let changeItemsCountOnPageAC = (count) => ({
	type: CHANGE_ITEMS_COUNT_ON_PAGE,
	count,
});

export let setItemsTotalCountAC = (count) => ({
	type: SET_ITEMS_TOTAL_COUNT,
	count,
});

export let setTotalPagesCountAC = (count) => ({
	type: SET_TOTAL_PAGES_COUNT,
	count,
});

export let changeCurrentPageAC = (page) => ({
	type: CHANGE_CURRENT_PAGE,
	page,
});

export let resetCurrentPageAC = () => ({
	type: RESET_CURRENT_PAGE,
});

export let changeLayoutToGridAC = () => ({
	type: CHANGE_LAYOUT_TO_GRID,
});

export let changeLayoutToListAC = () => ({
	type: CHANGE_LAYOUT_TO_LIST,
});

export let closeProductModalAC = () => ({
	type: CLOSE_PRODUCT_MODAL,
});

export let openProductModalAC = () => ({
	type: OPEN_PRODUCT_MODAL,
});

export let addToCartAC = (id) => ({
	type: ADD_TO_CART,
	id,
});

export let removeFromCartAC = (id) => ({
	type: REMOVE_FROM_CART,
	id,
});

//          TC - Thunk Creator

export let openProductInfoTC = (id) => {
	return (dispatch) => {
		dispatch(toggleIsFetchingAC());
		api.getItem(id).then((data) => {
			let productInfo = Object.assign(data[0]);
			dispatch(setSelectedItemAC(productInfo));
			dispatch(toggleIsFetchingAC());
			dispatch(openProductModalAC());
		});
	};
};

export let changeCurrentPageTC = (page, itemsCountOnPage) => {
	return (dispatch) => {
		dispatch(changeCurrentPageAC(page));
		dispatch(setItemsTC(page, itemsCountOnPage));
	};
};

export let changeItemsCountOnPageTC = (count) => {
	return (dispatch) => {
		dispatch(resetCurrentPageAC());
		dispatch(changeItemsCountOnPageAC(count));
		dispatch(setItemsTC(undefined, count));
	};
};

export let setItemsTC = (currentPage = 1, itemsCountOnPage = 12) => {
	return (dispatch) => {
		dispatch(toggleIsFetchingAC());
		api.getItems(currentPage, itemsCountOnPage).then((data) => {
			dispatch(setItemsAC(data));
			dispatch(toggleIsFetchingAC());
		});
	};
};

export const setCartItemsTC = (items) => {
	return (dispatch) => {
		items = items.join("|");
		api.getFavoriteItems(items).then((data) => {
			dispatch(setItemsAC(data));
		});
	};
};

// API не предоставляет общее число товаров, поэтому ищем сами:
// Скорее всего, в реальной практике это было бы неприемлимо, но и АПИ был бы другой.
// Эта рекурсивная функция делает запросы на сервер, пока длина массива response.data положительна и считает общее кол-во элементов. Затем это число устанавливает в itemsTotalCount.

export let getItemsTotalCountTC = () => {
	return (dispatch) => {
		let totalCount = 0;
		let getAndSetTotalCount = (page = 1) => {
			api.getItemsTotalCount(page).then((data) => {
				if (data) {
					totalCount = totalCount + data;
					page++;
					getAndSetTotalCount(page);
				} else dispatch(setItemsTotalCountAC(totalCount));
			});
		};
		getAndSetTotalCount();
	};
};

export default reducer;
