import { Button, Col, Input, Row } from "antd";
import React from "react";

const CommentBar: React.FC<{
  inputState: [string, React.Dispatch<React.SetStateAction<string>>];
  onSubmit: React.MouseEventHandler<HTMLElement> | undefined;
}> = ({ inputState, onSubmit }) => {
  const [inputValue, setInputValue] = inputState;

  return (
    <Row gutter={[24, 24]} align="middle" justify="center">
      <Col span={21}>
        <Input.TextArea
          maxLength={50}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          showCount
          placeholder="发布评论"
        />
      </Col>
      <Col span={3}>
        <Button size="large" type="primary" block onClick={onSubmit}>
          发送
        </Button>
      </Col>
    </Row>
  );
};

export default CommentBar;
