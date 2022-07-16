import {
  Row,
  Col,
  Card,
  Collapse,
  CardTitle,
  Alert,
  CardText,
  Button,
} from "reactstrap";
import { useState } from "react";

const ItemPage = ({ item }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {item && (
        <Row>
          <Col sm="3" className="pt-5 pl-5">
            <Card className=" box-shadow">
              <div className="card-body">
                <CardTitle className="card-title">
                  Buy this {item.ProductName}
                </CardTitle>
                <strong>{item.ProductName}</strong>
                <p className="card-text mt-20">{item.Description}</p>
              </div>
              <Button
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                Start Checkout
              </Button>
            </Card>
          </Col>
        </Row>
      )}
      <Collapse horizontal isOpen={visible}>
        <Alert
          style={{
            width: "500px",
          }}
        >
          Added to Cart
          {JSON.stringify(item, null, 2)}
        </Alert>
      </Collapse>
    </>
  );
};

export default ItemPage;
