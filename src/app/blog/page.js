"use client";
import { useState } from "react";
import Quote from "./../assets/images/quotes.png";
import Stone from "../assets/images/stone.jpeg"
import Image from "next/image";
import Link from 'next/link';
import Pagination from "react-js-pagination";
import BlogBox from "./blogBox";
// require("bootstrap/less/bootstrap.less");

import "./styles.scss"

export default function Blog() {
  const [pageNumber, setPageNumber] = useState(1)

  return (
    <div className="blogContainer">
       <Image src={Quote} className="quoteImageStyle" alt="quoteImage img-fluid" />
      <BlogBox length={5} />

      <div className="row pagination">
        <Pagination
          activePage={pageNumber}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={7}
          onChange={(pageNumber) => setPageNumber(pageNumber)}
          hideFirstLastPages={true}
        />
      </div>
    </div>
  )
}
