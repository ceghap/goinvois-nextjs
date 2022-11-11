import Head from 'next/head';

export default async function Profile() {
  return (
    <div>
      <Head>
        <title>Invoices</title>
      </Head>

      <main>
        <h1 className="font-semibold text-2xl">Invoices</h1>
      </main>
    </div>
  );
}
