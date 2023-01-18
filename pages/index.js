
import Image from "next/image";
import Link from "next/link";
import Blackout from "../components/blackout";
import Headt from "../components/Head";
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <Blackout>
      <div className={styles.header}>
        <Headt></Headt>
        <Image src="/branding/logo.png" width={360} height={360} alt="logo" />
        <h1>Sorry were down for maintenance.</h1>
        <h2>Well be back shortly.</h2>
        <Link className={styles.button} href='/legal/imprint'><h1>imprint</h1></Link>
      </div>
    </Blackout>
  );
}
