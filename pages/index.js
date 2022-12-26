import Head from "next/head"
import Link from "next/link"
import TitleComponent from "../components/TitleComponent"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quarter 4 2022 Demo</title>
        <meta name="description" content="Quarter 4 2022 Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.title}>
          <TitleComponent />
        </header>
        <br></br>
        <div>
          <Link href="/users">Static Site Generation</Link>
        </div>
        <div>
          <Link href="/banks">Server Side Rendering</Link>
        </div>
        <div>
          <Link href="/profile">Incremental Static Regeneration</Link>
        </div>
        <div>
          <Link href="/random-apis">Client Side Rendering</Link>
        </div>
        <div>
          <Link href="/local-api">API Routes</Link>
        </div>
        <div>
          <Link href="/user/anupam">Dynamic API Routes</Link>
        </div>
        <div>
          <Link href="/redirect-permanent">Redirect Permanent</Link>
        </div>
        <div>
          <Link href="/redirect-temporary">Redirect Temporary</Link>
        </div>
      </main>
    </div>
  )
}
