import React, { useState } from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import Container from "../Components/Container";
import { IoChevronBack } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { VscListSelection } from "react-icons/vsc";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { MdKeyboardArrowUp } from "react-icons/md";
import AllProducts from "../Components/AllProducts";

const Catalog = () => {
  const [itemsPerPage, setItemsPerPage] = useState(35);
  const [sortBy, setSortBy] = useState("Position");
  const [show, setShow] = useState("Position");

  return (
    <div className=" font-poppins pb-10">
      <Container>
        <div className="banner"></div>
        <Breadcrumbs />
      </Container>

      <Container>
        <div className=" grid grid-cols-6 gap-10 items-start">
          <div className=" col-span-1 w-[235px] mt">
            <div className="h-[50px]  flex justify-center items-center">
              <h2 className=" font-poppins text-14 font-semibold flex gap-1 items-center">
                <IoChevronBack className=" text-13" /> Back
              </h2>
            </div>
            {/*  */}

            <div className=" bg-gray py-3  px-3 mt-1">
              <h2 className=" w-full justify-center items-center flex text-[16px] font-poppins font-semibold ">
                Filters
              </h2>
              <button className="mt-2 text-gray_2 font-poppins py-[6px] border border-gray_2 rounded-full w-full">
                Clear Filter
              </button>

              <div className=" mt-4">
                <div className=" flex justify-between items-center">
                  <h2 className=" font-semibold">Category</h2>
                  <MdKeyboardArrowUp className=" rotate-180" />
                </div>
                {/*  */}
                <div className=" mt-2 text-13 font-light">
                  <ul className=" uppercase flex flex-col gap-1">
                    <li className=" flex justify-between items-center">
                      custom pcs<span>15</span>
                    </li>
                    <li className=" flex justify-between items-center">
                      MSI ALL-IN-ONE PCS<span>45</span>
                    </li>
                    <li className=" flex justify-between items-center">
                      HP/COMPAQ PCS<span>1</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <h2 className=" font-semibold">Price</h2>
                  <MdKeyboardArrowUp className=" rotate-180" />
                </div>
                {/*  */}
                <div className=" mt-2 text-13 font-light">
                  <ul className=" uppercase flex flex-col gap-1">
                    <li className=" flex justify-between items-center">
                      $0.00 - $1,000.00<span>19</span>
                    </li>
                    <li className=" flex justify-between items-center">
                      $1,000.00 - $2,000.00<span>21</span>
                    </li>
                    <li className=" flex justify-between items-center">
                      $2,000.00 - $3,000.00<span>9</span>
                    </li>
                    <li className=" flex justify-between items-center">
                      $3,000.00 - $4,000.00<span>6</span>
                    </li>
                    <li className=" flex justify-between items-center">
                      $4,000.00 - $5,000.00<span>3</span>
                    </li>
                    <li className=" flex justify-between items-center">
                      $5,000.00 - $6,000.00<span>1</span>
                    </li>
                    <li className=" flex justify-between items-center">
                      $6,000.00 - $7,000.00<span>1</span>
                    </li>
                    <li className=" flex justify-between items-center">
                      $7,000.00 And Above<span>1</span>
                    </li>
                  </ul>
                </div>
                {/*  */}
                <div className="mt-4 flex justify-between items-center">
                  <h2 className=" font-semibold">Color</h2>
                  <MdKeyboardArrowUp className=" rotate-180" />
                </div>
                {/*  */}
                <div className=" flex gap-2 mt-1">
                  <div className=" border-2 w-[30px] h-[30px] flex justify-center items-center border-primary rounded-full">
                    <div className=" bg-red h-[23px] w-[23px] rounded-full"></div>
                  </div>
                  <div className=" bg-green h-[23px] w-[23px] rounded-full"></div>
                  <div className=" bg-black h-[23px] w-[23px] rounded-full"></div>
                </div>
                {/*  */}
                <div className="mt-4 flex justify-between items-center">
                  <h2 className=" font-semibold">Filter Name</h2>
                  <MdKeyboardArrowUp className=" rotate-180" />
                </div>
                <button className="mt-2 bg-primary text-white font-poppins py-[6px] rounded-full w-full">
                  Apply filters (2)
                </button>
                {/*  */}
              </div>
            </div>

            {/* Brand Filter */}
            <div className=" mt-2 bg-gray w-full py-3 px-3">
              <h2 className=" w-full justify-center items-center flex text-[16px] font-poppins font-semibold ">
                Brands
              </h2>
              <button className="mt-2 text-gray_2 font-poppins py-[6px] border border-gray_2 rounded-full w-full">
                All Brands
              </button>
              {/* Brands Logo  */}
              <div className="mt-2 ">
                <div className=" grid grid-cols-2">
                  <div>
                    <img
                      className="mix-blend-multiply cursor-pointer"
                      src="/logo/Roccat.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="mix-blend-multiply cursor-pointer"
                      src="/logo/Msi.png"
                      alt=""
                    />
                  </div>
                </div>
                {/*  */}
                <div className=" grid grid-cols-2">
                  <div>
                    <img
                      className="mix-blend-multiply cursor-pointer"
                      src="/logo/tharmaltake.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="mix-blend-multiply cursor-pointer"
                      src="/logo/Adata.png"
                      alt=""
                    />
                  </div>
                </div>
                {/*  */}
                <div className=" grid grid-cols-2">
                  <div>
                    <img
                      className="mix-blend-multiply cursor-pointer"
                      src="/logo/HP.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="mix-blend-multiply cursor-pointer"
                      src="/logo/Gigabyte.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Compare Products */}

            <div className=" mt-2 bg-gray w-full py-3 px-3">
              <h2 className=" w-full justify-center items-center flex text-[16px] font-poppins font-semibold ">
                Compare Products
              </h2>
              <p className=" text-[11px] text-center mt-2">
                You have no items to compare.
              </p>
            </div>

            {/* Compare Products */}

            <div className=" mt-2 bg-gray w-full py-3 px-3">
              <h2 className=" w-full justify-center items-center flex text-[16px] font-poppins font-semibold ">
                My Whis List
              </h2>
              <p className=" text-[11px] text-center mt-2">
                You have no items in your wish list.
              </p>
            </div>
            {/* Ad Imgae */}
            <div className=" mt-2">
              <img src="/Ad.png" alt="" />
            </div>
            {/* end */}
          </div>

          {/*  */}
          <div className=" col-span-5 ">
            <div className=" flex justify-between items-center h-full px-2">
              <div>
                <h2 className=" text-gray_2">Items 1-35 of 61</h2>
              </div>
              <div className=" flex gap-3">
                <div className=" border border-gray_2  py-[11px] px-4">
                  <label className=" text-gray_2" htmlFor="sort-by">
                    Sort by:{" "}
                  </label>
                  <select
                    className=" outline-none"
                    id="sort-by"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="Position">Position</option>
                    <option value="Price">Price</option>
                    <option value="Rating">Rating</option>
                  </select>
                </div>
                <div className=" border border-gray_2 py-[11px] px-4">
                  <label className=" text-gray_2" htmlFor="sort-by">
                    Show:
                  </label>
                  <select
                    id="sort-by"
                    value={show}
                    onChange={(e) => setShow(e.target.value)}
                  >
                    <option value="Position">12 per Page</option>
                    <option value="Price"> 24 Per Page</option>
                    <option value="Rating">48 Per Page</option>
                  </select>
                </div>

                <div className=" flex gap-3 items-center text-[20px]">
                  <div>
                    <RiLayoutGrid2Fill />
                  </div>
                  <div>
                    <VscListSelection />
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className=" h-[38px] w-full bg-gray mt-[10px]"></div>
            {/*All Product */}
            <AllProducts/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Catalog;
