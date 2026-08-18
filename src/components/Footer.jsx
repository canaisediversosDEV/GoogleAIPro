import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Esta oferta de acesso ao Google AI Pro não é operada pelo Google LLC.
        Os nomes de produtos mencionados são propriedade de seus respectivos titulares.
      </p>
      <p>© {new Date().getFullYear()} · Todos os direitos reservados.</p>
    </footer>
  )
}
