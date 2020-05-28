import React, { Component } from 'react';
class login extends Component {

    state = {
        email: "",
        password: ""
    }
    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }
    handlePassword = (e) => {
        this.setState({ password: e.target.value })

    }
    render() {
        let val = true;
        if (this.state.email.length > 0 && this.state.password.length > 0) {
            val = false;
        }
        return (
            <form style={{ margin: "100px" }}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input value={this.state.email} onChange={this.handleEmail} style={{ width: "50%" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={this.handlePassword} value={this.state.password} style={{ width: "50%" }} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button disabled={val} type="submit" class="btn btn-primary">Submit</button>


            </form>

        )
    }
}
export default login;