webpackHotUpdate(0,{

/***/ 1117:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(452);\n\nvar _reselect = __webpack_require__(998);\n\nvar _blocks = __webpack_require__(964);\n\nvar _modal = __webpack_require__(987);\n\nvar _component = __webpack_require__(1118);\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar currentModalSelector = function currentModalSelector(state) {\n  return state.modal.current;\n};\nvar isVisibleSelector = (0, _reselect.createSelector)(currentModalSelector, function (currentModal) {\n  return currentModal === _modal.ADD_BLOCK;\n});\n\nvar selector = (0, _reselect.createStructuredSelector)({\n  isVisible: isVisibleSelector\n});\n\nvar actions = {\n  onCancel: _blocks.cancelAddingBlock\n};\n\nexports.default = (0, _reactRedux.connect)(selector, actions)(_component2.default);//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0b3JBcHAvTEJsb2NrQWRkTW9kYWwvaW5kZXguanM/ZDEzMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLElBQU0sdUJBQXVCLFNBQXZCLG9CQUF1QjtTQUFTLE1BQU0sS0FBTixDQUFZLE9BQVo7Q0FBVDtBQUM3QixJQUFNLG9CQUFvQiw4QkFDeEIsb0JBRHdCLEVBRXhCO1NBQWdCO0NBQWhCLENBRkk7O0FBS04sSUFBTSxXQUFXLHdDQUF5QjtBQUN4QyxhQUFXLGlCQUFYO0NBRGUsQ0FBWDs7QUFJTixJQUFNLFVBQVU7QUFDZCxxQ0FEYztDQUFWOztrQkFJUyx5QkFBUSxRQUFSLEVBQWtCLE9BQWxCIiwiZmlsZSI6IjExMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcblxuaW1wb3J0IHsgY2FuY2VsQWRkaW5nQmxvY2sgfSBmcm9tICdhY3Rpb25zL2Jsb2Nrcyc7XG5cbmltcG9ydCB7IEFERF9CTE9DSyB9IGZyb20gJ3JlZHVjZXJzL21vZGFsJztcblxuaW1wb3J0IGNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmNvbnN0IGN1cnJlbnRNb2RhbFNlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUubW9kYWwuY3VycmVudDtcbmNvbnN0IGlzVmlzaWJsZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIGN1cnJlbnRNb2RhbFNlbGVjdG9yLFxuICBjdXJyZW50TW9kYWwgPT4gY3VycmVudE1vZGFsID09PSBBRERfQkxPQ0tcbik7XG5cbmNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHtcbiAgaXNWaXNpYmxlOiBpc1Zpc2libGVTZWxlY3Rvcixcbn0pO1xuXG5jb25zdCBhY3Rpb25zID0ge1xuICBvbkNhbmNlbDogY2FuY2VsQWRkaW5nQmxvY2ssXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdG9yLCBhY3Rpb25zKShjb21wb25lbnQpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9FZGl0b3JBcHAvTEJsb2NrQWRkTW9kYWwvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 1118:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(295);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _dialog = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"material-ui/lib/dialog\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _dialog2 = _interopRequireDefault(_dialog);\n\nvar _LBlockAddForm = __webpack_require__(1124);\n\nvar _LBlockAddForm2 = _interopRequireDefault(_LBlockAddForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import Modal from 'components/ui-elements/Modal';\n\n\nvar LBlockAddModal = function LBlockAddModal(_ref) {\n  var isVisible = _ref.isVisible;\n  var onCancel = _ref.onCancel;\n  return _react2.default.createElement(\n    _dialog2.default,\n    { title: 'Выберите блок' },\n    _react2.default.createElement(_LBlockAddForm2.default, null)\n  );\n};\n\n//const LBlockAddModal = ({ isVisible, onCancel }) => (\n//<Modal show={isVisible}>\n//<Modal.Header closeButton onHide={onCancel}>\n//<Modal.Title>Выберите блок для вставки</Modal.Title>\n//</Modal.Header>\n//<Modal.Body>\n//<LBlockAddForm />\n//</Modal.Body>\n//</Modal>\n//);\n\nLBlockAddModal.propTypes = {\n  isVisible: _react.PropTypes.bool.isRequired,\n\n  onCancel: _react.PropTypes.func.isRequired\n};\n\nexports.default = LBlockAddModal;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0b3JBcHAvTEJsb2NrQWRkTW9kYWwvY29tcG9uZW50LmpzeD84ZDMxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsSUFBTSxpQkFBaUIsU0FBakIsY0FBaUI7TUFBRztNQUFXO1NBQ3JDOztNQUFRLE9BQU0sZUFBTixFQUFSO0lBQ0UsNERBREY7O0NBRHVCOzs7Ozs7Ozs7Ozs7O0FBaUJ2QixlQUFlLFNBQWYsR0FBMkI7QUFDekIsYUFBVyxpQkFBVSxJQUFWLENBQWUsVUFBZjs7QUFFWCxZQUFVLGlCQUFVLElBQVYsQ0FBZSxVQUFmO0NBSFo7O2tCQU1lIiwiZmlsZSI6IjExMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuXG4vLyBpbXBvcnQgTW9kYWwgZnJvbSAnY29tcG9uZW50cy91aS1lbGVtZW50cy9Nb2RhbCc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ21hdGVyaWFsLXVpL2xpYi9kaWFsb2cnO1xuXG5pbXBvcnQgTEJsb2NrQWRkRm9ybSBmcm9tICcuL0xCbG9ja0FkZEZvcm0nO1xuXG5jb25zdCBMQmxvY2tBZGRNb2RhbCA9ICh7IGlzVmlzaWJsZSwgb25DYW5jZWwgfSkgPT4gKFxuPERpYWxvZyB0aXRsZT1cItCS0YvQsdC10YDQuNGC0LUg0LHQu9C+0LpcIj5cbiAgPExCbG9ja0FkZEZvcm0gLz5cbjwvRGlhbG9nPlxuKTtcblxuLy9jb25zdCBMQmxvY2tBZGRNb2RhbCA9ICh7IGlzVmlzaWJsZSwgb25DYW5jZWwgfSkgPT4gKFxuICAvLzxNb2RhbCBzaG93PXtpc1Zpc2libGV9PlxuICAgIC8vPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbiBvbkhpZGU9e29uQ2FuY2VsfT5cbiAgICAgIC8vPE1vZGFsLlRpdGxlPtCS0YvQsdC10YDQuNGC0LUg0LHQu9C+0Log0LTQu9GPINCy0YHRgtCw0LLQutC4PC9Nb2RhbC5UaXRsZT5cbiAgICAvLzwvTW9kYWwuSGVhZGVyPlxuICAgIC8vPE1vZGFsLkJvZHk+XG4gICAgICAvLzxMQmxvY2tBZGRGb3JtIC8+XG4gICAgLy88L01vZGFsLkJvZHk+XG4gIC8vPC9Nb2RhbD5cbi8vKTtcblxuTEJsb2NrQWRkTW9kYWwucHJvcFR5cGVzID0ge1xuICBpc1Zpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMQmxvY2tBZGRNb2RhbDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRWRpdG9yQXBwL0xCbG9ja0FkZE1vZGFsL2NvbXBvbmVudC5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 1124:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _component = __webpack_require__(1125);\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _component2.default;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxMTI0LmpzIiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 1125:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(295);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _map = __webpack_require__(758);\n\nvar _map2 = _interopRequireDefault(_map);\n\nvar _fullViewsExamples = __webpack_require__(689);\n\nvar _LBlockAddFormItem = __webpack_require__(1126);\n\nvar _LBlockAddFormItem2 = _interopRequireDefault(_LBlockAddFormItem);\n\n__webpack_require__(1130);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar LBlockAddForm = function LBlockAddForm() {\n  return _react2.default.createElement(\n    'div',\n    { className: 'LBlockAddForm' },\n    (0, _map2.default)(_fullViewsExamples.FULL_VIEWS_EXAMPLES_SECTIONS, function (example, index) {\n      return _react2.default.createElement(_LBlockAddFormItem2.default, {\n        example: example,\n        key: index\n      });\n    })\n  );\n};\n\nexports.default = LBlockAddForm;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0b3JBcHAvTEJsb2NrQWRkTW9kYWwvTEJsb2NrQWRkRm9ybS9jb21wb25lbnQuanN4PzQ0NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsSUFBTSxnQkFBZ0IsU0FBaEIsYUFBZ0I7U0FDcEI7O01BQUssV0FBVSxlQUFWLEVBQUw7SUFDRyxvRUFBa0MsVUFBQyxPQUFELEVBQVUsS0FBVjthQUNsQztBQUNFLGlCQUFTLE9BQVQ7QUFDQSxhQUFLLEtBQUw7T0FGRjtLQURrQyxDQURyQzs7Q0FEb0I7O2tCQVdQIiwiZmlsZSI6IjExMjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnO1xuXG5pbXBvcnQgeyBGVUxMX1ZJRVdTX0VYQU1QTEVTX1NFQ1RJT05TIH0gZnJvbSAnY29uc3RhbnRzL2Z1bGxWaWV3c0V4YW1wbGVzJztcbmltcG9ydCBMQmxvY2tBZGRGb3JtSXRlbSBmcm9tICcuL0xCbG9ja0FkZEZvcm1JdGVtJztcblxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmNvbnN0IExCbG9ja0FkZEZvcm0gPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiTEJsb2NrQWRkRm9ybVwiPlxuICAgIHttYXAoRlVMTF9WSUVXU19FWEFNUExFU19TRUNUSU9OUywgKGV4YW1wbGUsIGluZGV4KSA9PlxuICAgICA8TEJsb2NrQWRkRm9ybUl0ZW1cbiAgICAgICBleGFtcGxlPXtleGFtcGxlfVxuICAgICAgIGtleT17aW5kZXh9XG4gICAgIC8+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMQmxvY2tBZGRGb3JtO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9FZGl0b3JBcHAvTEJsb2NrQWRkTW9kYWwvTEJsb2NrQWRkRm9ybS9jb21wb25lbnQuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 1126:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(452);\n\nvar _blocks = __webpack_require__(964);\n\nvar _component = __webpack_require__(1127);\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar selector = function selector() {\n  return {};\n};\n\nvar actions = {\n  onAdd: _blocks.submitAddingBlock\n};\n\nexports.default = (0, _reactRedux.connect)(selector, actions)(_component2.default);//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0b3JBcHAvTEJsb2NrQWRkTW9kYWwvTEJsb2NrQWRkRm9ybS9MQmxvY2tBZGRGb3JtSXRlbS9pbmRleC5qcz8wN2M3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFNLFdBQVcsU0FBWCxRQUFXO1NBQU87Q0FBUDs7QUFFakIsSUFBTSxVQUFVO0FBQ2Qsa0NBRGM7Q0FBVjs7a0JBSVMseUJBQVEsUUFBUixFQUFrQixPQUFsQiIsImZpbGUiOiIxMTI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHN1Ym1pdEFkZGluZ0Jsb2NrIH0gZnJvbSAnYWN0aW9ucy9ibG9ja3MnO1xuXG5pbXBvcnQgY29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuY29uc3Qgc2VsZWN0b3IgPSAoKSA9PiAoe30pO1xuXG5jb25zdCBhY3Rpb25zID0ge1xuICBvbkFkZDogc3VibWl0QWRkaW5nQmxvY2ssXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdG9yLCBhY3Rpb25zKShjb21wb25lbnQpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9FZGl0b3JBcHAvTEJsb2NrQWRkTW9kYWwvTEJsb2NrQWRkRm9ybS9MQmxvY2tBZGRGb3JtSXRlbS9pbmRleC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 1127:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n__webpack_require__(1128);\n\nvar _classnames = __webpack_require__(777);\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nvar _react = __webpack_require__(295);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar DEFAULT_ICON = 'ti-layout-width-default-alt';\n\nvar LBlockAddFormItem = function LBlockAddFormItem(_ref) {\n  var example = _ref.example;\n  var onAdd = _ref.onAdd;\n  var title = example.title;\n  var viewName = example.viewName;\n\n  var onClick = function onClick() {\n    return onAdd(example);\n  };\n  var classNames = (0, _classnames2.default)(example.icon || DEFAULT_ICON, 'LBlockAddFormItem-icon');\n\n  return _react2.default.createElement(\n    'div',\n    { className: 'LBlockAddFormItem', onClick: onClick },\n    _react2.default.createElement(\n      'h5',\n      { className: 'LBlockAddFormItem-title' },\n      _react2.default.createElement('span', { className: classNames }),\n      _react2.default.createElement(\n        'span',\n        null,\n        title || viewName\n      )\n    )\n  );\n};\n\nvar ViewExamplePropTypes = {\n  viewName: _react.PropTypes.string.isRequired,\n  title: _react.PropTypes.string,\n  description: _react.PropTypes.string,\n  content: _react.PropTypes.object.isRequired,\n  uuid: _react.PropTypes.string.isRequired\n};\n\nLBlockAddFormItem.propTypes = {\n  onAdd: _react.PropTypes.func.isRequired,\n  example: _react.PropTypes.shape(ViewExamplePropTypes).isRequired\n};\n\nexports.default = LBlockAddFormItem;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0b3JBcHAvTEJsb2NrQWRkTW9kYWwvTEJsb2NrQWRkRm9ybS9MQmxvY2tBZGRGb3JtSXRlbS9jb21wb25lbnQuanN4PzQwMzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSxlQUFlLDZCQUFmOztBQUVOLElBQU0sb0JBQW9CLFNBQXBCLGlCQUFvQixPQUF3QjtNQUFyQix1QkFBcUI7TUFBWixtQkFBWTtNQUN4QyxRQUFvQixRQUFwQixNQUR3QztNQUNqQyxXQUFhLFFBQWIsU0FEaUM7O0FBRWhELE1BQU0sVUFBVSxTQUFWLE9BQVU7V0FBTSxNQUFNLE9BQU47R0FBTixDQUZnQztBQUdoRCxNQUFNLGFBQWEsMEJBQVcsUUFBUSxJQUFSLElBQWdCLFlBQWhCLEVBQThCLHdCQUF6QyxDQUFiLENBSDBDOztBQUtoRCxTQUNFOztNQUFLLFdBQVUsbUJBQVYsRUFBOEIsU0FBUyxPQUFULEVBQW5DO0lBQ0U7O1FBQUksV0FBVSx5QkFBVixFQUFKO01BQ0Usd0NBQU0sV0FBVyxVQUFYLEVBQU4sQ0FERjtNQUVFOzs7UUFBTyxTQUFTLFFBQVQ7T0FGVDtLQURGO0dBREYsQ0FMZ0Q7Q0FBeEI7O0FBZTFCLElBQU0sdUJBQXVCO0FBQzNCLFlBQVUsaUJBQVUsTUFBVixDQUFpQixVQUFqQjtBQUNWLFNBQU8saUJBQVUsTUFBVjtBQUNQLGVBQWEsaUJBQVUsTUFBVjtBQUNiLFdBQVMsaUJBQVUsTUFBVixDQUFpQixVQUFqQjtBQUNULFFBQU0saUJBQVUsTUFBVixDQUFpQixVQUFqQjtDQUxGOztBQVFOLGtCQUFrQixTQUFsQixHQUE4QjtBQUM1QixTQUFPLGlCQUFVLElBQVYsQ0FBZSxVQUFmO0FBQ1AsV0FBUyxpQkFBVSxLQUFWLENBQWdCLG9CQUFoQixFQUFzQyxVQUF0QztDQUZYOztrQkFLZSIsImZpbGUiOiIxMTI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL0xCbG9ja0FkZEZvcm1JdGVtLmNzcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgREVGQVVMVF9JQ09OID0gJ3RpLWxheW91dC13aWR0aC1kZWZhdWx0LWFsdCc7XG5cbmNvbnN0IExCbG9ja0FkZEZvcm1JdGVtID0gKHsgZXhhbXBsZSwgb25BZGQgfSkgPT4ge1xuICBjb25zdCB7IHRpdGxlLCB2aWV3TmFtZSB9ID0gZXhhbXBsZTtcbiAgY29uc3Qgb25DbGljayA9ICgpID0+IG9uQWRkKGV4YW1wbGUpO1xuICBjb25zdCBjbGFzc05hbWVzID0gY2xhc3NuYW1lcyhleGFtcGxlLmljb24gfHwgREVGQVVMVF9JQ09OLCAnTEJsb2NrQWRkRm9ybUl0ZW0taWNvbicpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJMQmxvY2tBZGRGb3JtSXRlbVwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPGg1IGNsYXNzTmFtZT1cIkxCbG9ja0FkZEZvcm1JdGVtLXRpdGxlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gLz5cbiAgICAgICAgPHNwYW4+e3RpdGxlIHx8IHZpZXdOYW1lfTwvc3Bhbj5cbiAgICAgIDwvaDU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBWaWV3RXhhbXBsZVByb3BUeXBlcyA9IHtcbiAgdmlld05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb250ZW50OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHV1aWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbkxCbG9ja0FkZEZvcm1JdGVtLnByb3BUeXBlcyA9IHtcbiAgb25BZGQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGV4YW1wbGU6IFByb3BUeXBlcy5zaGFwZShWaWV3RXhhbXBsZVByb3BUeXBlcykuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExCbG9ja0FkZEZvcm1JdGVtO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9FZGl0b3JBcHAvTEJsb2NrQWRkTW9kYWwvTEJsb2NrQWRkRm9ybS9MQmxvY2tBZGRGb3JtSXRlbS9jb21wb25lbnQuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 1128:
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(1129);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(551)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(true) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(1129, function() {\n\t\t\tvar newContent = __webpack_require__(1129);\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0b3JBcHAvTEJsb2NrQWRkTW9kYWwvTEJsb2NrQWRkRm9ybS9MQmxvY2tBZGRGb3JtSXRlbS9MQmxvY2tBZGRGb3JtSXRlbS5jc3M/NTQzYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUErRjtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMiLCJmaWxlIjoiMTEyOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vTEJsb2NrQWRkRm9ybUl0ZW0uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuL0xCbG9ja0FkZEZvcm1JdGVtLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuL0xCbG9ja0FkZEZvcm1JdGVtLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0VkaXRvckFwcC9MQmxvY2tBZGRNb2RhbC9MQmxvY2tBZGRGb3JtL0xCbG9ja0FkZEZvcm1JdGVtL0xCbG9ja0FkZEZvcm1JdGVtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDExMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 1129:
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(550)();\n// imports\n\n\n// module\nexports.push([module.id, \".LBlockAddFormItem {\\n  cursor: pointer;\\n  margin-bottom: 20px;\\n  background-color: #f0f0f0;\\n}\\n.LBlockAddFormItem:hover {\\n  background-color: #ddd;\\n}\\n.LBlockAddFormItem-title {\\n  padding: 15px 20px;\\n  font-size: 18px;\\n  line-height: 48px;\\n}\\n.LBlockAddFormItem-icon {\\n  margin-right: 20px;\\n  font-size: 32px;\\n  vertical-align: middle;\\n}\\n.LBlockAddFormItem-content {\\n  padding: 10px 0;\\n}\\n\\n\", \"\"]);\n\n// exports\n//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0b3JBcHAvTEJsb2NrQWRkTW9kYWwvTEJsb2NrQWRkRm9ybS9MQmxvY2tBZGRGb3JtSXRlbS9MQmxvY2tBZGRGb3JtSXRlbS5jc3M/NmNhNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLDhDQUE4QyxvQkFBb0Isd0JBQXdCLDhCQUE4QixHQUFHLDRCQUE0QiwyQkFBMkIsR0FBRyw0QkFBNEIsdUJBQXVCLG9CQUFvQixzQkFBc0IsR0FBRywyQkFBMkIsdUJBQXVCLG9CQUFvQiwyQkFBMkIsR0FBRyw4QkFBOEIsb0JBQW9CLEdBQUc7O0FBRTlhIiwiZmlsZSI6IjExMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5MQmxvY2tBZGRGb3JtSXRlbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG59XFxuLkxCbG9ja0FkZEZvcm1JdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxufVxcbi5MQmxvY2tBZGRGb3JtSXRlbS10aXRsZSB7XFxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogNDhweDtcXG59XFxuLkxCbG9ja0FkZEZvcm1JdGVtLWljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLkxCbG9ja0FkZEZvcm1JdGVtLWNvbnRlbnQge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9wb3N0Y3NzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL0VkaXRvckFwcC9MQmxvY2tBZGRNb2RhbC9MQmxvY2tBZGRGb3JtL0xCbG9ja0FkZEZvcm1JdGVtL0xCbG9ja0FkZEZvcm1JdGVtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDExMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 1130:
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(1131);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(551)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(true) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(1131, function() {\n\t\t\tvar newContent = __webpack_require__(1131);\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0b3JBcHAvTEJsb2NrQWRkTW9kYWwvTEJsb2NrQWRkRm9ybS9pbmRleC5jc3M/YjU0OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUE0RjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMiLCJmaWxlIjoiMTEzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0VkaXRvckFwcC9MQmxvY2tBZGRNb2RhbC9MQmxvY2tBZGRGb3JtL2luZGV4LmNzc1xuICoqIG1vZHVsZSBpZCA9IDExMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 1131:
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(550)();\n// imports\n\n\n// module\nexports.push([module.id, \"\", \"\"]);\n\n// exports\n//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0b3JBcHAvTEJsb2NrQWRkTW9kYWwvTEJsb2NrQWRkRm9ybS9pbmRleC5jc3M/NzhlMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBIiwiZmlsZSI6IjExMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Bvc3Rjc3MtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvRWRpdG9yQXBwL0xCbG9ja0FkZE1vZGFsL0xCbG9ja0FkZEZvcm0vaW5kZXguY3NzXG4gKiogbW9kdWxlIGlkID0gMTEzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})