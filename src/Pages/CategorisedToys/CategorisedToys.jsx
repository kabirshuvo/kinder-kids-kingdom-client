import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CategorisedToys = () => {
  const [categories, setCategories] = useState([]);
  const [categorizedToys, setCategorizedToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error(error));
  }, []);


  useEffect((id) => {
    fetch(`http://localhost:5000/categories/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setCategorizedToys(data);
      console.log(data)
    })
    .catch((error) => console.error(error));
  },[])



  const handleTabSelect = (index) => {
    const categoryId = categories[index]._id;
    console.log(categoryId)
    
  };

  return (
    <>
      <h3 className="text-center">Categorized Toys</h3>
      <Tabs onSelect={handleTabSelect}>
        <TabList>
          {categories.map((category) => (
            <Tab key={category._id}>{category.name}</Tab>
          ))}
        </TabList>

        {categories.map((category) => (
          <TabPanel key={category._id}>
            {categorizedToys.map((toy) => console.log(toy))}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default CategorisedToys;
