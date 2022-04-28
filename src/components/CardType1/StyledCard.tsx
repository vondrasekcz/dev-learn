import styled from '@emotion/styled';


const PADDING = '1.5';
const PRIMARY = 'hsl(142 90% 61%)';


const StyledCard = styled.div`
  *, *::before, *::after {
    box-sizing: border-box; 
  }

  height: 400px;
  width: calc(30ch + (2 * ${PADDING}rem));
  display: flex;
  align-items: flex-end;
  border-radius: 0.25rem;
  overflow: hidden;
  background-image: url(https://source.unsplash.com/300x400);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  transform: none;
  transition: transform 300ms ease-out;

  .content {
    padding: 3rem ${PADDING}rem ${PADDING}rem;
    background: linear-gradient(
      180deg,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0.3743872549019608) 11%,
      rgba(0,0,0,1) 100%
    );
    transform: translateY(0);
    transition: transform 300ms ease-out;

    &-text,
    &-button {
      opacity: 1;
      transition: opacity 300ms ease-out;
    }

    &-title {
      position: relative;
      margin: 0 0 1.75rem 0;
      display: inline-block;

      &::after {
        content: '';
        position: absolute;
        left: -${PADDING}rem;
        width: calc(100% + ${PADDING}rem);
        transform: scaleX(100%);
        transform-origin: left;
        bottom: -6px;
        height: 3px;
        background-color: ${PRIMARY};
        transition: transform 300ms ease-out;
      }
    }

    &-text {
      margin-top: 0;
      margin-bottom: 1.5rem;
    }
  }


  @media (hover) {
    transform: scale(1);
    .content {
      transform: translateY(65%);
      &-text,
      &-button {
        opacity: 0;
      }
      &-title::after {
        transform: scaleX(0);
      }
    }
    &:hover,
    &:focus-within {
      transform: scale(1.025);

      .content {
        transform: translateY(0);
        transition-delay: 300ms;

        &-text,
        &-button {
          opacity: 1;
          transition-delay: 600ms;
        }

        &-title::after {
          transform: scaleX(100%);
        }
      }
    }

    &:focus-within .content {
      transition-duration: 0ms;
    }
  }


  button {
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;
    background-color: ${PRIMARY};

    font-size: 0.625;
    font-weight: 600;
    text-transform: uppercase;

    transition: background-color 300ms ease-out;

    &:hover,
    &:focus {
      background-color: white;
      outline: none;
    }
  }


  @media (prefers-reduced-motion: reduce) {
    *,
    *::after,
    *:before {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      transition-delay: 0ms !important;
      scroll-behavior: auto !important;
    }
  }
`;


export default StyledCard;
