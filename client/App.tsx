import * as React from "react";
import { Card } from "./components/Card";
import { Col, Space, Row, Avatar } from "antd";
import { useLockScrolling } from "./hooks/useLockScrolling";
import type { Brief } from "./types/brief";
import type { Comment } from "./types/comment";
import { BriefModal } from "./modals/BriefModal";

const BASE_URL = "http://localhost:4000";

function App(): JSX.Element {
  const [activeBriefRef, setActiveBriefRef] =
    React.useState<Brief["briefref"]>();

  const [feed, setFeed] = React.useState<Brief[]>();

  const [comments, setComments] =
    React.useState<Record<Brief["briefref"], Comment[]>>();

  React.useEffect(() => {
    async function dataFetch(): Promise<void> {
      const data = await (await fetch(`${BASE_URL}/feed`)).json();

      setFeed(data);
    }

    dataFetch();
  }, []);

  React.useEffect(() => {
    if (!activeBriefRef) {
      return;
    }

    async function dataFetch(activeBriefRef: string): Promise<void> {
      const data = await (
        await fetch(`${BASE_URL}/feed/${activeBriefRef}/comments`)
      ).json();

      setComments((state) => ({ ...state, [activeBriefRef]: data }));
    }

    dataFetch(activeBriefRef);
  }, [activeBriefRef]);

  useLockScrolling(!activeBriefRef);

  const activeBrief = feed?.find((item) => item.briefref === activeBriefRef);

  return (
    <div className="App">
      {activeBriefRef  && activeBrief && (
        <BriefModal
          brief={activeBrief}
          comments={comments?.[activeBriefRef]}
          onClose={() => setActiveBriefRef(undefined)}
        />
      )}
      <Row justify="center">
        <Col xs={20} sm={16} md={12} lg={10} xl={10} style={{ maxWidth: 500 }}>
          <Space
            direction="vertical"
            size="middle"
            style={{ margin: "16px 0", width: "100%" }}
          >
            {(feed ?? []).map((item) => (
              <Card
                key={item.briefref}
                onClick={() => setActiveBriefRef(item.briefref)}
                title={item.brand.name}
                bannerSrc={item.banner_image}
                bannerText={item.banner_text}
                avatar={<Avatar src={item.brand.logo} alt={item.brand.name} />}
                action={
                  // No spec
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a href="#" style={{ textTransform: "uppercase" }}>
                    Join Brief Now!
                  </a>
                }
              />
            ))}
            {!feed &&
              [...new Array(5)].map((_item, index) => (
                <Card.Placeholder key={index} />
              ))}
          </Space>
        </Col>
      </Row>
    </div>
  );
}

export default App;
