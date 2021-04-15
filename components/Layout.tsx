import styles from "../styles/Layout.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Layout({ children, title = "This is the default title" }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <a className={styles.logoLink}>
              <img src="/logo.png" className={styles.logoImg} />
            </a>
          </Link>
        </div>

        <nav>
          <Link href="/gry">
            <a>Gry</a>
          </Link>
          <Link href="/aplikacje">
            <a>Aplikacje</a>
          </Link>
          <Link href="/cv">
            <a>CV</a>
          </Link>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
