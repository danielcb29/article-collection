import React from 'react';

import { GET_ARTICLE } from '../../queries/articles';
import ArticleDetail from '../../components/article-detail/ArticleDetail';

const Article = ({ data, loading, error }) => {
  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error :(</div>;

  const [article] = data.articleCollection.items;

  return (
    <main>
      <ArticleDetail data={article} />
    </main>
  );
};

Article.getInitialProps = async (ctx) => {
  const {
    apolloClient,
    query: { tag },
  } = ctx;

  const { data, loading, error } = await apolloClient.query({
    query: GET_ARTICLE,
    variables: {
      tag,
    },
  });

  return {
    data,
    loading,
    error,
  };
};

export default Article;
