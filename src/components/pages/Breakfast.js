import React from 'react';
import './Breakfast.css';
import menuData from '../menuData';
import Footer from '../Footer'; 

function Breakfast() {
  return (
    <div className="menu-container">
          <h1>Breakfast</h1>
          {Object.entries(menuData["Breakfast"]).map(([sectionTitle, section]) => (
            <section className="menu-section" key={sectionTitle}>
              <h2>{sectionTitle}</h2>
              <div className="section-description">{section.description}</div>
              {Array.isArray(section.items) ? (
                <div className="menu-column">
                  {section.items.map((item, index) => (
                    <div key={index} className="menu-item">
                      <div className="item-details">
                        <span className="item-name">{item.name}</span>
                        <span className="dotted-line"></span>
                        <span className="item-price">{item.price}</span>
                      </div>
                      <div className="item-description">{item.description}</div>
                      {item.additions && item.additions.map((addition, subIndex) => (
                        <div className="addition" key={subIndex}>
                          <span className="addition-name">{addition.name}</span>
                          <span className="addition-price">{addition.price}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="menu-row">
                  <div className="menu-column">
                    {section.left.map((item, index) => (
                      <div key={index} className="menu-item">
                        {item.title &&( 
                          <div className='item-title-container'>
                            <h2 className="item-title">{item.title}</h2>
                            <div className="item-subtitle">{item.subtitle}</div>
                          </div>
                        )}
                        {item.name && (
                        <div className="item-details">
                          <span className="item-name">{item.name}</span>
                          {item.price && (
                            <span className="dotted-line"></span>
                          )}
                          <span className="item-price">{item.price}</span>
                        </div>
                        )}
                        <div className="item-description">{item.description}</div>
                        {item.additions && item.additions.map((addition, subIndex) => (
                          <div className="addition" key={subIndex}>
                            <span className="addition-name">{addition.name}</span>
                            <span className="addition-price">{addition.price}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="menu-column">
                    {section.right.map((item, index) => (
                      <div key={index} className="menu-item">
                        {item.title &&(  
                          <div className='item-title-container'>
                            <h2 className="item-title">{item.title}</h2>
                            <div className="item-subtitle">{item.subtitle}</div>
                          </div>
                        )}
                        {item.name && (
                        <div className="item-details">
                          <span className="item-name">{item.name}</span>
                          {item.price && (
                            <span className="dotted-line"></span>
                          )}
                          <span className="item-price">{item.price}</span>
                        </div>
                        )}
                        <div className="item-description">{item.description}</div>
                        {item.additions && item.additions.map((addition, subIndex) => (
                          <div className="addition" key={subIndex}>
                            <span className="addition-name">{addition.name}</span>
                            <span className="addition-price">{addition.price}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          ))}
      <div className='Liability-section'>
        *Prices Subject to Change*
      </div>
      <div className='footer-section'>
        <Footer />
      </div>
    </div>
  );
}

export default Breakfast;
