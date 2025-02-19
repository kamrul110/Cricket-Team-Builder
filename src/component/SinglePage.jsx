const SinglePage = ({ singleElement, handleChoosePlayer, claim, totalBiddingPrice }) => {
    const playerPrice = parseInt(singleElement.biddingPrice);
   

    return (
        <div>
            <div className='player-info'>
                <div className='player-img'><img src={singleElement.image} alt={singleElement.name} /></div>
                <h2>Name: {singleElement.name}</h2>
                <h3>Country: India</h3>
                <hr />
                <h4>Batting Type: {singleElement.battingType}</h4>
                <h5>Price: {singleElement.biddingPrice}</h5>
                <button
                    className="Choose-player-btn"
                    onClick={() => handleChoosePlayer(singleElement)}
                    disabled={isDisabled}
                >
                    Choose Player
                </button>
            </div>
        </div>
    );
};
export default SinglePage;

















//for testing 
// const isDisabled = claim < totalBiddingPrice + playerPrice;
{/* <button
                    className="Choose-player-btn"
                    onClick={() => handleChoosePlayer(singleElement)}
                    disabled={isDisabled}
                >
                    Choose Player
                </button> */}