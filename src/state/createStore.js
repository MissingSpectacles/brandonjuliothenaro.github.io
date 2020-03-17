import { configureStore, createSlice } from "@reduxjs/toolkit"

const THEME = Object.freeze({
  DARK: "DARK",
  LIGHT: "LIGHT",
})

const getThemeByTime = () => {
  const hour = new Date().getHours()
  return hour >= 6 && hour <= 18 ? THEME.LIGHT : THEME.DARK
}

const themeSlice = createSlice({
  name: "theme",
  /*
   * Light mode will be activated from 6.00 A.M. until 18.59 P.M.
   * Dark mode will be activated from 19.00 P.M. until 5.59 A.M.
   */
  initialState: {
    theme: getThemeByTime(),
    isFirstLoad: true, // Enable layout.jsx:40
  },
  reducers: {
    toggleTheme: state => ({
      theme: state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT,
      isFirstLoad: false, // Disable layout.jsx:40
    }),
  },
})

const mapStateToProps = state => ({ theme: state.theme, isFirstLoad: state.isFirstLoad })
const mapDispatchToProps = { toggleTheme: themeSlice.actions.toggleTheme }

export default preloadedState =>
  configureStore({
    reducer: themeSlice.reducer,
    preloadedState: preloadedState,
  })

export { mapStateToProps, mapDispatchToProps, THEME, getThemeByTime }
