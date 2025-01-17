// src/redux/actions.js
import {
  FETCH_SOCIAL_MEDIA,
  FETCH_PROVIDER_DATA,
  FETCH_GAME_CATEGORY,
  PAYMENT_CURRENCY,
  GET_SINGLE_USERDETAILS,
  SHOW_SIDEBAR,
  HALF_SIDEBAR,
  OPEN_SECOND_SIDEBAR,
  SET_HIDE_FIRST_SIDEBAR,
  SET_BACK_SECOND_SIDEBARITEM,
  SET_ACTIVE_BOTTOM_TAB,
  SET_MULTIPLE_CATEGORY_FOR_FILTER,
  CHECK_APPLY_FILTERS,
  SET_QUERY_FOR_SEARCH
} from "./actionTypes";

export const fetchSocialMediaData = (socialMediaData) => ({
  type: FETCH_SOCIAL_MEDIA,
  payload: socialMediaData,
});

export const fetchProviderData = (data) => ({
  type: FETCH_PROVIDER_DATA,
  payload: data,
});

export const paymentCurrencyData = (data) => ({
  type: PAYMENT_CURRENCY,
  payload: data,
});

export const fetchGameCategory = (data) => ({
  type: FETCH_GAME_CATEGORY,
  payload: data,
});

export const singleUserDetails = (data) => ({
  type: GET_SINGLE_USERDETAILS,
  payload: data,
});

export const setShowSideBar = (value) => ({
  type: SHOW_SIDEBAR,
  payload: value,
});
export const setHalfSideBar = (value) => ({
  type: HALF_SIDEBAR,
  payload: value,
});
export const setOpenSecondSidebar = (value) => ({
  type: OPEN_SECOND_SIDEBAR,
  payload: value,
});

export const setHideFirstSidebar = (value) => ({
  type: SET_HIDE_FIRST_SIDEBAR,
  payload: value,
});

export const setBackSecondSideBarItem = (value) => ({
  type: SET_BACK_SECOND_SIDEBARITEM,
  payload: value,
});

export const setActiveBottomTab = (value) => ({
  type: SET_ACTIVE_BOTTOM_TAB,
  payload: value,
});

export const setMultipleCategoryForFilter = (value) => ({
  type: SET_MULTIPLE_CATEGORY_FOR_FILTER,
  payload: value,
});


export const setApplyFilter=(value)=>({
  type: CHECK_APPLY_FILTERS,
  payload: value,
})

export const setQueryForSearch=(value)=>({
  type:SET_QUERY_FOR_SEARCH,
  payload:value
})