import React from 'react';

export default function Header() {
  const font = 'text-white text-center text-3xl mt-8 font-mono';

  return (
    <>
      <div className={font}>Acme Inc</div>
      <div className="flex justify-center items-center mt-8">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign In
        </button>
      </div>
    </>
  );
}
