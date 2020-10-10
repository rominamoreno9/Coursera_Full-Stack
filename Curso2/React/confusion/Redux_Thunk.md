# **Redux Thunk**

* Middleware that allows you to write action creators that return a function instead of an action
    * Can be used to delay the dispatch of an action, or
    * Dispatch only if a certain condition is met
* Inner function receives the dispatch() and getState() store methods

* Useful for complex synchronous logic
    * Multiple dispatches
    * Conditional dispatches
    * Simple Async logic

## Redux Saga    
* Uses ES6 generators to control pausable functions
    * Comples async logic
    * Ongoing “background thread” like processing behavior

## **Redux Resources**
* [Redux Middleware](https://redux.js.org/advanced/middleware)
* [Redux Thunk](https://github.com/gaearon/redux-thunk)
* [Redux Logger](https://github.com/evgenyrodionov/redux-logger)
* [React-redux-form](https://davidkpiano.github.io/react-redux-form/docs.html)
