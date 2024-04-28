import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

import fapesbImage from "../../assets/fapesb.jpeg";
import DCIEImage from "../../assets/DCIE.jpg";

export default function Home() {
    return (
        <main className={styles.mainContent}>
            <h1>Parceiros</h1>
            <div className={styles.box}>
                <div>
                    <h2>Financiamento</h2>
                    <Image src={fapesbImage} alt="Fapesb" width={400} height={300} />
                </div>
                <div>
                    <h2>Apoio</h2>
                    <Image src={DCIEImage} alt="DCIE" width={300} height={300} />
                </div>
            </div>
        </main>
    );
}
