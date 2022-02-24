import React from 'react';
import Header from '../../components/Header/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <h1 className="text-slate-200 mt-8 ml-16 text-3xl">
          Welcome to Acme Inc. Employee Directory!
        </h1>
      </div>
    </>
  );
}
