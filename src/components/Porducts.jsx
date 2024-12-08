import { Card, Button } from "react-bootstrap";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../reduxToolKit/productSlice";
import { addToCart } from "../reduxToolKit/cartSlice";
function Porducts() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products); //array
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="product" style={{ marginTop: "100px" }}>
      <div className="line">
        {product.map((pro) => (
          <div className="boxx" key={pro.id}>
            <Card style={{ width: "18rem", padding: "10px" }}>
              <Card.Img id="imageProduct" variant="top" src={pro.image} />
              <Card.Body>
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <h6>{pro.price} $</h6>
                <Button
                  variant="primary"
                  onClick={() => dispatch(addToCart(pro))}
                >
                  Add To Card
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Porducts;
