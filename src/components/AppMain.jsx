import { useState } from 'react'

export default function AppMain() {
    const [isActive, setIsActive] = useState(null)

    const languages = [
        {
            id: 1,
            title: "HTML",
            description: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini.",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png"
        },
        {
            id: 2,
            title: "CSS",
            description: "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla il layout, i colori, i caratteri e l'aspetto complessivo di una pagina web.",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/960px-CSS3_logo_and_wordmark.svg.png"
        },
        {
            id: 3,
            title: "JavaScript",
            description: "JavaScript è un linguaggio di programmazione dinamico utilizzato per lo sviluppo web, che consente contenuti interattivi come grafici animati, pulsanti cliccabili e altre funzionalità dinamiche sui siti web.",
            image:"https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png"
        },
        {
            id: 4,
            title: "Node.js",
            description: "Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo agli sviluppatori di usare lo stesso linguaggio sia sul client che sul server.",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
        },
        {
            id: 5,
            title: "Express",
            description: "Express è un framework per applicazioni web minimalista e veloce per Node.js. Fornisce strumenti robusti per creare applicazioni web e API e semplifica la gestione delle rotte e delle richieste.",
            image:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
        },
        {
            id: 6,
            title: "ReactJS",
            description: "ReactJS è una libreria JavaScript per costruire interfacce utente, in particolare applicazioni a pagina singola. Consente agli sviluppatori di creare componenti UI riutilizzabili e di gestire efficacemente lo stato dell'applicazione.",
            image:"https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
        }
    ];

    return (
        <div className="container pt-5">
            <div className="d-flex gap-3">

                {languages.map(item => (
                    <>

                        <button key={item.id} className={`p-2 border rounded ${isActive === item.id ? 'bg-warning' : 'bg-primary'}
                         ${isActive===item.id? "text-dark fw-bold" : "text-white fw-bold"}`} onClick={() => setIsActive(isActive === item.id ? null : item.id)}>
                            {item.title}
                        </button>



                    </>
                ))}

            </div>

            {languages.map(item => (
                isActive === item.id && (
                    <div className="card mt-5 p-3 bg-black bg-opacity-25">
                        <div className="d-flex align-items-center">
                            <div className="container">
                              <img className='logo' src={item.image} alt="" />  
                            </div>
                            <div className='fs-4 fw-bold'>{item.description}</div>
                        </div>
                        
                        
                    </div>

                )
            ))}
        </div>

    )
}