import React, { useRef } from "react";
import Container from "../Components/Container";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const TermsConditions = () => {


    const scrollToSection = (event, sectionId) => {
      event.preventDefault();
      const container = document.getElementById("contentContainer");
      const section = document.getElementById(sectionId);
      if (container && section) {
        container.scrollTo({
          top: section.offsetTop - container.offsetTop,
          behavior: "smooth",
        });
      }
    };
 

  const pathname = window.location.pathname;
  // Split the pathname into individual parts and decode them
  const pathParts = pathname
    .split("/")
    .filter((part) => part)
    .map((part) => decodeURIComponent(part));

  

  return (
    <div>
      <Container>
        <div className="font-poppins text-[12px] pb-5 text-black ">
          <ul className="flex items-center gap-1  py-[21px]">
            {/* Home Link */}
            <li>
              <Link
                to="/"
                className="font-poppins text-[12px] text-black hover:underline"
              >
                Home
              </Link>
              {/* Separator */}
            </li>
            <IoIosArrowForward className=" text-black" />
            {/* Dynamic Path Links */}
            {pathParts.map((part, index) => {
              // Build the path to link to the breadcrumb
              const path = `/${pathParts.slice(0, index + 1).join("/")}`;
              // Check if it's the last part of the path (current page)
              const isLast = index === pathParts.length - 1;

              return (
                <li key={index} className="flex items-center">
                  {/* Conditional rendering for last breadcrumb */}
                  {!isLast ? (
                    <>
                      <Link to={path} className="text-primary hover:underline">
                        {part.charAt(0).toUpperCase() +
                          part.slice(1).replace(/-/g, " ")}
                      </Link>
                      {/* Separator */}
                    </>
                  ) : (
                    <span className="text-primary cursor-none">
                      {part.charAt(0).toUpperCase() +
                        part.slice(1).replace(/-/g, " ")}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <div className=" font-poppins sm:text-[18px] lg:text-[32px] font-semibold pb-[25px]">
            <h1>Shop Terms & Conditions</h1>
          </div>
        </div>
        <h1 className=" font-poppins font-semibold text-[24px] text-black">
          GENERAL TERMS AND CONDITIONS FOR SALE OF PRODUCTS AND SERVICES
        </h1>
        <div className=" flex lg:flex-row gap-[30px] py-[55px] relative">
          <div className="w-[1039px] h-dvh overflow-x-scroll scrollbar-none" id="contentContainer">
            {/* Ref = definitionsInterpretation */}
            <div id="definitionsInterpretation" className=" pt-[30px]">
              <h1 className=" subheader">Definitions & Interpretation</h1>
              <p className="normalText pt-[30px]">
                In the following Terms and Conditions of sale, unless the
                context requires otherwise
              </p>
              <div className="normalText pt-[30px] flex flex-col gap-y-1">
                <p>(a) "Shop" means Shop Pty Ltd ABN 11 222 333 444;</p>
                <p>
                  (b) "Customer" means the person or corporation placing an
                  order for the purchase of goods or services from Shop;
                </p>
                <p>
                  (c) "Products" means any goods, materials, equipment or
                  services provided to the Customer by Shop;
                </p>
                <p>
                  (d) if the Customer comprises more than one person, each of
                  those person’s liability is joint and several;
                </p>
                <p>
                  (e) references to a party or a person includes any form of
                  entity and their respective successors, assigns and
                  representatives;{" "}
                </p>
                <p>
                  (f) for all periods and times specified in clauses 5 and 11,
                  time is of the essence; and
                </p>
                <p>
                  (g) all references to currency are references to Australian
                  dollars.{" "}
                </p>
              </div>
            </div>

            {/* Ref = general */}
            <div id="general" className=" pt-[30px]">
              <h1 className=" subheader">General</h1>
              <div>
                <p className="normalText pt-[30px]">
                  By ordering the Products and/or accepting delivery of the
                  Products from Shop, the Customer agrees that it is bound by
                  these Terms and Conditions of sale. Customer orders, including
                  orders placed via the internet, are subject to acceptance by
                  Shop. The acceptance of the Customer's order by Shop is
                  expressly made conditional upon the Customer's assent to these
                  Terms and Conditions which will prevail notwithstanding
                  anything that may be stated to the contrary on the Customer's
                  order. Shop reserves the right to vary any of these terms at
                  any time and any subsequent orders placed by the Customer will
                  constitute an acceptance of the terms as varied. Once a
                  Customer order has been placed and accepted by Shop, the
                  Customer agrees that the Customer has no right to cancel or
                  vary the order at any time, unless agreed upon in writing by
                  both parties.{" "}
                </p>
              </div>
            </div>

            {/* Ref = quotations */}
            <div id="quotations" className=" pt-[30px]">
              <h1 className=" subheader">Quotations</h1>
              <div>
                <p className="normalText pt-[30px]">
                  Any quotation by Shop to the Customer will be open for
                  acceptance by the Customer within the period stated in the
                  quotation or, where no period is stated, within seven (7) days
                  from the date of the quotation. Thereafter, prices stated in
                  the quotation may be varied by Shop without notice to the
                  Customer.
                </p>
              </div>
            </div>

            {/* Ref = pricesTaxes */}
            <div id="pricesTaxes" className=" pt-[30px]">
              <h1 className=" subheader">Prices / Taxes</h1>
              <div>
                <p className="normalText pt-[30px]">
                  The prices charged by and payable to Shop will be the ruling
                  prices applicable at the time of order placement, provided
                  that the Products are accepted for delivery within a
                  reasonable time. Prices are subject to change without notice.
                  Recommended retail prices are provided for indicative purposes
                  only and there is no obligation for Shop to comply with that
                  recommendation. It as agreed that should the Customer fail for
                  any reason to acquire the quantity of Products sold then
                  without limiting Shop' other rights and remedies the unit
                  price charged for the goods sold may be amended to take into
                  account any variation in the total quantity purchased by the
                  Customer. Prices include GST, but do not include any other tax
                  or duty, which is in addition to the price and is to be paid
                  by the Customer at the time of payment for the Products.
                </p>
              </div>
            </div>

            {/* Ref = termsOfPayment */}
            <div id="termsOfPayment" className=" pt-[30px]">
              <h1 className=" subheader">Terms of Payment</h1>
              <div className=" flex flex-col gap-y-[30px]">
                <p className="normalText pt-[30px]">
                  Credit Card Payments may attract a surcharge, and Shop will
                  inform the Customer if this is to be the case before
                  processing the transaction.
                </p>
                <p className="normalText">
                  Unless otherwise agreed in writing by Shop, where Shop has not
                  agreed in writing to provide commercial credit to the
                  Customer, the total purchase price for Products supplied will
                  be due for payment in cash prior to delivery.
                </p>
                <p className="normalText">
                  Where Shop has agreed in writing to provide commercial credit
                  to the Customer, the Customer must make payments in accordance
                  with the payment terms provided by Shop.
                </p>
                <p className="normalText">
                  Where Shop has approved the provision of a commercial credit
                  arrangement with the Customer but has not provided notice of
                  the payment terms to the Customer, the Customer must pay the
                  total purchase price for Products supplied within seven days
                  of the statement date.
                </p>
                <p className="normalText">
                  Credit Card Payment at an Invoice or transaction level may
                  also be offered to the Customer as a stand-alone payment
                  method, or in conjunction with Credit Card Direct Debit
                  Authorisation.
                </p>
              </div>
            </div>

            {/* Ref = creditAccounts */}
            <div id="creditAccounts" className=" pt-[30px]">
              <h1 className=" subheader">Credit Accounts</h1>
              <div>
                <p className="normalText pt-[30px]">
                  Any commercial credit arrangements that are provided to the
                  Customer by Shop will continue until terminated by Shop at it
                  sole discretion. In the event that Shop terminates the
                  Customer's commercial credit arrangement, the Customer will be
                  notified in writing and termination will take effect upon
                  receipt of that notification by the Customer.
                </p>
              </div>
            </div>

            {/* Ref = creditAccounts */}
            <div id="changeOfOwnershi" className=" pt-[30px]">
              <h1 className=" subheader">Change of Ownership</h1>
              <div>
                <p className="normalText pt-[30px]">
                  Trading accounts are approved by Shop based on the information
                  supplied and the representations made by the Customer. In the
                  event that there is a change in ownership of the Customer,
                  whether total or partial, the Customer must immediately
                  provide written notice to Shop informing Shop of these
                  changes. Until Shop receives written notice from the Customer
                  of a change in ownership, the Customer (including where it is
                  a company or trustee, each of the Directors thereof) holds
                  Shop indemnified against any and all losses, unpaid accounts,
                  interest, damages, costs, charges, fees and expenses incurred
                  or suffered by Shop in trading with any person, company
                  (including the same company but with a different shareholder
                  or shareholders) or other entity (including a trust) which may
                  have purchased the Customer's business or any interest in the
                  Customer's business or any of the shares in the Customer and
                  used the Customer's previously approved account for trading.
                </p>
                <p className="normalText pt-[30px]">
                  Where a Customer has been authorised by Shop to make payments
                  through Credit Card Direct Debit, the Customer must provide
                  notice in writing at least five (5) days prior to any change
                  in ownership of the business to allow Shop sufficient time to
                  contact the new owner to obtain and confirm new Credit Card
                  information if applicable.
                </p>
              </div>
            </div>

            {/* Ref = informationOnTheProductsSupplied */}
            <div id="informationOnTheProductsSupplied" className=" pt-[30px]">
              <h1 className=" subheader">
                Information on the Products supplied
              </h1>
              <div>
                <p className="normalText pt-[30px]">
                  All descriptive specifications, illustrations, drawings, data,
                  dimensions and weights furnished by Shop or otherwise
                  contained in catalogues or other advertising material are
                  approximate only and are intended to be merely a general
                  description of the goods, are not incorporated within this
                  agreement and no not form part of the description of the goods
                  sold under this or any other agreement unless otherwise agreed
                  to in writing by Shop in which case such information will be
                  subject to recognised trade tolerances.
                </p>
              </div>
            </div>

            {/* Ref = delivery */}
            <div id="delivery" className=" pt-[30px]">
              <h1 className=" subheader">Delivery</h1>
              <div>
                <p className="normalText pt-[30px]">
                  The means of delivering the Products to the Customer will be
                  at Shop' discretion. Shop reserves the right to deliver
                  Products in part deliveries. In the event that Shop incurs
                  additional costs for meeting special (i.e. Tasmania / Northern
                  Territory Deliveries) or urgent delivery arrangements, these
                  additional costs may be charged to the Customer and may
                  include the cost of airfreight where it is not the normal
                  method of delivery. The Customer agrees to accept delivery of
                  the Products sold at any time during normal business hours.
                </p>
                <p className="normalText pt-[30px]">
                  Shop will not be liable for any loss or damage resulting from
                  any late delivery of the Products and late delivery will not
                  entitle the Customer to rescind or repudiate the Customer's
                  order for the Products.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="  py-[25px] px-[25px] h-[332px] bg-gray">
            <ul className=" flex flex-col gap-y-2">
              <li>
                <a href="#definitionsInterpretation">
                  Definitions & Interpretation
                </a>
              </li>
              <li>
                <a href="#general">General</a>
              </li>
              <li>
                <a href="#quotations">Quotations</a>
              </li>
              <li>
                <a href="#pricesTaxes">Prices / Taxes</a>
              </li>
              <li>
                <a href="#termsOfPayment">Terms of Payment</a>
              </li>
              <li>
                <a href="#creditAccounts">Credit Accounts</a>
              </li>
              <li>
                <a href="#changeOfOwnershi">Change of Ownership</a>
              </li>
              <li>
                <a href="#informationOnTheProductsSupplied">
                  Information on the Products supplied
                </a>
              </li>
              <li>
                <a href="#delivery">Delivery</a>
              </li>
            </ul>
          </div> */}
          <div className="py-[25px] px-[25px] h-[332px] bg-gray">
            <ul className="flex flex-col gap-y-2">
              <li>
                <a
                  href="#definitionsInterpretation"
                  onClick={(e) =>
                    scrollToSection(e, "definitionsInterpretation")
                  }
                >
                  Definitions & Interpretation
                </a>
              </li>
              <li>
                <a
                  href="#general"
                  onClick={(e) => scrollToSection(e, "general")}
                >
                  General
                </a>
              </li>
              <li>
                <a
                  href="#quotations"
                  onClick={(e) => scrollToSection(e, "quotations")}
                >
                  Quotations
                </a>
              </li>
              <li>
                <a
                  href="#pricesTaxes"
                  onClick={(e) => scrollToSection(e, "pricesTaxes")}
                >
                  Prices / Taxes
                </a>
              </li>
              <li>
                <a
                  href="#termsOfPayment"
                  onClick={(e) => scrollToSection(e, "termsOfPayment")}
                >
                  Terms of Payment
                </a>
              </li>
              <li>
                <a
                  href="#creditAccounts"
                  onClick={(e) => scrollToSection(e, "creditAccounts")}
                >
                  Credit Accounts
                </a>
              </li>
              <li>
                <a
                  href="#changeOfOwnershi"
                  onClick={(e) => scrollToSection(e, "changeOfOwnershi")}
                >
                  Change of Ownership
                </a>
              </li>
              <li>
                <a
                  href="#informationOnTheProductsSupplied"
                  onClick={(e) =>
                    scrollToSection(e, "informationOnTheProductsSupplied")
                  }
                >
                  Information on the Products supplied
                </a>
              </li>
              <li>
                <a
                  href="#delivery"
                  onClick={(e) => scrollToSection(e, "delivery")}
                >
                  Delivery
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TermsConditions;
