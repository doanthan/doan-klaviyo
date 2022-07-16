import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";
import { ITEM_LIST } from "data/items";

import Item from "components/Item";

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

const ItemPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const item = ITEM_LIST.find((item) => item.ProductID === id);

  return <Item item={item} />;
};

export default ItemPage;
