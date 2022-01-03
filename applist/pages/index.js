import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function Home(){
  return(
    <>    
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>lorem ipsum dolor sit am lorem ipsum dolor a, sed diam nonumy eirmod tempor about async lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem</p>
        <p className={styles.text}>lorem ipsum dolor sit am lorem ipsum dolor a, sed diam nonumy eirmod tempor about async lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>        
      </div>
    </> 
  )
}

