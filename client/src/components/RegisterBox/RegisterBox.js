class RegisterBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    submitRegister(e) {}
    render() {
        return (
          <div className="inner-container">
            <div className="header">Register</div>
            <div Classname="box">
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  className="login-input"
                  placeholder="Username"
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  className="login-input"
                  placeholder="Password"
                />
              </div>
              <div className="role-select">
                {[
                  "Primary",
                ].map((variant) => (
                  <>
                    <DropdownButton
                      as={ButtonGroup}
                      key={variant}
                      id={`dropdown-variants-${variant}`}
                      variant={variant.toLowerCase()}
                      title={variant}
                    >
                      <Dropdown.Item eventKey="1">Assistant</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Broker</Dropdown.Item>
                    </DropdownButton>{" "}
                  </>
                ))}
              </div>
              <button
                type="button"
                className="login-btn"
                onClick={this.submitRegister.bind(this)}
              >
                Register
              </button>
            </div>
          </div>
        );
    }
}