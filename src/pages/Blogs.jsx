import React from "react";
import ConnectUs from "../components/common/ConnectUs";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogs_data = [
    {
      title: "Refurbished vs. New Laptops: Which One Should You Buy?",
      description:
        "Choosing between a refurbished and a new laptop can be a tricky decision. Each option has its own benefits and drawbacks, depending on your budget, needs, and usage. In this blog, we’ll compare the two and help you decide which one is the best choice for you.",
      created_at: "2nd February 2025",
      image: "/img/laptop.png",
    },
    {
      title: "Refurbished vs. New Laptops: Which One Should You Buy?",
      description:
        "Choosing between a refurbished and a new laptop can be a tricky decision. Each option has its own benefits and drawbacks, depending on your budget, needs, and usage. In this blog, we’ll compare the two and help you decide which one is the best choice for you.",
      created_at: "2nd February 2025",
      image: "/img/laptop.png",
    },
    {
      title: "Refurbished vs. New Laptops: Which One Should You Buy?",
      description:
        "Choosing between a refurbished and a new laptop can be a tricky decision. Each option has its own benefits and drawbacks, depending on your budget, needs, and usage. In this blog, we’ll compare the two and help you decide which one is the best choice for you.",
      created_at: "2nd February 2025",
      image: "/img/laptop.png",
    },
  ];
  return (
    <section className="container">
      <div role="presentation" className="bread-crumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/">
            Home
          </Link>
          <p>Blogs</p>
        </Breadcrumbs>
      </div>
      <div className="blogs-container">
        <div className="blog-title">
          <h1>Blogs</h1>
          <p className="white-shine">
            Latest news, trends & inshights about TechMarket
          </p>
        </div>

        <div className="blogs-grid">
          {blogs_data?.map((blog, index) => (
            <div className="blog-card" key={index}>
              <div className="img-container">
                <img src={blog?.image} alt="" />
              </div>

              <div className="content">
                <h4>{blog?.title}</h4>
                <p className="line-clamp-2">{blog?.description}</p>

                <div className="bottom-section">
                  <span className="read-more">Read More</span>
                  <span>{blog?.created_at}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ConnectUs />
    </section>
  );
};

export default Blogs;
