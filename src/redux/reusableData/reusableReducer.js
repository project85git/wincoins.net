// src/redux/reducers/promoReducer.js
const SingleUserDetails = JSON.parse(localStorage.getItem('SingleUserDetails')); // Parse string back to object

import {
  FETCH_SOCIAL_MEDIA,
  CHECK_APPLY_FILTERS,
  FETCH_PROVIDER_DATA,
  FETCH_GAME_CATEGORY,
  PAYMENT_CURRENCY,
  GET_SINGLE_USERDETAILS,
  SHOW_SIDEBAR,
  HALF_SIDEBAR,
  OPEN_MOBILE_SIDEBAR,
  SET_HIDE_FIRST_SIDEBAR,
  SET_BACK_SECOND_SIDEBARITEM,
  SET_ACTIVE_BOTTOM_TAB,
  SET_MULTIPLE_CATEGORY_FOR_FILTER,
  SET_QUERY_FOR_SEARCH,
} from "./actionTypes";

const initialState = {
  socailMediaData: {},
  gameProvider: [],
  gameCategory: [],
  paymentCurrency: [],
  userDetails: SingleUserDetails||{},
  showSidebar: true,
  halfSidebar: false,
  isOpenMobileSidebar: false,
  hideFirstSidebar: false,
  backSidebarItem: false,
  activeBottomTab: "",
  filterCategory: ["All Providers"],
  applyFilter: false,
  searchQuery:'',
};
console.log(SingleUserDetails,"in reducr")

const reusableReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SOCIAL_MEDIA:
      return {
        ...state,
        socailMediaData: action.payload,
      };
    case FETCH_PROVIDER_DATA:
      return {
        ...state,
        gameProvider: action.payload,
      };
    case FETCH_GAME_CATEGORY:
      return {
        ...state,
        gameCategory: action.payload,
      };
    case PAYMENT_CURRENCY:
      return {
        ...state,
        paymentCurrency: action.payload,
      };
    case GET_SINGLE_USERDETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    case SHOW_SIDEBAR:
      return {
        ...state,
        showSidebar: action.payload,
      };
    case HALF_SIDEBAR:
      return {
        ...state,
        halfSidebar: action.payload,
      };
    case OPEN_MOBILE_SIDEBAR:
      return {
        ...state,
        isOpenMobileSidebar: action.payload,
      };
    case SET_HIDE_FIRST_SIDEBAR:
      return {
        ...state,
        hideFirstSidebar: action.payload,
      };
    case SET_BACK_SECOND_SIDEBARITEM:
      return {
        ...state,
        backSidebarItem: action.payload,
      };
    case SET_ACTIVE_BOTTOM_TAB:
      return {
        ...state,
        activeBottomTab: action.payload,
      };
    case SET_MULTIPLE_CATEGORY_FOR_FILTER:
      return {
        ...state,
        filterCategory: action.payload,
      };
      case CHECK_APPLY_FILTERS:
        return {
          ...state,
          applyFilter: action.payload,
        }
        case SET_QUERY_FOR_SEARCH:
          return {
           ...state,
            searchQuery: action.payload,
          }
    default:
      return state;
  }
};

export default reusableReducer;
