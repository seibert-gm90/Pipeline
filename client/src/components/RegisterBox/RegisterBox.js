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
                            placeholder="Username"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                         type="text"
                         name="email"
                         className="login-input"
                         placeholder="Password"/>
                    </div>
                    <button
                    type="button"
                    className="login-btn"
                    onClick={this.submitRegister.bind(this)}>Register</button>
                </div>
            </div>
        )
    }
}