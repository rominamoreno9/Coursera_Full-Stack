# **Redux**

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