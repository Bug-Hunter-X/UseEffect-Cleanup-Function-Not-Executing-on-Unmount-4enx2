```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Component mounted');
    return () => {
      // Cleanup function - This will run when component unmounts
      console.log('Component unmounting');
    };
  }, []);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

// Solution:  Ensure the component is correctly rendered and unmounted. 
// Check for errors in the component that might prevent unmounting. 
// Verify that the useEffect dependency array is correctly defined.   
// Consider using a library for debugging memory leaks in React applications. 
```