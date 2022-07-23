import React, { useState } from "react";
import CartModal from "./CartModal/CartModal";
import Card from "../Common Components/Card/Card";
import image from "../../assets/supplement-facts.PNG";
import styles from "./Catalog.module.css";

export default function Catalog() {
  const [cartClicked, setCartClicked] = useState(false);

  const allProducts = [
    {
      id: 1,
      title: "African Mango Drops",
      price: 8.95,
      packaging: "Blue Boston Round Glass Bottle w/dropper.",
      dimensions: "2'' x 4''",
      labelDetails: {
        suggestions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi. Duis viverra massa a elit elementum, eget euismod nibh tempus",
        cautions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi. Duis viverra massa a elit elementum, eget euismod nibh tempus",
        authorityNote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi.",
        description: "Lorem ipsum dolor sit amet",
        supplementFactsImage: image,
      },
    },

    {
      id: 2,
      title: "African Mango Drops",
      price: 8.95,
      packaging: "Blue Boston Round Glass Bottle w/dropper.",
      dimensions: "2'' x 4''",
      labelDetails: {
        suggestions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi. Duis viverra massa a elit elementum, eget euismod nibh tempus.",
        cautions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi. Duis viverra massa a elit elementum, eget euismod nibh tempus.",
        authorityNote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi.",
        description: "Lorem ipsum dolor sit amet",
        supplementFactsImage: image,
      },
    },

    {
      id: 3,
      title: "African Mango Drops",
      price: 8.95,
      packaging: "Blue Boston Round Glass Bottle w/dropper.",
      dimensions: "2'' x 4''",
      labelDetails: {
        suggestions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi. Duis viverra massa a elit elementum, eget euismod nibh tempus.",
        cautions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi. Duis viverra massa a elit elementum, eget euismod nibh tempus.",
        authorityNote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi.",
        description: "Lorem ipsum dolor sit amet",
        supplementFactsImage: image,
      },
    },

    {
      id: 4,
      title: "African Mango Drops",
      price: 8.95,
      packaging: "Blue Boston Round Glass Bottle w/dropper.",
      dimensions: "2'' x 4''",
      labelDetails: {
        suggestions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi. Duis viverra massa a elit elementum, eget euismod nibh tempus.",
        cautions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi. Duis viverra massa a elit elementum, eget euismod nibh tempus.",
        authorityNote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi.",
        description: "Lorem ipsum dolor sit amet",
        supplementFactsImage: image,
      },
    },
    {
      id: 5,
      title: "African Mango Drops",
      price: 8.95,
      packaging: "Blue Boston Round Glass Bottle w/dropper.",
      dimensions: "2'' x 4''",
      labelDetails: {
        suggestions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi. Duis viverra massa a elit elementum, eget euismod nibh tempus.",
        cautions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi. Duis viverra massa a elit elementum, eget euismod nibh tempus.",
        authorityNote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi.",
        description: "Lorem ipsum dolor sit amet",
        supplementFactsImage: image,
      },
    },
    {
      id: 6,
      title: "African Mango Drops",
      price: 8.95,
      packaging: "Blue Boston Round Glass Bottle w/dropper.",
      dimensions: "2'' x 4''",
      labelDetails: {
        suggestions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi. Duis viverra massa a elit elementum, eget euismod nibh tempus.",
        cautions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi. Duis viverra massa a elit elementum, eget euismod nibh tempus.",
        authorityNote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi.",
        description: "Lorem ipsum dolor sit amet",
        supplementFactsImage: image,
      },
    },

    {
      id: 7,
      title: "African Mango Drops",
      price: 8.95,
      packaging: "Blue Boston Round Glass Bottle w/dropper.",
      dimensions: "2'' x 4''",
      labelDetails: {
        suggestions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi. Duis viverra massa a elit elementum, eget euismod nibh tempus.",
        cautions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi. Duis viverra massa a elit elementum, eget euismod nibh tempus.",
        authorityNote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi.",
        description: "Lorem ipsum dolor sit amet",
        supplementFactsImage: image,
      },
    },

    {
      id: 8,
      title: "African Mango Drops",
      price: 8.95,
      packaging: "Blue Boston Round Glass Bottle w/dropper.",
      dimensions: "2'' x 4''",
      labelDetails: {
        suggestions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi. Duis viverra massa a elit elementum, eget euismod nibh tempus.",
        cautions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi. Duis viverra massa a elit elementum, eget euismod nibh tempus.",
        authorityNote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sem id erat varius consequat. Phasellus sit amet maximus nisi.",
        description: "Lorem ipsum dolor sit amet",
        supplementFactsImage: image,
      },
    },
  ];

  const [products, setProducts] = useState(allProducts);

  return (
    <div className={styles.main}>
      <h3 className={styles.heading}>CATALOG</h3>
      <div className={styles.products}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <Card product={product} setCartClicked={setCartClicked} />
            </div>
          ))
        ) : (
          <span>No products yet!</span>
        )}
      </div>

      {cartClicked && <CartModal setCartClicked={setCartClicked} />}
    </div>
  );
}
