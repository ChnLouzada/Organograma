import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"> 
                    <img src="/imagens/facebook.png" alt="Logo clicável do facebook." />
                </a>
            </li>
            <li>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <img src="/imagens/twitter.png" alt="Logo clicável do twitter." />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <img src="/imagens/instagram.png" alt="Logo clicável do instagram." />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imagens/logo.png" alt="Logo da Organo." />
       </section>
       <section>
        <p>
            Desenvolvido por Camila Louzada.
        </p>
       </section>
    </footer>)
}

export default Rodape