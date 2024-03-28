"use client";

// import { ProductsData } from "@/app/constants/list";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Products = () => {
  // const response = await fetch("https://dummyjson.com/products");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        const productsArray = data.products || [];
        setProducts(productsArray);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          {/* <p className="text-lg text-primary">Top Selling Products for you</p> */}
          <h1 className="text-3xl font-bold text-primary">Top Selling Products for you</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            illo pariatur enim ex? Aspernatur ducimus odit doloremque officiis
            assumenda, numquam illum, deleniti nihil sequi facere earum
            voluptate in inventore officia.
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Card */}
          {products.map((product) => (
          <div className="rounded overflow-hidden shadow-lg flex flex-col" key={product.id}>
            <div className="relative">
              <a href="#">
                <Image
                  className="w-full h-full object-cover"
                  src={product.thumbnail}
                  alt="Sunset in the mountains"
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className="relative px-6 py-4 mb-auto">
              <p className="cursor-pointer font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                {product.title}
              </p>
              <p className="text-gray-500 text-sm">
                {product.description}
              </p>
              <a href="#">
                <div className="flex items-center text-xs absolute bottom-1 right-0 mt-3 mr-3 transition ease-in-out bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  View
                  <FaArrowRightLong className="ml-2" />
                </div>
              </a>
            </div>

            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>{product.rating}</span>
               
              </div>
              <div className="flex items-center gap-1">
              <span>&#8377;{product.price}</span>
                </div>
            </div>
          </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Products;
