import styled from 'styled-components';

export const Container = styled.article`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 4.8px;
  margin: 5rem;
`;

export const Image = styled.img`
  grid-column: span 4;
  width: 100%;
`;

export const Content = styled.div`
  grid-column: 6 / span 8;
`;

export const H1 = styled.h1`
  font-size: 8rem;
  margin: 0;
`;

export const Byline = styled.p`
  font-size: 3rem;
  text-align: end;
`;

export const Prefix = styled.span`
  font-style: italic;
  margin-right: 1rem;
`;

export const Role = styled.p`
  font-size: 1.5rem;
  text-align: end;
`;

export const PublishDate = styled.span`
  display: block;
  text-align: end;
`;

export const Body = styled.div`
  grid-column: span 12;
  margin-top: 3rem;

  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1.4rem;
  }
`;
