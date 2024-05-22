import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import axios from "axios";
import styles from "../../Components/Products/Products.module.scss";

const Wishlist = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(`https://664c587c35bbda10987ff83d.mockapi.io/Wishlist`)
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteItem = (id) => {
    axios.delete(`https://664c587c35bbda10987ff83d.mockapi.io/Wishlist/${id}`);
    setTimeout(() => {
      getData();
    }, 1000);
  };

  return (
    <div>
      <Header />
      <Hero />

      <section className={styles.products}>
        <div className={styles.productsContainer}>
          <div className={styles.productsContainerTitle}>
            <h1>wishlist</h1>
          </div>
          <div className={styles.productsContainerBottom}>
            {data &&
              data.map((item) => (
                <>
                  <div className={styles.productsCards} key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                    <span>{item.price}$</span>
                    <button onClick={() => deleteItem(item.id)}>sil</button>
                  </div>
                </>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
