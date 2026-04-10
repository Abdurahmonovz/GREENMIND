import React from 'react'
import Link from 'next/link';

export default function page() {
  return (
    <div className='p-3 mt-3'>
      <h1 className='text-2xl font-bold text-center'>Bu yerda 🛠️Texnik xizmatlar olib borilmoqda </h1>
        <Link className='text-white rounded-lg  hover:underline bg-blue-600 hover:bg-blue-700 px-2 py-6 font-bold ' href="/contacts">Contacts bo'limiga o'tish 👉</Link>
    </div>
  )
}
