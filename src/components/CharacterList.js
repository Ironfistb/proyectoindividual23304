import React from "react";

const CharacterList = ({ characters }) => {
  return (
    <div className="container">
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card" style={{ minWidth: "200px" }}>
              <img className="card-img-top" src={item.image} alt="character" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr />
                <p className="card-text">Especie: {item.species}</p>
                <p className="card-text">Procedencia: {item.location.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
