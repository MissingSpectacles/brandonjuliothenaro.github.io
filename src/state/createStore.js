import { configureStore, createSlice } from "@reduxjs/toolkit"

const THEME = {
  DARK: "DARK",
  LIGHT: "LIGHT",
}

const themeSlice = createSlice({
  name: "theme",
  initialState: { theme: THEME.LIGHT },
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
