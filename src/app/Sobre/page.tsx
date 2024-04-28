import React from "react"
import styles from "./page.module.css"

export default function Home() {

    return (
        <main className={styles.mainContent}>
            <h1>O que é o Observatório da educação infantil?</h1>
            <p>O observatório da educação infantil é uma plataforma online e gratuita de dados educacionais
                , permitindo a consulta de informações sobre a educação infantil do território de identidade 
                do litoral sul da Bahia em uma série histórica a partir de 2015, com diferentes níveis de detalhamento.
            </p>
            <h2>Objetivos</h2>
            <ul>
                <li>
                    <p>
                    Disponibilizar dados e indicadores educacionais de forma acessível, online, gratuita e com dados abertos;
                    </p>
                </li>
                <li>
                    <p>
                    Possibilitar por meio dos dados disponibilizados, produção de pesquisas e anáises para planejamento, avaliação 
                    e políticas públicas para a educação infantil;
                    </p>
                </li>
                <li>
                    <p>
                    Apresentar a comunidade acadêmica, professores, pesquisadores, estudantes, gestores públicos e outros membros 
                    da sociedade interessados, dados e indicadores educacionais da educação infantil - a partir de 20215;
                    </p>
                </li>
            </ul>
            <h2>Público-Alvo</h2>
            <ul>
                <li>
                    <p>
                    Gestores das secretarias municipais, estaduais da educação e do ministério da educação;
                    </p>
                </li>
                <li>
                    <p>
                    Membros dos conselhos municipais, estaduais, e nacional de educação;
                    </p>
                </li>
                <li>
                    <p>
                    Representantes de sindicatos de trabalhadores e profissionais da educação;
                    </p>
                </li>
                <li>
                    <p>
                    Comunidade escolar, incluindo estudantes, pais e profissionais da educação;
                    </p>
                </li>
                <li>
                    <p>
                    Movimentos sociais ligados à educação;
                    </p>
                </li>
                <li>
                    <p>
                    Organizações da sociedade civil interessadas em políticas educacionais e educação infantil;
                    </p>
                </li>
                <li>
                    <p>
                    Comunidade acadêmica, professores, pesquisadores, estudantes e funcionários técnico-administrativos;
                    </p>
                </li>
                <li>
                    <p>
                    Mídia e jonarlistas interessados em questões educacionais.
                    </p>
                </li>
            </ul>
        </main>
    )
}