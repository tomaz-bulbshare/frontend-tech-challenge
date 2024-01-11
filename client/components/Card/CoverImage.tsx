import * as React from "react";
import { Image } from "antd";
import styled from "styled-components";

const Block = styled.div`
  position: relative;
`;

const Title = styled.h2`
  position: absolute;
  bottom: 0;
  z-index: 1;
  color: #fff;
  margin: 1rem;
  text-shadow: 0 0 5px #000000a3;
`;

type Props = {
  title: string;
  src: string;
};

export function CoverImage(props: Props): JSX.Element {
  const { title, src } = props;

  return (
    <Block>
      <Title>{title}</Title>
      <Image preview={false} alt={title} src={src} />
    </Block>
  );
}
