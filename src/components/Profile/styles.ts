import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  div {
    margin-left: 1.5rem;
  }

  div strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--title);
  }

  div p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  div p img {
    margin-right: 0.5rem;
  }

  ${media.lessThan('medium')`
    margin-top: 4rem;
    flex-flow: column nowrap;

    & > div {
      margin-top: 2rem;
      margin-left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        text-align: center;
      }
    }
  `}
`;
