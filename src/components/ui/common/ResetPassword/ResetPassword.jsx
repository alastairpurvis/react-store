import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ResetPassword.scss';
import Button from '../Button';
import Input from '../Input';

@withStyles(s)
class ResetPassword extends Component {
    static contextTypes = {
        getUserAgent: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            success: false
        };
    }

    handleSubmit = () => {
        this.setState({ loading: true });

        this.context.executeAction('user/update')
            .then(() => {
                this.setState({ success: true });
            })
            .catch(error => {
                this.setState({
                    error,
                    loading: false
                });
            });
    };

    handleInputChange = event => {
        this.setState({
            email: event
        });
    };

    renderForm() {
        return (
            <div className={s.outterContainer}>
                <div className={s.title}>
                    have you forgotten your password?
                </div>
                <div className={s.text}>
                    If you've forgotten your password, enter your e-mail address and we'll send you an e-mail telling how to recover it
                </div>
                <div className={s.innerContainer}>
                    <div className={s.label}>
                        E-mail
                    </div>
                    <Input className={s.input} title='Email' onChange={this.handleInputChange} />
                </div>
                <Button onClick={this.handleSubmit} className={s.button}>
                    retrieve password
                </Button>
            </div>
        );
    }

    renderMessage() {
        return (
            <div className={s.textContainer}>
                <div className={s.title}>
                    request successfully made
                </div>
                <div className={s.text}>
                    Your request to retrieve your password has been received correctly.<br/>
                    You will shortly receive a mail with instructions to follow in order to complete the process.
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className={s.root}>
                {this.state.success ? this.renderMessage() : this.renderForm()}
            </div>
        );
    }
}

export default ResetPassword;
