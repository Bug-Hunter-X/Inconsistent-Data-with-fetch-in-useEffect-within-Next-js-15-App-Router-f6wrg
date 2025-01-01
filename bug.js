In Next.js 15, a particularly uncommon bug can arise when using the `app` directory's `fetch` calls within a React component's `useEffect` hook alongside server-side rendering (SSR). The issue stems from the asynchronous nature of `fetch` and the timing of SSR.  If the `fetch` call isn't properly handled, it might result in the component rendering with stale data or errors that are hard to track.  This problem is exacerbated when data fetching occurs within a component that's nested deep within the app's route hierarchy, making it difficult to pinpoint the root cause during development.

```javascript
// pages/app/my-page.js

import {useEffect, useState} from 'react';

export default function MyPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>My Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```