import Head from 'next/head';

export default async function Profile() {
  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>

      <main>
        <h1 className="font-semibold text-2xl">Profile</h1>
      </main>
    </div>
  );
}