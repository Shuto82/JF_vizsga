import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export const SingleProduct = ({
  id,
  title,
  category,
  description,
  price,
  thumbnail,
}) => {
  return (
    <div>
      <Card
        style={{
          width: "19rem",
          height: "100%",
        }}
      >
        <img
          alt={title}
          src={thumbnail}
          className="img-thumbnail"
          style={{ maxHeight: "15rem" }}
        />
        <CardBody
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {category}
          </CardSubtitle>
          <CardText>{description}</CardText>
          <CardText>Price: € {price}</CardText>
          <Button className="bg-primary">Add to Cart</Button>
        </CardBody>
      </Card>
    </div>
  );
};
