import * as React from "react";
import type { ReactNode } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
`;

const Container = styled.div`
  flex: 1;
`;

const Sidebar = styled.div`
  width: 500px;
`;

type Props = {
  sidebar: ReactNode;
  children: ReactNode;
  className?: string;
};

export function SidebarLayout(props: Props): JSX.Element {
  const { sidebar, className, children } = props;

  return (
    <Row className={className}>
      <Container>{children}</Container>
      <Sidebar>{sidebar}</Sidebar>
    </Row>
  );
}
