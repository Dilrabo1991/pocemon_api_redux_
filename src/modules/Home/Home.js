import React from 'react';
import useConnect from './connect';

function Home() {
  const { data } = useConnect();

  return (
    <>
      
      {data ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Home;

