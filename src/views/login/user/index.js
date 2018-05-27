import React, {Component} from 'react'
import { Card, Tabs, Button, Form, Select, Input } from 'antd'
import './index.scss'

class LoginUser extends Component {
  constructor () {
    super()
    
    this.state = {
      schoolList: ['1', '2', '3']
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (val) {
    const schoolList = this.state.schoolList
    // fetch schoolList
    this.setState({
      schoolList: this.state.schoolList.filter(_ => _.includes(val))
    })
  }
  handleForgetPassword () {}
  handleSubmit () {}

  render () {
    return (
      <Card className="loginUser">
        <div class="align-center">
          <img src={require('@/assets/student-logo.png')}/>
        </div>
        <Tabs className="loginUser-tab" defaultActiveKey="1">
          <Tabs.TabPane tab="实名登录" key="1">
            <Form>
              <Form.Item>
                <Select placeholder="学校" onChange={this.handleChange} combobox>
                  { this.state.schoolList.map(_ => <Select.Option key={_}>{_}</Select.Option>) }
                </Select>
              </Form.Item>
              <Form.Item>
                <Input size="large" placeholder="姓名" />
              </Form.Item>
              <Form.Item>
                <Input type="password" size="large" placeholder="密码"/>
              </Form.Item>
              <Button className="w-12" size="large" type="primary">登录</Button>
              <span class="f-12" onClick={this.handleForgetPassword}>忘记密码？</span>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane tab="快速登录" key="2">
            <Form>
              <Form.Item>
                <Input size="large" placeholder="翼课号/邮箱/手机号" />
              </Form.Item>
              <Form.Item>
                <Input type="password" size="large" placeholder="密码"/>
              </Form.Item>
            </Form>
            <Button className="w-12" size="large" type="primary">登录</Button>
          </Tabs.TabPane>
        </Tabs>
      </Card>
    )
  }
}

export default LoginUser