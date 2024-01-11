import * as React from "react";
import { Card as CardComponent } from "antd";
import { CoverImage } from "./CoverImage";
import type { ReactNode } from "react";

const { Meta } = CardComponent;

type Props = {
  title: string;
  bannerSrc: string;
  bannerText: string;
  avatar: ReactNode;
  action?: ReactNode;
  onClick: () => void;
};

export function Card(props: Props): JSX.Element {
  const { action, avatar, title, bannerSrc, bannerText, onClick } = props;

  return (
    <CardComponent
      onClick={onClick}
      style={{ borderRadius: 0 }}
      headStyle={{ borderRadius: 0 }}
      bodyStyle={{ padding: 0, borderRadius: 0 }}
      title={<Meta title={title} avatar={avatar} />}
      extra={action}
      hoverable
    >
      <CoverImage title={bannerText} src={bannerSrc} />
    </CardComponent>
  );
}
