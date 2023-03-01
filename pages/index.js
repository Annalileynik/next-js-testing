import Head from 'next/head';
import Counter from "./Counter";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Counter</title>

      </Head>

      <main>
        <Counter/>
      </main>

    </div>
  )
}
