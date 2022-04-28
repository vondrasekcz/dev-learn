import StyledCard from './StyledCard';


/**
 * Card inspired by: https://www.youtube.com/watch?v=5DEq5cWNYt8
 * features
 *  - keyboard friendly
 *  - mobile (touch) friendly
 *  - transitions
 */


const CardType1 = (): JSX.Element => {
  return (
    <StyledCard>
      <div className="content">
        <h2 className="content-title">
          Something awesome
        </h2>
        <p className="content-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit assumenda officiis delectus maiores harum, provident a.
        </p>
        <button className="content-button">
          Learn More
        </button>
      </div>
    </StyledCard>
  );
};


export default CardType1;
