import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import "./firstScreen.scss"

export class FirstScreen extends Component {
    render() {
        return (
            <div className={"first-screen-wrapper"}>
                <div className={"center"}>
                    <div className={"slider"}>
                        <div className={"slides"}>
                            <div className={"slide-1 column"}>
                                <label className={"slide-1-lorem"}>Aliquet bibendum enim facilisis gravida neque convallis a.</label>
                                <label className={"slide-1-lorem"}> Sit amet volutpat consequat mauris nunc.</label>
                            </div>
                            <div className={"slide-2 column"}>
                                <label className={"slide-2-lorem"}>Tempus imperdiet nulla malesuada pellentesque elit eget.</label>
                                <label className={"slide-2-lorem"}>Lacinia quis vel eros donec ac odio.</label>
                            </div>
                            <div className={"slide-3 column"}>
                                <label className={"slide-3-lorem"}>Dictum varius duis at consectetur lorem donec massa sapien.</label>
                                <label className={"slide-3-lorem"}>Ut tristique et egestas quis ipsum suspendisse.</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="username"
                            component="input"
                            type="text"
                            placeholder="Username"
                        />
                        <Field
                            name="password"
                            component="input"
                            type="password"
                            placeholder="Password"
                        />
                        <button type="submit" label="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
LoginForm = reduxForm ({
    form: 'login',
}) (LoginForm);

export default LoginForm;