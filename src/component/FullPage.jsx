import '../App.css';
import Group1 from '../images/Group_1.png';
import Coin from '../images/dollar 1.svg';
import banner from '../images/banner-main.png';
import { useEffect, useState } from 'react';
import SinglePage from './SinglePage';


const FullPage = () => {
    const [claim, setClaim] = useState(0); 
    const [totalBiddingPrice, setTotalBiddingPrice] = useState(0); 
   
    const sampleCount = claim - totalBiddingPrice;

    const [select, setSelect] = useState(true); 
    const [choose, setChoose] = useState([]); 
    const [countNumber, setCountNumber] = useState(0); 
    const [allData, setAllData] = useState([]); 

   
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setAllData(data));
    }, []);

    const claimCredit = () => {
        setClaim(claim + 600000);
        alert('credit added');
    };


    const handleChoosePlayer = (p) => {
        console.log(p)
        const playerPrice = parseInt(p.biddingPrice); 
        if (claim >= totalBiddingPrice + playerPrice) {
            
            setTotalBiddingPrice(totalBiddingPrice+ playerPrice); 
            setChoose([...choose, p]); 
            setCountNumber(countNumber + 1);
        } else {
            alert('Insufficient claim amount. Please claim more credit.');
        }
    };


    return (
        <div>
            <header className='container'>
                <nav className='nav-bar'>
                    <div><img src={Group1} alt="Group1" /></div>
                    <div className='nav-item'>
                        <h2>Home</h2>
                        <h2>Fixture</h2>
                        <h2>Teams</h2>
                        <h2>Schedules</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button style={{ display: 'flex', textAlign: 'center', alignItems: 'center', padding: '10px 20px', border: 'none', borderRadius: '8px' }}>
                                {sampleCount} Coin{' '}
                                <img style={{ marginLeft: '20px' }} src={Coin} alt="Coin" />
                            </button>
                        </div>
                    </div>
                </nav>

                <section className='main-section'>
                    <div className='main-section-item'>
                        <img src={banner} alt="Banner" />
                        <h2>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                        <h3>Beyond Boundaries Beyond Limits</h3>
                        <button onClick={claimCredit}>Claim Free Credit</button>
                    </div>
                </section>
            </header>

            <main className='container'>
                <section>
                 
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h1 style={{ color: 'black' }}>Available player</h1>
                        <div className='btn-conatiner'>
                            <button onClick={() => setSelect(true)}>Available</button>
                            <button onClick={() => setSelect(false)}>Selected <span>{countNumber}</span></button>
                        </div>
                    </div>
{/* select :true    */}
                    {select ? (
                        <div className='player-name'>
                            {allData.map(singleElement => (
                                <SinglePage
                                    key={singleElement.playerId}
                                    singleElement={singleElement}
                                    handleChoosePlayer={handleChoosePlayer}
                                    totalBiddingPrice={totalBiddingPrice}
                                />
                            ))}
                        </div>
                    ) : (
                        <section className='show-Select'>
                            {choose.map(newChoose => (
                                <div key={newChoose.playerId}>
                                    <p>{newChoose.playerId}</p>
                                    <p>{newChoose.name}</p>
                                    <h1>{newChoose.country}</h1>
                                    <h2>{newChoose.biddingPrice}</h2>
                                </div>
                            ))}
                        </section>
                    )}
                </section>
            </main>

            <footer>
                <div className='container'>
                    <div className='footer-content'>
                        <h2>Subscribe to our Newsletter</h2>
                        <h3>Get the latest updates and news right in your inbox!</h3>
                        <div className='footer'>
                            <input type="email" placeholder='Enter Your email:' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className='main-footer'>
                    <div className='container'>
                        <div className='footer-container'>
                            <div>
                                <h3>About Us</h3>
                                <h4>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</h4>
                            </div>
                            <div>
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>Home</li>
                                    <li>Service</li>
                                    <li>About</li>
                                    <li>Content</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Subscribe</h3>
                                <h4>Subscribe to our newsletter for the <br /> latest updates.</h4>
                                <div className='new-footer'>
                                    <input type="email" placeholder='Enter Your email:' />
                                    <button style={{borderRadius:'10px', backgroundColor:'#E7FE29'}}>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FullPage;