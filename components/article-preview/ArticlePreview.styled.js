import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem;
`;

export const Image = styled.img`
  max-width: 30rem;
`;

export const AnchorContainer = styled.div`
  a {
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const H1 = styled.h1`
  font-size: 3rem;
`;

export const Byline = styled.p`
  font-size: 2rem;
  margin: 0;
`;

export const Prefix = styled.span`
  font-style: italic;
  margin-right: 0.5rem;
`;

export const Role = styled.p`
  color: lightslategrey;
  font-size: 1.5rem;
`;

export const PublishDate = styled.span`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const HorizontalRule = styled.hr`
  border-bottom: 0.1rem solid lightgrey;
  width: 100%;
`;
