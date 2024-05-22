import React, { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getData = () => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const addToBasket = (item) => {
    axios
      .post("https://664c587c35bbda10987ff83d.mockapi.io/Basket", item)
      .then((res) => {
        console.log("basket", res.data);
      });
  };

  const addToWishlist = (item) => {
    axios.get('https://664c587c35bbda10987ff83d.mockapi.io/Wishlist')
    .then((res) => {
      const db = res.data;
      const existingData = db.find((x) => x.id === item.id);
      if (existingData) {
        alert('Item is already in the wishlist.');
      } else {
        axios.post('https://664c587c35bbda10987ff83d.mockapi.io/Wishlist', item)
          .then(() => {
            alert('Item added to the wishlist.');
          })
          .catch((error) => {
           
          });
      }
    })
    .catch((error) => {
      console.error('Error fetching wishlist:', error);
      alert('Failed to fetch wishlist.');
    });
};


  const sortProductsAZ = () => {
    const sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));
    setData(sortedData);
  };
  const sortDataZA = () => {
    const sortedData = [...data].sort((a, b) => b.title.localeCompare(a.title));
    setData(sortedData);
  };

  const handleSearchChange = (item) => {
    setSearchTerm(item.target.value);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section className={styles.products}>
        <div className={styles.input}>
          <button onClick={sortProductsAZ}>a-z</button>
          <button onClick={sortDataZA}>z-a</button>
          <input
            type="text"
            placeholder="axtar"
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.productsContainer}>
          <div className={styles.productsContainerTitle}>
            <h1>FEATURED PROPERTIES</h1>
            <p>See our best offers</p>
          </div>
          <div className={styles.productsContainerBottom}>
            {filteredData.map((item) => (
              <div className={styles.productsCards} key={item.id}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.category}</p>
                <span>{item.price}$</span>
                <button onClick={() => addToBasket(item)}>Add to Basket</button>
                <button onClick={() => addToWishlist(item)}>Add wish</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
