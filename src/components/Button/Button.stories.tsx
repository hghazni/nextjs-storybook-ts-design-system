import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module).add("with text", () => {
  return <Button text="Hello World 123" />;
});

storiesOf("Button", module).add("with emoji", () => {
  return <Button text="😀 😎 👍 💯" />;
});