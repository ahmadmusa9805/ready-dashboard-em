/* eslint-disable react/prop-types */
import { Form, Input, Modal } from 'antd';

const AddEmail = ({isModalOpen, handleOk, handleCancel}) => {
    const onFinish = (values) => {
        console.log(values);
    }
    return (
        <Modal title="Add Email" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
            <Form
                name="contact"
                initialValues={{ remember: false }}
                onFinish={onFinish}
                layout="vertical"

            >
                <div className=" gap-2 -mt-4">
                    <Form.Item
                        name="email"
                        label={<p className=" text-md"></p>}
                        style={{}}
                    >
                        <Input
                            required
                            style={{ padding: "6px" }}
                            className=" text-md"
                            placeholder='email'
                        />
                    </Form.Item>


                </div>

                <Form.Item >
                    <button

                        className="px-4 py-2 rounded bg-primary text-white font-semiboldbold   shadow-lg flex justify-end items-end"
                        type="submit"
                    >
                        save
                    </button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddEmail;