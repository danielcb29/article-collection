import React from 'react';

import { GET_ALL_ARTICLES } from '../queries/articles';

import { ArticlePreview } from '../components/article-preview';

const Home = ({ data, loading, error }) => {
  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error :(</div>;

  const articles = data.articleCollection.items;

  return (
    <main>
      <article>
        {articles.map(({ sys, tag, title, image, author, publishDate }) => (
          <ArticlePreview
            key={sys.id}
            tag={tag}
            title={title}
            image={image}
            author={author}
            publishDate={publishDate}
          />
        ))}
      </article>
    </main>
  );
};

Home.getInitialProps = async ({ apolloClient }) => {
  const { data, loading, error } = await apolloClient.query({
    query: GET_ALL_ARTICLES,
  });

  return {
    data,
    loading,
    error,
  };
};

export default Home;
