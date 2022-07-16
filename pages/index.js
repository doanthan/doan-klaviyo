import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button, Input, Col, InputGroup, Form } from "reactstrap";
import { ITEM_LIST } from "data/items";
import { useState, useEffect } from "react";

export default function Home() {
  const [_learnq, setLearnq] = useState([]);
  useEffect(() => {
    var _learnq = window._learnq || [];
    _learnq.push([
      "identify",
      {
        // Change the line below to dynamically print the user's email.
        $email: "doanthan@gmail.com",
        george: "George",
        test: "Washington",
      },
    ]);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.currentTarget.elements.email.value);
    console.log(_learnq);
    _learnq.push([
      "identify",
      {
        // Change the line below to dynamically print the user's email.
        $email: event.currentTarget.elements.email.value,
        george: "George",
        test: "Washington",
      },
    ]);
  }
  return (
    <>
      <div className={styles.container}>
        <div className="text-center mt-40">
          <h1>Doan's Demo {ITEM_LIST.length}</h1>
        </div>
        <Form className="pb-3" onSubmit={handleSubmit}>
          <InputGroup>
            <Input placeholder="Email" name="email" id="email"></Input>
            <Button type="submit">Identify</Button>
          </InputGroup>
        </Form>
        <div className="mt-40 row">
          {ITEM_LIST.map((item) => {
            return (
              <Col key={item.ProductID}>
                <div className="card box-shadow">
                  {item && (
                    <img
                      src={`/images/${item.img}.jpeg`}
                      className="card-img-top"
                      alt="..."
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">Buy this {item.ProductName}</h5>
                    <strong>{item.ProductName}</strong>
                    <p className="card-text mt-20">{item.Description}</p>
                    <Link href={`/item/${item.ProductID}`}>
                      <a>
                        <Button color="primary">Check it out</Button>
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </div>
        <div className="mt-40 pt-3 row">
          <div className="col">
            <div className="card box-shadow">
              <img
                src="/images/art-science-eng.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Use Case 1</h5>
                <strong>Data Cleansing & Cool Personalisation</strong>
                <p className="card-text mt-20">
                  Using Google Maps API and OpenWeatherAPI, we cleanse a
                  profile's address attributes and use the information to send
                  hyper personalised messages from Klaviyo.
                </p>
                <Link href="/UseCase1">
                  <a>
                    <Button color="primary">Go to Use Case 1</Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card box-shadow">
              <img
                src="/images/prince-of-persia.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Use Case 2</h5>
                <strong>Distributed Marketing</strong>
                <p className="card-text mt-20">
                  In a distributed marketing model, multiple marketeers in
                  different regions run their own campaigns and add to their own
                  regional lists. This use case presents a portal where a
                  marketeer can add profiles to their own list without having to
                  enter the Klaviyo product.
                </p>
                <Link href="/UseCase2">
                  <a>
                    <Button color="primary">Go to Use Case 2</Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card box-shadow">
              <img
                src="/images/working-in-public.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Use Case 3</h5>
                <strong>External Customer Support Page</strong>
                <p className="card-text mt-20">
                  It could be useful for customer support agents to retrieve
                  events from Klaviyo in real time to help with support case
                  issues. They usually would not be given access to the Klaviyo
                  platform- this use case provides a page to access events
                  collected by Klaviyo, and information about the customer.
                </p>
                <Link href="/UseCase3">
                  <a>
                    <Button color="primary">Go to Use Case 3</Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
