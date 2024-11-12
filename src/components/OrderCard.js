import React from 'react';
import './OrderCard.css';

// Importing images from the local images folder
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
import pic5 from '../images/pic5.jpg';
import pic6 from '../images/pic6.jpg';

const OrderCard = () => {
    const newsItems = [
        {
            image: pic1, // Use imported images
            title: 'Formula 1: Latest Race Results',
            subtitle: 'Monaco Grand Prix Highlights',
            content: 'Max Verstappen secures another victory in an exciting race through the streets of Monaco.',
            link: 'https://youtu.be/YkF4Yrv7j-M?si=6583Bsp3cCNlG9W5' // Replace with actual YouTube link
        },
        {
            image: pic2,
            title: 'Team Updates',
            subtitle: 'Mercedes Reveals New Upgrades',
            content: 'Mercedes brings significant aerodynamic updates for the upcoming race weekend.',
            link: 'https://youtu.be/YkF4Yrv7j-M?si=6583Bsp3cCNlG9W5'
        },
        {
            image: pic3,
            title: 'Driver Market News',
            subtitle: 'Contract Negotiations Update',
            content: 'Several teams in talks with drivers for the upcoming season.',
            link: 'https://youtu.be/YkF4Yrv7j-M?si=6583Bsp3cCNlG9W5'
        },
        {
            image: pic4,
            title: 'Technical Analysis',
            subtitle: 'New Regulations Impact',
            content: 'How teams are adapting to the latest technical regulations.',
            link: 'https://youtu.be/YkF4Yrv7j-M?si=6583Bsp3cCNlG9W5'
        },
        {
            image: pic5,
            title: 'Race Preview',
            subtitle: 'Next Grand Prix Preview',
            content: 'What to expect in the upcoming race weekend.',
            link: 'https://youtu.be/YkF4Yrv7j-M?si=6583Bsp3cCNlG9W5'
        },
        {
            image: pic6,
            title: 'Historical Moments',
            subtitle: 'Legendary Races',
            content: 'Remembering the most iconic moments in F1 history.',
            link: 'https://youtu.be/YkF4Yrv7j-M?si=6583Bsp3cCNlG9W5'
        }
    ];

    return (
        <div className="news-container">
            <div className="news-grid">
                {newsItems.map((news, index) => (
                    <div key={index} className="news-box">
                        <img src={news.image} alt={news.title} className="news-image" />
                        <div className="news-content">
                            <h3>{news.title}</h3>
                            <h4>{news.subtitle}</h4>
                            <p>{news.content}</p>
                            <a href={news.link} target="_blank" rel="noopener noreferrer">
                                <button className="read-more-btn">Read More</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderCard;