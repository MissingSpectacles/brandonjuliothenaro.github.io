import { configureStore, createSlice } from "@reduxjs/toolkit"

const THEME = {
  DARK: "DARK",
  LIGHT: "LIGHT",
}

const time = new Date().getHours()

const themeSlice = createSlice({
  name: "theme",
  /*
   * Light mode will be activated from 6.00 A.M. until 18.59 P.M.
   * Dark mode will be activated from 19.00 P.M. until 5.59 A.M.
   */
  initialState: { theme: time >= 6 && time <= 18 ? THEME.LIGHT : THEME.DARK },
  reducers: {
    toggleTheme: state => ({
      theme: state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT,
    }),
  },
})

const mapStateToProps = state => ({ theme: state.theme })
const mapDispatchToProps = { toggleTheme: themeSlice.actions.toggleTheme }

export default preloadedState =>
  configureStore({
    reducer: themeSlice.reducer,
    preloadedState: preloadedState,
  })

export { mapStateToProps, mapDispatchToProps, THEME }
