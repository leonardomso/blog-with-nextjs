import React from "react";
import { Stack } from "@chakra-ui/react";

import ArticleItem from "src/components/ArticleItem/ArticleItem";

import { api } from "src/lib/lib";

import { BlogArticleType, ArticleType } from "src/types";

interface Props {
  articles: Array<ArticleType>;
}

const Index = ({ articles }: Props) => (
  <Stack direction="column" spacing="20px" pt={5} pb={5} alignItems="center" justifyItems="center">
    {articles.map((article: ArticleType) => (
      <ArticleItem key={article.slug} article={article} />
    ))}
  </Stack>
);

export const getStaticProps = async () => {
  const articles: Array<BlogArticleType> = api.getAllArticles([
    "slug",
    "title",
    "description",
    "date",
    "coverImage",
    "excerpt",
    "timeReading",
    "ogImage",
    "content",
  ]);

  return {
    props: { articles },
  };
};

export default Index;

