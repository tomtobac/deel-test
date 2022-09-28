# Questions

## 1. What is the difference between Component and PureComponent? give an example where it might break my app.

A PureComponent does a shallow comparison to decide if the component has to be updated or not, meanwhile, a simple Component doesn't do this shallow comparison (but we can implement it)

As example, not very sure, it could something like passing down a prop like a object which reference never changes but their properties does

## 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

I believe it is because `ShouldComponentUpdate` doesn't have access to the context state before and after so it can not compare changes.

## 3. Describe 3 ways to pass information from a component to its PARENT.

- Use props, with a setter function.
- By React.Context, Redux, or any global state management.
- With a ref to the parent component and passing it down to a child.

## 4. Give 2 ways to prevent components from re-rendering.

- Class component can extend PureComponent or we can implement `shouldComponentUpdate`
- Keep the same references and must be primitive values for the comparison

## 5. What is a fragment and why do we need it? Give an example where it might break my app.

Fragments are used to wrap a list of components if a parent can not be provided or is not needed. React requires to have a parent to render the childs.

An example:

```jsx
	React.render(<h1>This is going to crash</h1><p>Pretty sure, 100%</p>);
```

## 6. Give 3 examples of the HOC pattern.

1. Adding Theme property

```jsx
const withTheme = (Component) => <Component theme={theme}>;
```

2. Wrapping it React.Context

```jsx
const withContext = (Component) => <MyContext.Provider value={{ key: value }}><Component></MyContext.Provider>

```

3. to log when the component has been mounted

```jsx
const logMounted = (Component) => {
	useEffect(() => {
		console.log('Component has been mounted');
	}, []);
	return <Component>;
}
```

## 7. what's the difference in handling exceptions in promises, callbacks and async...await.

- For callbacks usually, the first argument is an error if it is `undefined` it means that it went well.
- In promises, we need to `.catch` every promise
- With `async..await` we can group all the promises and catch them together with `try..catch`

## 8. How many arguments does setState take and why is it async.

The first argument is the value we want to change or it can be a function in which the first parameter is the current state and it returns a new state. The second parameter is a callback function which will be executed whenever the state is updated. This happens because React handles internally when a component needs to be updated and sometimes it does in batches.

## 9. List the steps needed to migrate a Class to Function Component.

- Replace `class` for a function.
- Change this.state to `useState`
- Remove all references to `this`
- Remove constructor and `bind` functions.
- Change lifecycle methods to `useEffect`.
- Remove `render` and return the JSX from the function

## 10. List a few ways styles can be used with components.

- Import them and use them normally as `className`
- CSS modules
- Styled Components

## 11. How to render an HTML string coming from the server.

One possible solution could be, 👇, but you should escape the `html`, otherwise, you could inject XSS in your site.

```tsx
<div dangerouslySetInnerHTML={{ __html: '<h1👋 XSS</h1>' }} />
```
