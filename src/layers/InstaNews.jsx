import React, { useEffect } from "react";
import Container from "../Components/Container";

const InstaNews = () => {
  let [items, setItems] = React.useState([]);


  useEffect(() => {
    let getData = async () => {
      let res = await fetch("/Insta_News/InstaNews.json");
      let data = await res.json();
      setItems(data); // Use the data as needed for your Instagram feed component.
    };
    getData();
  }, []);
  
  return (
   <div>
    <Container>
    <div className=" mt-[21px] flex sm:flexcol sm:justify-center lg:justify-start flex-wrap gap-x-[9px] gap-y-[20px]">
      {
        items.map((items, index) => (
          <div className=" flex flex-col w-[225px]" key={index}>
            <img src={items.Image} alt={items.image} />
            <h3 className="font-poppins text-sm text-center mt-[10px] px-[15px] text-black">{items.description}</h3>
            <h3 className=" font-poppins text-sm text-center mt-[10px] text-gray_2">{items.Date}</h3>
          </div>
        ))
        // Reverse the order of items for a more recent-first feed.
      }
    </div>
    </Container>
   </div>
  );
};

export default InstaNews;
