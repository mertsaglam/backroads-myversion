import React from 'react'

const TourCard = (props) => {
    const {id,name,info,image,date,country,days,price} = props;
  
  return (
    <div>
      <article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={image} className="tour-img" alt="" />
            <p className="tour-date">{date} </p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{name}</h4>
            </div>
            <p>
              {info}
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                {country}
              </p>
              <p>{days}</p>
              <p>{price}</p>
            </div>
          </div>
        </article>
    </div>
  )
}

export default TourCard
