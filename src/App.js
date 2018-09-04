import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
  render() {
    var products = [
      {
        id: 1,
        name: "Iphone 8 64GB",
        image: "https://amp.businessinsider.com/images/5b6b59b02154a31d008b4cfe-750-500.jpg",
        price: "20.000.000",
        status: true
      },
      {
        id: 2,
        name: "Iphone 7 64GB",
        image: "https://amp.businessinsider.com/images/5b6b59b02154a31d008b4cfe-750-500.jpg",
        price: "25.000.000",
        status: false
      },
      {
        id: 3,
        name: "Iphone X",
        image: "https://amp.businessinsider.com/images/5b6b59b02154a31d008b4cfe-750-500.jpg",
        price: "35.000.000",
        status: true
      }
    ];
    let elements = products.map((products, index) => {
      let result = ''
      if (products.status) {
        result =
          <Product
            key={products.id}
            name={products.name}
            image={products.image}
            price={products.price}
          />
      }
      return result;
    });
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {elements}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
