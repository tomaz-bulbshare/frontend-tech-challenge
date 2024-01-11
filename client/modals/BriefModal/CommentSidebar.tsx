import * as React from "react";
import { Space, Avatar, Skeleton, Card } from "antd";
import styled from "styled-components";

import type { Brief } from "../../types/brief";
import type { Comment } from "../../types/comment";

const { Meta } = Card;

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 14px;
`;

type Props = {
  brief: Brief;
  comments?: Comment[];
};

export function CommentSidebar(props: Props): JSX.Element {
  const { brief, comments } = props;

  return (
    <Container>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Space>
          <Avatar src={brief.brand.logo} alt={brief.brand.name} />
          <span>{brief.brand.name}</span>
        </Space>
        {comments?.map((comment) => (
          <Card key={comment.bcommentref}>
            <Meta
              avatar={
                <Avatar src={comment.user.avatar} alt={comment.user.name} />
              }
              title={comment.user.name}
              description={comment.comment}
            />
          </Card>
        ))}
        {!comments && <Skeleton avatar paragraph={{ rows: 2 }} />}
        {comments?.length === 0 && <div>No comments</div>}
      </Space>
    </Container>
  );
}
