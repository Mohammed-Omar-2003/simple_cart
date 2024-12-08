import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteProduct } from "../reduxToolKit/cartSlice";
function Cart() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.cart);
  const totalPrice = product.reduce((fe, se) => {
    return (fe = fe + se.price *se.quantiy);
  }, 0);
  return (
    <div className="cart">
      <h1>All Porducts</h1>
      <div>Total Price : {totalPrice}</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Title </th>
            <th>Imge</th>
            <th>Prise</th>
            <th>Quantiy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((ele, i) => (
            <tr key={ele.id}>
              <td>{i + 1}</td>
              <td>{ele.title}</td>
              <td>
                <img
                  src={ele.image}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{ele.price} $</td>
              <td>{ele.quantiy}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteProduct(ele))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="danger" onClick={() => dispatch(clear())}>
        Delete All product
      </Button>
    </div>
  );
}

export default Cart;
