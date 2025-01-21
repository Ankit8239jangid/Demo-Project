import React from 'react'
import { Form, Input, message, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../../apicalls/users'
import { useDispatch } from 'react-redux'
import { HideLoading, ShowLoading } from '../../../redux/loaderSlice'

function RegisterPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading())
      const response = await registerUser(values)
      dispatch(HideLoading())
      if (response.success) {
        message.success(response.message)
        navigate("/login")
      } else {
        message.error(response.message)
      }
    } catch (error) {
      dispatch(HideLoading())
      message.error(error.message)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-primary">
      <div className="card w-400 p-3 bg-white">
        <div className="flex flex-col">
          <h1 className="text-2xl">
            Quiz-Portal Register <i className="ri-user-add-line"></i>
          </h1>
          <div className="divider"></div>
          <Form layout="vertical" className="mt-2" onFinish={onFinish}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error('The two passwords do not match!'))
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Enter your confirm password" />
            </Form.Item>

            <div className="flex flex-col gap-2">
              <Button type="primary" htmlType="submit" className="mt-2 w-100">
                Register
              </Button>
              <Link to="/login">
                Already have an account? Login Here
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
