import Head from 'next/head';

export default async function Profile() {
  return (
    <div>
      <main>
        <h1 className="font-semibold text-2xl">Profile</h1>
        {/* purposely made an error to test error boundary */}
      </main>
    </div>
  );
}
