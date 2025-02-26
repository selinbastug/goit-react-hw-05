import { MainContext, useContext } from "../hooks/Context";

function Settings() {
  const { theme, toggleTheme } = useContext(MainContext);
  return (
    <>
      <div className="container my-5">
        <h2 className="mb-4">Settings</h2>
        <div className="card mb-4">
          <div className="card-header">Account Settings</div>
          <div className="card-body">
            <p>
              <strong>Username:</strong> lance
            </p>
            <p>
              <strong>Email:</strong> leventkoybasi@hotmail.com
            </p>
            <button className="btn btn-primary">Edit Profile</button>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-header">Preferences</div>
          <div className="card-body">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="darkModeToggle"
                checked={theme === "dark"}
                onClick={toggleTheme}
              />
              <label className="form-check-label" htmlFor="darkModeToggle">
                Dark Mode
              </label>
            </div>

            <div className="form-check form-switch mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="autoplayToggle"
              />
              <label className="form-check-label" htmlFor="autoplayToggle">
                Autoplay Trailers
              </label>
            </div>

            <div className="form-check form-switch mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="emailNotificationsToggle"
              />
              <label
                className="form-check-label"
                htmlFor="emailNotificationsToggle"
              >
                Email Notifications
              </label>
            </div>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-header">Language</div>
          <div className="card-body">
            <select className="form-select">
              <option>Turkish</option>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-header">Privacy</div>
          <div className="card-body">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="publicProfileToggle"
              />
              <label className="form-check-label" htmlFor="publicProfileToggle">
                Make Profile Public
              </label>
            </div>

            <div className="form-check form-switch mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="watchHistoryToggle"
              />
              <label className="form-check-label" htmlFor="watchHistoryToggle">
                Show Watch History
              </label>
            </div>
          </div>
        </div>
        <div className="card border-danger">
          <div className="card-header text-danger">Danger Zone</div>
          <div className="card-body">
            <button className="btn btn-danger">Delete Account</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Settings;
