import style from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div
        className={`text-primary text-center my-3 ${style.footerLink}`}
        id="me"
      >
        <a
          className="text-decoration-none"
          href="https://github.com/leventkoybasi"
        >
          <small className="text-primary">
            leventkoybasi <i className="bi bi-github ms-2 text-primary"></i>
          </small>
        </a>
      </div>
    </>
  );
}
export default Footer;
