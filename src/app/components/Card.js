// src/app/components/Card.js
const Card = ({ card, onClick, isMatched }) => {
    return (
        <div className={`card ${isMatched || card.isFlipped ? 'flipped' : ''}`} onClick={onClick}>
            {(isMatched || card.isFlipped) ? (
                <div className="card-content">
                    <img src={card.img} alt="card" />
                    {isMatched && <div className="overlay"><span className="checkmark">✓</span></div>}
                </div>
            ) : (
                <div className="cover">?</div>
            )}
        </div>
    );
};

export default Card;

