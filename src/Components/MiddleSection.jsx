import React from 'react'
import Card from './Card';
import DummyText from './DummyText';

const MiddleSection = () => {
    return (
        <div className='mainContainer'>
            <div className='MiddleSectionContainer'>
                <DummyText />
                <div className='imgDiv'>
                    <div className="verticalLine"></div>
                    <img src="https://www.userlytics.com/wp-content/uploads/2022/09/tree-testing1.webp" alt="" />
                </div>
            </div>

            {/*  */}
            <div className='cardsContainer'>
                <h1>Challenges with lack of lead management</h1>
                <div className='cardDiv'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

                <div style={{ textAlign: 'left', width: '75%', margin: 'auto' }}>
                    <h1>What you can do with Bottom Funnel desk's free helpdesk software</h1>
                    <p style={{ fontWeight: '500' }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, non laborum id corrupti assumenda voluptate neque sit, quisquam recusandae doloribus beatae iste asperiores, quod quos? Ipsa doloribus nihil inventore reiciendis? Lorem, ipsum dolor sit ducimus iste totam sed, sapiente unde blanditiis nemo possimus quibusdam ullam quam voluptatum quisquam. Dolorum laboriosam quae quaerat saepe.
                    </p>
                </div>
            </div>

            {/*  */}
            <div className='gridContainer'>
                <img src="https://cc-prod.scene7.com/is/image/CCProdAuthor/Make%20efficient%20layout%20changes%20with%20Stacks_01-1?$png$&jpegSize=200&wid=800" alt="" />
                <DummyText />
                <DummyText />
                <img src="https://cc-prod.scene7.com/is/image/CCProdAuthor/Make%20efficient%20layout%20changes%20with%20Stacks_01-1?$png$&jpegSize=200&wid=800" alt="" />
                <img src="https://cc-prod.scene7.com/is/image/CCProdAuthor/Make%20efficient%20layout%20changes%20with%20Stacks_01-1?$png$&jpegSize=200&wid=800" alt="" />
                <DummyText />
                <DummyText />
                <img src="https://cc-prod.scene7.com/is/image/CCProdAuthor/Make%20efficient%20layout%20changes%20with%20Stacks_01-1?$png$&jpegSize=200&wid=800" alt="" />
            </div>

            {/*  */}

            <div className='greenDiv'>
                <h1>Get more complex help desk needs</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, non laborum id corrupti assumenda voluptate neque sit, quisquam recusandae doloribus beatae iste asperiores, quod quos? Ipsa doloribus nihil inventore reiciendis? Lorem, ipsum dolor sit ducimus iste totam sed.
                </p>
                <button>Lorem ipsum dolor sit amet consectetur</button>
            </div>

            {/*  */}

            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h1>Why 50,000+ Companies of all sizes choose Freshdesk</h1>
                <div className='cardDiv'>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <h1>Leading industry experts recommend Bottom Funnel desk</h1>
                <div className='bottomImgDiv'>
                    <img src="https://emtemp.gcom.cloud/ngw/globalassets/en/information-technology/images/covers/digitalization-content-hub-banner-image.png" alt="" />
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSib0fhEJTk7MGS0FrIDTAHinomxJ-h9D64yK0PMmy_XK8Ll7ZP" alt="" />
                    <img src="https://emtemp.gcom.cloud/ngw/globalassets/en/information-technology/images/covers/digitalization-content-hub-banner-image.png" alt="" />
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSib0fhEJTk7MGS0FrIDTAHinomxJ-h9D64yK0PMmy_XK8Ll7ZP" alt="" />
                </div>
            </div>
            {/*  */}

            <div className='footerContainer'>
                <h1>Give our free help desk system a try today</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, non laborum id corrupti assumenda voluptate neque sit, quisquam recusandae doloribus beatae iste asperiores, quod quos? Ipsa doloribus nihil inventore reiciendis? Lorem, ipsum dolor sit.
                </p>
                <button>Lorem ipsum </button>
            </div>

        </div>
    )
}

export default MiddleSection;