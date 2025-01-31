```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/some-url', {
      signal: controller.signal
    })
    .then(response => response.json())
    .then(data => {
      // Do something with data 
      console.log(data);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
    return () => controller.abort(); // Cleanup function added
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```