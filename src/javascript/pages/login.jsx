'use strict'

const React = require('react');
import Header from '../components/header.jsx';
import { Form, fieldset, Input, Button } from 'amazeui-react';

export default class Login extends React.Component {
    checkValue () {
        this.setState({
            username: undefined,
            password: undefined,
            confirmPassword: undefined,
        });
        this.refs.info.innerText = '';
        
        if (this.refs.username.getValue() === "") {
            this.refs.info.innerText = '请输入用户名';
            this.setState({username: 'error'});
            return false;
        } 
        
        if (this.refs.password.getValue() === "") {
            this.refs.info.innerText = '请输入密码';
            this.setState({password: 'error'});
            return false;
        } 
        return true;
    }
    
    constructor (props) {
        super(props);
        this.state = {
            username: undefined,
            password: undefined,
        };
    }
    
    render () {
        const { handleLogin } = this.props;
        return (
            <div style={{
                flex: 1,
            }}>
                <div style={{
                    width: 300,
                    margin: '100px auto',
                    textAlign: 'center',
                }}>
                    <Form>
                        <span style={{
                            color: 'red',
                        }} ref="info">
                        </span>
                        <fieldset className="am-form-set">
                            <Input placeholder="用户名" icon="user" ref="username" validation={ this.state.username }/>
                            <Input type="password" icon="lock" placeholder="密码" ref="password" validation={ this.state.password }/>
                        </fieldset>
                        <Button 
                            amStyle="primary" 
                            block 
                            onClick={ e => {
                                if (!this.checkValue.bind(this)()) {
                                    return;
                                }
                                handleLogin(this.refs.username.getValue(), this.refs.password.getValue(), this);
                            }}
                         >登录</Button>
                    </Form>
                </div>
            </div>
        )
    }
}