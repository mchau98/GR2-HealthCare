import "./index.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserAddOutlined,
  UsergroupAddOutlined,
  KeyOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Form, Input, Select, Button, Checkbox } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const navigate = useNavigate();
  const handleFinish = (value) => {
    toast.success("Đăng ký thành công!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      navigate("/login");
    }, 5000);
    console.log("Received values of form: ", value);
  };
  return (
    <div className="register-container">
      <div className="register-wrap">
        <h3 className="register-header">ĐĂNG KÝ TÀI KHOẢN</h3>
        <>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            style={{
              width: 600,
              marginLeft: 10,
            }}
            className="register-form"
            onFinish={handleFinish}
          >
            <Form.Item
              className="register-form-item-mobile"
              label={<UserOutlined className="register-icon" />}
              name="name"
              rules={[
                {
                  message: "Hãy nhập tên!",
                },
              ]}
            >
              <Input placeholder="Họ và tên" />
            </Form.Item>
            <Form.Item
              className="register-form-item-mobile"
              name="email"
              label={<UserAddOutlined className="register-icon" />}
              rules={[
                {
                  type: "email",
                  message: "Email không hợp lệ!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              className="register-form-item-mobile"
              label={<UsergroupAddOutlined className="register-icon" />}
              name="username"
              rules={[
                {
                  message: "Hãy nhập tên đăng nhập!",
                },
              ]}
            >
              <Input placeholder="Tên đăng nhập" />
            </Form.Item>
            <Form.Item
              className="register-form-item-mobile"
              name="password"
              label={<KeyOutlined className="register-icon" />}
              rules={[
                {
                  message: "Hãy nhập mật khẩu!",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Mật khẩu" />
            </Form.Item>

            <Form.Item
              className="register-form-item-mobile"
              name="confirm"
              label={<KeyOutlined className="register-icon" />}
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  message: "Hãy nhập lại mật khẩu",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Mật khẩu nhập lại không đúng")
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Nhập lại mật khẩu" />
            </Form.Item>

            <Form.Item
              className="register-form-item-mobile"
              style={{ textAlign: "center", marginLeft: "100px" }}
              id="other-option-regis"
            >
              <div className="register-other-option">Hoặc</div>
            </Form.Item>
            <Form.Item
              // className="register-form-item-mobile"
              style={{ textAlign: "center" }}
            >
              <Button
                type="primary"
                shape="round"
                className="register-btn"
                icon={<FontAwesomeIcon icon={faGoogle} />}
              >
                Tiếp tục với Google
              </Button>
            </Form.Item>
            <Form.Item
              className="register-form-item-mobile"
              style={{ textAlign: "center" }}
            >
              <Button
                type="primary"
                shape="round"
                className="register-btn"
                icon={<FontAwesomeIcon icon={faFacebook} />}
              >
                Tiếp tục với Facebook
              </Button>
            </Form.Item>
            <Form.Item
              // className="register-form-item-mobile"
              style={{ textAlign: "center" }}
              className="register-check"
            >
              <Checkbox>Tôi đồng ý với các điều khoản</Checkbox>
            </Form.Item>
            <Form.Item
              // className="register-form-item-mobile"
              style={{ textAlign: "center" }}
            >
              <Button
                type="primary"
                className="register-btn-regis"
                htmlType="submit"
              >
                ĐĂNG KÝ
              </Button>
            </Form.Item>
          </Form>
        </>
        <div className="register-to-login">
          Bạn đã có tài khoản?
          <span>
            <Link className="register-link" to="/login">
              Đăng nhập ngay
            </Link>
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
