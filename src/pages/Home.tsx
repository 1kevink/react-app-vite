import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch('https://hh.gosstroyportal.by/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: undefined,
    }).then((response) => {
      console.log(response);
    });
  });
  return <h1>Stroika</h1>;
}
