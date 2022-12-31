import { getCatesApi } from "@/api/Article";
import articleAddApi from "@/api/Article/articleAdd";
import {
  Button,
  Card,
  Col,
  Form,
  FormProps,
  Input,
  Row,
  Select,
  SelectProps,
  Upload,
  UploadFile,
  UploadProps,
  message,
} from "antd";
import AntdImgCrop from "antd-img-crop";
import React, { useEffect, useState } from "react";
import type { FC } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const ArticlePublish: FC = () => {
  const navigate = useNavigate();

  const [articleCates, setArticleCates] = useState<SelectProps["options"]>([]);
  useEffect(() => {
    (async () => {
      const result = await getCatesApi();
      setArticleCates(
        result.map((item) => ({ label: item.name, value: item.id }))
      );
    })();
  }, []);

  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);
  const onFileChange: UploadProps["onChange"] = (params) => {
    console.log(params);
    params.file.status = "done";
    setFileList(params.fileList);
  };

  const onFinish: FormProps<{
    title: string;
    cate: number;
    content: string;
  }>["onFinish"] = async (params) => {
    // console.log(params);
    if (fileList[0].originFileObj == undefined) {
      return message.error("图片有误");
    }
    const result = await articleAddApi(
      params.title,
      params.cate,
      fileList[0].originFileObj,
      params.content
    );
    if (result.isOk) {
      message.success(result.message);
      navigate("/article");
    }
    return message.error(result.message);
  };

  return (
    <div style={{ marginTop: "1em" }}>
      <Row gutter={[12, 12]} justify="center" align="middle">
        <Col span={12}>
          <Card>
            <Form labelCol={{ span: 4 }} onFinish={onFinish}>
              <Form.Item label="文章标题" name="title">
                <Input placeholder="请输入文章的标题" />
              </Form.Item>
              <Form.Item label="文章类型" name="cate">
                <Select options={articleCates} placeholder="请选择" />
              </Form.Item>
              <Form.Item label="封面">
                <AntdImgCrop aspect={200 / 120}>
                  <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onFileChange}
                    maxCount={1}
                  >
                    +
                  </Upload>
                </AntdImgCrop>
              </Form.Item>
              <Form.Item label="文章内容" name="content">
                <ReactQuill theme="snow" placeholder="开始写下你的文章吧！" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 4 }}>
                <Button type="primary" size="large" htmlType="submit">
                  发布文章
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ArticlePublish;
