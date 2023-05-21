import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ArtsandCrafts from "../../Components/CategorisedToyCard/ArtsandCrafts";
import BooksandReading from "../../Components/CategorisedToyCard/BooksandReading";
import ScienceandExploration from "../../Components/CategorisedToyCard/ScienceandExploration";

const CategorisedToys = () => {
  const [categories, setCategories] = useState([]);
  const [categorizedToys, setCategorizedToys] = useState([]);

  useEffect(() => {
    fetch("https://kinder-kids-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect((id) => {
   fetch(`https://kinder-kids-server.vercel.app/categories/${id}`)
   .then(res => res.json())
   .then(data => console.log(data))
   .catch(error => console.log(error))
  }, [categories]);

 
  return (
    <>
      <h3 className="text-center">Categorized Toys</h3>
      <Tabs >
        <TabList>
          {categories.map((category) => (
            <Tab key={category._id}>{category.name}</Tab>
          ))}
        </TabList>

    <TabPanel>
      {/* I want to show categoriseToys categoyrId 1 data */}
      <ArtsandCrafts></ArtsandCrafts>
    </TabPanel>
    <TabPanel>
      {/* I want to show categoriseToys categoyrId id 2 data */}

      <ScienceandExploration></ScienceandExploration>
    </TabPanel>
    <TabPanel>
      {/* I want to show categoriseToys categoyrId id 3 data */}

      <BooksandReading></BooksandReading>
    </TabPanel>

        
      </Tabs>
    </>
  );
};

export default CategorisedToys;
