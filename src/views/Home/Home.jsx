import React from 'react';
import Header from '../../components/Header/Header';

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-slate-200 mt-8 ml-16 text-3xl">
          Welcome to Acme Inc. Employee Directory!
        </h1>
        <p className="text-slate-200 mt-8 ml-16 text-xl">
          Please sign in using the button above
        </p>
      </div>
    </>
  );
}
