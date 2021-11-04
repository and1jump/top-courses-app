import React, { useState } from "react";
import { Htag, Button, Typography, Rating } from "../components";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <div>
      <Htag tag="h1">Hello</Htag>
      <Button appearance="primary">Button</Button>
      <Button appearance="ghost">Button</Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>
      <Typography size="s">Тест текста</Typography>
      <Typography size="m">Тест текста</Typography>
      <Typography size="l">Тест текста</Typography>
      <Rating rating={rating} isEditable setRating={setRating} />
    </div>
  );
}
