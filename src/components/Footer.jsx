import '../styles/Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div/>
        <section className="footer__column">
          <h3 className="footer__heading">Navigation</h3>
          <ul className="footer__list">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
          </ul>

        </section>
        <section className="footer__column">
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__list">
            <li>10 High Street,<br/> Chicago, IL 60605</li>
            <li>312-999-9999</li>
            <li><a href="mailto:info@littlelemon.com">enquiries@littlelemon.com</a></li>
          </ul>
        </section>
        <section className="footer__column">
          <h3 className="footer__heading">Social Media</h3>
          <ul className="footer__list">
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">Facebook</a></li>
          </ul>
        </section>

      </div>
    </footer>
  );
}