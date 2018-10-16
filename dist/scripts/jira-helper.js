(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createComponents = exports.createComponents = function createComponents(handleClick) {
  var issueCount = document.querySelector('.ghx-issue-count');

  var calcBtn = document.createElement("button");
  calcBtn.classList = "aui-button aui-button-primary";
  calcBtn.textContent = "Calcular pontos";
  calcBtn.style.marginLeft = "10px";
  calcBtn.addEventListener('click', function () {
    handleClick();
  });

  issueCount && issueCount.appendChild(calcBtn);
};

var showPoints = exports.showPoints = function showPoints(points) {
  var issueCount = document.querySelector('.ghx-issue-count');

  var hasFrontPoints = document.querySelector('#jira-helper__front');
  var hasBackPoints = document.querySelector('#jira-helper__back');

  hasFrontPoints && issueCount.removeChild(hasFrontPoints);
  hasBackPoints && issueCount.removeChild(hasBackPoints);

  var frontPoints = document.createElement("span");
  var backPoints = document.createElement("span");

  frontPoints.classList = "aui-badge ghx-statistic-badge";
  frontPoints.id = "jira-helper__front";
  frontPoints.style.marginLeft = "10px";
  backPoints.classList = "aui-badge ghx-statistic-badge";
  backPoints.id = "jira-helper__back";
  backPoints.style.marginLeft = "10px";

  frontPoints.textContent = "Front: " + points.front;
  backPoints.textContent = "Back: " + points.back;

  issueCount && issueCount.appendChild(frontPoints);
  issueCount && issueCount.appendChild(backPoints);
};

},{}],2:[function(require,module,exports){
'use strict';

var _components = require('./components');

var _pointsCalculator = require('./pointsCalculator');

var colors = [{
  type: 'back',
  color: 'cc0000'
}, {
  type: 'front',
  color: 'ff9933'
}];

console.log('-------------------------IHIB');

var handleLoad = function handleLoad() {
  console.log('-------------------------IHIA');
  var queryString = window.location.search;
  var isPlanningView = queryString.indexOf('view=planning') !== -1;

  if (isPlanningView) {
    console.log('-------------------------IHI');
    var handleClick = function handleClick() {
      var obj = (0, _pointsCalculator.pointsCalculator)(colors);
      (0, _components.showPoints)(obj);
    };

    (0, _components.createComponents)(handleClick);
  }
};

var docLoaded = setInterval(function () {
  console.log("-----------ihi", document.readyState);
  if (document.readyState !== "complete") return;
  clearInterval(docLoaded);
  handleLoad();
}, 30);

},{"./components":1,"./pointsCalculator":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var singleCalculator = function singleCalculator(color) {
  var tasksContainer = document.querySelector('.ghx-issues.js-issue-list.ghx-has-issues');

  var taskList = [].concat(_toConsumableArray(tasksContainer.children)).filter(function (item) {
    return item.querySelector('[style="background-color:#' + color + ';"]');
  });

  var taskValue = [].concat(_toConsumableArray(taskList)).reduce(function (acc, item) {
    var value = item.querySelector('[title="Story Points"]').innerHTML;
    return acc + ~~value;
  }, 0);

  return taskValue;
};

var pointsCalculator = exports.pointsCalculator = function pointsCalculator(colorArray) {
  var toColorsObject = function toColorsObject(acc, _ref) {
    var type = _ref.type,
        color = _ref.color;

    var points = singleCalculator(color);

    return _extends({}, acc, _defineProperty({}, type, points));
  };

  var colorsObject = colorArray.reduce(toColorsObject, {});

  return colorsObject;
};

},{}]},{},[2]);
