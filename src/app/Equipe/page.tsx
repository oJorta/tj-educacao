import React from "react"
import styles from "./page.module.css"

export default function Home() {

    return (
        <main className={styles.mainContent}>
            <div>
                <h2>
                    Coordenadores do OBDEI
                </h2>
                <p>
                    Drª Emilia Peixoto Vieira
                </p>
            </div>
            <div>
                <h2>
                    Pesquisadores do OBDEI
                </h2>
                <p>
                    Joedson Brito dos Santos
                </p>
            </div>
            <div>
                <h2>
                    Bolsistas
                </h2>
                <p>
                    Mestranda Célia Serafim Santana
                </p>
            </div>
            <div>
                <h2>
                    Financiamento
                </h2>
                <p>
                    Fundação de Amparo à Pesquisa do Estado da Bahia - FAPESB
                </p>
                <p>
                    Universidade Estadual de Santa Cruz - UESC
                </p>
            </div>
            <div>
                <h2>
                    Grupo de pesqusia/Cnpq
                </h2>
                <p>
                    Políticas Públicas e gestão educacional
                </p>
            </div>
            <div>
                <h2>
                    Linha de Pesquisa
                </h2>
                <p>
                    Políticas Públicas da Educação
                </p>
            </div>
        </main>
    )
}