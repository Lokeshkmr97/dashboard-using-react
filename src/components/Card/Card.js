import React from 'react';
import image1 from '../../asset/image1.png';
import image2 from '../../asset/image2.png';
import image3 from '../../asset/image3.png';
import image4 from '../../asset/image4.png';

const Card = () => {
    const cardData = [
        {
            id:1,
            title: "Earning",
            image:image1,
            amount: "$198k",
            percent: "37.8%",
            perStyle:{
                color:"green",
                fontWeight:"700"
            }
        },
        {   id:2,
            title: "Orders",
            image:image2,
            amount: "$2.4k",
            percent: "2%",
            perStyle:{
                color:"red",
                fontWeight:"700"
            }
        },
        {   id:3,
            title: "Balance",
            image:image3,
            amount: "$2.4k",
            percent: "2%",
            perStyle:{
                color:"red",
                fontWeight:"700"
            }
        },
        {   id:4,
            title: "Total Sales",
            image:image4,
            amount: "$89k",
            percent: "11%",
            perStyle:{
                color:"green",
                fontWeight:"700"
            }
        }
    ];

    const titleStyle={
        color:"grey"
    }
    const amountStyle={
        fontWeight:"900",
        fontSize:"18px"
    }

    return (
        <div className='main-cards'>
            {cardData.map((data, index) => (
                <div className='card' key={index}>
                    <div className='card-inner'>
                        <div className="card-icon">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="card-content">
                            <span style={titleStyle}>{data.title}</span>
                            <span style={amountStyle}>{data.amount}</span>
                            <span style={data.perStyle}>{data.percent} <h5>this month</h5></span>
                        </div>
                        
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
