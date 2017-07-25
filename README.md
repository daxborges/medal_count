# Medal Count
Shows Olympic medals by country

## Using the widget
```
<script type="text/javascript" src="/path/to/mc-medal-count.js"></script>
<script type="text/javascript">
  window.McMedalCount.init();
</script>
```
OR with options
```
<script type="text/javascript" src="/path/to/mc-medal-count.js"></script>
<script type="text/javascript">
  window.McMedalCount.init('mcMedalCount','total');
</script>
```

## Quick start for working example
```
npm install -g serve
serve -s saved_build
```
to test option functionality edit `saved_build/index.html` after running above commands

## Run Tests
```
npm test a
```

## Library Choices
I chose to include: `react`, `prop-types`, `react-dom`, `redux`, `react-redux`, `redux-thunk` and `lodash`

These are all reasonable choices for a large scale SPA but for a widget they are definitely overkill.
Since this is an exercise I chose to include them for both readability and to help showcase how I would build a larger scale app.

If this widget were meant to be used in a situation where size was a major concern I would opt to
avoid all of the libraries used especially the largest - `react`. However, if size isn't a major concern readability and maintainability
should always be favored. 

- prop-types
  -  typchecking for react props
- react-dom
  - easy rendering of components
- redux
  - state management and data flow
- react-redux
  - makes life easy integrating react and redux
- redux-thunk
  - makes it so we can dispatch async actions (AJAX calls)
- lodash
  - FP utility functions

