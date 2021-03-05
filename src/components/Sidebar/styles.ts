import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  z-index: 10;

  width: 112px;

  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.05));

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 100%;

    padding: 2rem 0;

    img {
      height: 48px;
      width: 42px;
      cursor: pointer;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 1.1rem;
        color: var(--red);
        cursor: pointer;
      }
    }
  }

  ${media.lessThan('medium')`
    width: 4rem;
    position: fixed;

    svg {
      width: 2rem;
      height: 2rem;
    }

    header {
      padding-top: 1rem;
    }

    footer {
      padding-bottom: 1rem;
    }
  `}
`;
