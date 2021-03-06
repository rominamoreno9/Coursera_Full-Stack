# **Redux Actions**

## Action Creators
* Function that create actions
* Returns the action object
* The object can be passed to the store through dispatch()

## Action and Reducers
* Reducers take the previous state and action
* Make a copy and modify the copy before returning it
* Actions handled through a switch statement switching on the action type
* Returns the previous state in the default case

## Split reducer
* combineReducers


## **Flux Architecture**

Discussion of problems with MVC - Link in documentation.

**Uniderectional Data Flow**

Action -> Dispatcher -> Store -> View

* If the View wants to change de Store:
    View -> Action -> Dispatcher -> Store

* It always follows the same flow


## **React Resources**
* [Redux](https://redux.js.org/)
* [Redux on Github](https://github.com/reactjs/redux)
* [React and Redux](https://redux.js.org/basics/usage-with-react)
* [Redux Basics Documentation](https://redux.js.org/basics)
* [The Flux Architecture](https://facebook.github.io/flux/)


## **Other Resources**

* [Redux Tutorials](https://github.com/markerikson/react-redux-links/blob/master/redux-tutorials.md)
* [Flux Architecture In Depth Overview](https://facebook.github.io/flux/docs/in-depth-overview.html#content)


## **React Redux Forms**

* Enables you to mantain persistence accross mounting/unmounting

* Performs form validation

    ## Local Form 

    * When you dont need persitence accross mounting/unmounting
    * Performs form validation


## React Resources
* [React Redux Form Documentation](https://davidkpiano.github.io/react-redux-form/docs.html)

## Other Resources
* [The boring React Redux forms](https://medium.com/@steida/the-boring-react-redux-forms-a15ee8a6b52b)
* [How to populate react-redux-form with dynamic default values](https://swizec.com/blog/populate-react-redux-form-dynamic-default-values/swizec/8158)
* [Should you store your form state in Redux?](https://goshakkk.name/should-i-put-form-state-into-redux/)

## Redux Resources
* [Redux Actions](https://redux.js.org/basics/actions)
* [Redux Reducers](https://redux.js.org/basics/reducers)
* [Redux Usage with React](https://redux.js.org/basics/usage-with-react)