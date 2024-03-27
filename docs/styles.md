# Styles Documentation

## SASS/SCSS file structure

- abstracts
  - \_variables.scss
- base
  - \_base.scss
  - \_fonts.scss
  - \_typography.scss
- layout
  - \_header.scss
  - \_result.scss
  - \_search-app.scss
- themes
  - \_\_theme-dark.scss
  - \_\_theme-default.scss
  - \_\_theme-light.scss
- vendors
  - \_normalize.scss
- main.scss

## File descriptions

- abstracts
  - **\_variables.scss** - File which contains all the variables used across this project
- base
  - **\_base.scss** - File which contains basic styling for whole HTML document, body and main section
  - **\_fonts.scss** - File which contains import of font used across this project
  - **\_typography.scss** - File which contains all the styling about typography for all elements (font-size, font-weight)
- layout
  - **\_header.scss** - File which contains layout styling for `.header` class (margins, paddings, Flexbox/CSS Grid)
  - **\_search-app.scss** - File which contains layout styling for `.search-app` class
  - **\_result.scss** - File which contains layout styling for `.result` class
- themes
  - **\_theme-default.scss** - File which contains color styling which is shared across both light and dark theme
  - **\_theme-light.scss** - File which contains color styling for light mode
  - **\_theme-dark.scss** - File which contains color styling for dark mode
- vendors

  - **\_normalize.scss** - Normalize.css file from HTML5 Boilerplate

- **\_main.scss** - File which imports all the files described above.

## Imports in order

1. variables
2. normalize
3. base
4. fonts
5. typography
6. header
7. search-bar
8. result
9. theme-default
10. theme-light
11. theme-dark
