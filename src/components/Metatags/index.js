import Head from "next/head";
import db from "../../../db.json";

const title = 'Quiz da Ciência';
const description = 'Um quiz de ciência criadao durante a Segunda Imersão React da Alura';
const url = 'https://science-quiz.bernardohaab.vercel.app/';

export default function Metatags() {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" type="image/svg" href="/images/planeta.svg" sizes="16x16"/>
            <link rel="icon" type="image/svg" href="/images/planeta.svg" sizes="32x32"/>
            <link rel="icon" type="image/x-icon" href="/images/planeta.ico"/>
            <link rel="shortcut icon" type="image/x-icon" href="/images/planeta.ico"/>
            <meta name="title" content={title}/>
            <meta name="description" content={description}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={url}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={db.bg}/>
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={url}/>
            <meta property="twitter:title" content={title}/>
            <meta property="twitter:description" content={description}/>
            <meta property="twitter:image" content={db.bg}/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
        </Head>
    )
}