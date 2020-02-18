import { configureStore, createSlice } from "@reduxjs/toolkit"

const themeSlice = createSlice({
  name: "theme",
  initialState: { theme: "dark" },
  reducers: {
    toggleTheme: state => ({
      theme: state.theme === "light" ? "dark" : "light",
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

export { mapStateToProps, mapDispatchToProps }
