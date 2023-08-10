import { Navigate } from 'react-router';
import { Form, Input, Row, Col } from 'antd';
import { useState } from "react"
import YBBreadCrumb from '../YBBreadCrumb'


export default function Root() {
    const [feed,setFeed] = useState("")
    const [goToPath,setGoToPath] = useState("")
    
    const handleFinish = (values: any) => {
        console.log("finish")
        setGoToPath("/" + feed)
    }

    if (window.location.pathname !== "/") {
        setGoToPath(window.location.pathname)
    }
  
    return (
        <>
        {goToPath && (
            <Navigate to={goToPath} />
        )}
        <YBBreadCrumb />
        <Row justify="center">
            <Col span={12} className='text-center'>
            <p><b>Welcome to ybFeed</b></p>
            <p>
                Choose a unique name for your feed :
            </p>
            <Form 
                action="/" 
                name="basic" 
                className="form-container-center" 
                onFinish={handleFinish}>
                <Form.Item
                    name="feed"
                >
                    <Input
                        className="input-field"
                        placeholder="Feed name"
                        onChange={(e) => setFeed(e.currentTarget.value.toLowerCase())}
                    />
                </Form.Item>
            </Form>
            </Col>
        </Row>
        </>
    )
}