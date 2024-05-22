import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import styles from "../../Components/Products/Products.module.scss";
import axios from "axios";

const Bascet = () => {
  const [data, setData] = useState([]);
  

  const getData = () => {
    axios
      .get(`https://664c587c35bbda10987ff83d.mockapi.io/Basket`)
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteItem = (id) => {
    axios
      .delete(`https://664c587c35bbda10987ff83d.mockapi.io/Basket/${id}`)
      setTimeout(() => {
        getData()
      }, 500);
  };

  return (
    <div>
      <Header />
      <Hero />

      <section className={styles.products}>
        <div className={styles.productsContainer}>
          <div className={styles.productsContainerTitle}>
            <h1>bascet</h1>
          </div>
          <div className={styles.productsContainerBottom}>
            {data.map((item) => (
              <div className={styles.productsCards} key={item.id}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.category}</p>
                <span>{item.price}$</span>
                <button onClick={() => deleteItem(item.id)}>sil</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bascet;
