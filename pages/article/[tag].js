import React from 'react';

import { GET_ARTICLE } from '../../queries/articles';

const Article = ({ data, loading, error }) => {
  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error :(</div>;

  const [article] = data.articleCollection.items;

  return (
    <main>
      <article>
        <h1>{article.title}</h1>
      </article>
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
