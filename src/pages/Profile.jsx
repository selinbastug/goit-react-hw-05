function Profile() {
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-start">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card shadow-sm">
              <img
                src="https://images.pexels.com/photos/8547198/pexels-photo-8547198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Profile"
                className="card-img-top rounded-circle mx-auto d-block mt-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h3 className="card-title">Levent KOYBASI</h3>
                <p className="card-text text-muted">Web Developer</p>
                <p className="text-muted">@levent</p>
                <div className="d-flex justify-content-center my-3">
                  <a
                    href="https://x.com/leventkoybasi"
                    className="btn btn-primary mx-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-twitter"></i> Twitter
                  </a>
                  <a
                    href="https://github.com/leventkoybasi"
                    className="btn btn-dark mx-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i> GitHub
                  </a>
                </div>

                <p>
                  A passionate web developer with experience in modern
                  JavaScript frameworks like React and Node.js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
