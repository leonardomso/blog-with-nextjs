import React from "react";
import { Stack, Divider } from "@chakra-ui/react";

import Header from "./Header/Header";
import Content from "./Content/Content";

interface Props {
  readingTime: {
    text: string;
  };
  title: string;
  description: string;
  date: string;
  ogImage: {
    url: string;
  };
  content: React.ReactNode;
  slug: string;
}

const Article = ({
  readingTime,
  title,
  description,
  date,
  ogImage,
  content,
}: Props) => (
  <Stack
    direction="column"
    spacing="50px"
    maxW="800px"
    h="fit-content"
    justifySelf="center"
    alignItems="center"
    justifyItems="center"
  >
    <Header
      readingTime={readingTime}
      title={title}
      description={description}
      date={date}
      ogImage={ogImage}
    />
    <Content content={content} />
    <Divider orientation="horizontal" />
  </Stack>
);

export default Article;
