import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { Form } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TermsAndCondition = () => {
    const [form] = Form.useForm();
    const [content, setContent] = useState("");

    const handleSubmit = () => {
        console.log('clicked');
    };


    const quillModules = {
        toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "video"],
            ["clean"],
        ],
    };

    const quillFormats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "image",
        "video",
    ];
    return (
        <>
            <h3 className="font-semibold pb-5 text-xl">Terms And Condition</h3>
            <div className="bg-white p-4 h-auto mx-auto  ">
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        rules={[
                            { required: true, message: "Please input content!" },
                        ]}
                    >
                        <ReactQuill
                            value={content}
                            onChange={setContent}
                            placeholder="Write terms and condition here..."
                            modules={quillModules}
                            formats={quillFormats}
                            className="h-96 mb-10"
                        />
                    </Form.Item>

                    <div className="flex justify-center pt-6">
                        <Form.Item>
                            <button
                                // disabled={isLoading}
                                className="bg-primary font-semibold  text-white px-8 py-2 rounded-md"
                                type="submit"
                            >
                                {/* Save Changes {isLoading || updataIsloading && <Spin></Spin>} */}
                                Save Changes
                            </button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default TermsAndCondition;