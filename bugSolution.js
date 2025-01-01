```javascript
// pages/app/my-page.js
import {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';

export default function MyPage() {
  const {data, isLoading, error} = useQuery(['data'], () => fetch('/api/data').then(res => res.json()));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>My Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

```javascript
// pages/api/data.js

export default async function handler(req, res) {
  // Simulate an API call
  await new Promise(resolve => setTimeout(resolve, 500));
  res.status(200).json({ message: 'Data fetched successfully' });
}
```