// import React, { useEffect } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";

// import { Container, Row, Col } from "reactstrap";
// import { ITEM_LIST } from "data/items";

// import Item from "components/Item";

// const ItemPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   console.log(id);

//   const item = ITEM_LIST.find((item) => item.ProductID === id);

//   return (
//     <>
//       <Row>
//         <Col sm="3" className="pt-5 pl-5">
//           <Card className=" box-shadow">
//             <img
//               src={`/images/${item?.img}.jpeg`}
//               className="card-img-top"
//               alt="..."
//             />
//             <div className="card-body">
//               <CardTitle className="card-title">
//                 Buy this {item.ProductName}
//               </CardTitle>
//               <strong>{item.ProductName}</strong>
//               <p className="card-text mt-20">{item.Description}</p>
//             </div>
//             <Button
//               onClick={() => {
//                 setVisible(!visible);
//               }}
//             >
//               Start Checkout
//             </Button>
//           </Card>
//         </Col>
//       </Row>

//       <Collapse horizontal isOpen={visible}>
//         <Alert
//           style={{
//             width: "500px",
//           }}
//         >
//           Added to Cart
//           {JSON.stringify(item, null, 2)}
//         </Alert>
//       </Collapse>
//     </>
//   );
// };

// export default ItemPage;
