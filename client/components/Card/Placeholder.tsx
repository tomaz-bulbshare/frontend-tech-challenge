import { Skeleton } from "antd";
import * as React from "react";

export function Placeholder(): JSX.Element {
  return <Skeleton avatar paragraph={{ rows: 4 }} />;
}
