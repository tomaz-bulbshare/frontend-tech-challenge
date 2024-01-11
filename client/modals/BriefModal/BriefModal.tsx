import * as React from "react";
import { Col, Space, Row, Button, Avatar, Image, Flex } from "antd";
import styled from "styled-components";
import { SidebarLayout } from "../../layouts/SidebarLayout";
import { Static } from "../../components/Static";
import {
  CloseOutlined as CloseIcon,
  UpOutlined as UpIcon,
  DownOutlined as DownIcon,
} from "@ant-design/icons";
import type { Brief } from "../../types/brief";
import type { Comment } from "../../types/comment";
import { formatDate, parseDate } from "../../utils/date";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { CommentSidebar } from "./CommentSidebar";

const Modal = styled(SidebarLayout)`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: white;
`;

const Container = styled.div`
  position: relative;
`;

const ScrollContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

const BriefCover = styled.div`
  height: 100vh;
  background-color: #000000;
  background-position: center;
  background-size: 55%;
  background-repeat: no-repeat;
`;

const BriefContents = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  padding: 20px;
`;

type Props = {
  brief: Brief;
  comments?: Comment[];
  onClose: () => void;
};

export function BriefModal(props: Props): JSX.Element {
  const { brief, comments, onClose } = props;

  const coverRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const [scrollPosition, setScrollPosition] = React.useState("top");

  const scrollRef = useScrollPosition(({ top, height }) => {
    setScrollPosition(() => {
      if (top === 0) {
        return "top";
      }

      return top < height ? "middle" : "bottom";
    });
  });

  return (
    <Modal sidebar={<CommentSidebar brief={brief} comments={comments} />}>
      <Container>
        <ScrollContainer ref={scrollRef}>
          <Static align="left" justify="top">
            <Button
              type="primary"
              shape="circle"
              title="Close"
              onClick={onClose}
              icon={<CloseIcon />}
            />
          </Static>
          <Static align="right" justify="middle">
            <Space direction="vertical">
              <Button
                type="primary"
                shape="circle"
                title="Up"
                disabled={scrollPosition === "top"}
                onClick={() =>
                  coverRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                icon={<UpIcon />}
              />
              <Button
                type="primary"
                shape="circle"
                title="Down"
                disabled={scrollPosition === "bottom"}
                onClick={() =>
                  contentRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                icon={<DownIcon />}
              />
            </Space>
          </Static>
          <BriefCover
            ref={coverRef}
            style={{ backgroundImage: `url(${brief.banner_image})` }}
          ></BriefCover>
          <BriefContents ref={contentRef}>
            <Row justify="center">
              <Col xs={20} sm={16} md={12} lg={10} xl={10}>
                <Flex align={"center"} gap={16} vertical>
                  <div>
                    <Avatar src={brief.brand.logo} alt={brief.brand.name} />
                  </div>
                  <h2>{brief.feed_title}</h2>
                  <div>{formatDate(parseDate(brief.starts_on))}</div>
                  <div>{brief.banner_text}</div>
                  <Image src={brief.ad_1_image} preview={false} width="100%" />
                  {/* Added this per screenshot */}
                  <div>{brief.description}</div>
                  <Image src={brief.ad_2_image} preview={false} width="100%" />
                </Flex>
              </Col>
            </Row>
          </BriefContents>
        </ScrollContainer>
      </Container>
    </Modal>
  );
}
