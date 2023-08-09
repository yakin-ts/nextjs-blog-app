import Head from "next/head";
import Link from "next/link";
import styles from './Header.module.css'

export default function Header() {
    return (
        <Head>
            <title>Next.js App</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <nav className={styles.navbar}>
                <Link href="/" ><a className={styles.blog_logo}>Blogger</a></Link>
                <Link  href='/add-blog'><a  className={styles.blog_add}>Add Blog</a></Link>
            </nav>
        </Head>
    );
}
