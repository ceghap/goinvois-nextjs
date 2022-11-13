import Head from 'next/head';

export default async function Invoice({ params }) {
  const { id: nodeId } = params;
  return (
    <div>
      <Head>
        <title>Invoice: {nodeId}</title>
      </Head>

      <main>
        <h1 className="font-semibold text-2xl">Invoice: {nodeId}</h1>
      </main>
    </div>
  );
}
