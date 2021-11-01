import React from "react";
import { Htag, Button } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Hello</Htag>
      <Button appearance="primary">Button</Button>
      <Button appearance="ghost">Button</Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>
    </div>
  );
}
