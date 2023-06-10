import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>tRPC Frontend Boilerplate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <img src="./heisenberg.png" alt="heisenberg" width={85} />
      <div>tRPC Frontend Boilerplate</div>
    </>
  );
}
