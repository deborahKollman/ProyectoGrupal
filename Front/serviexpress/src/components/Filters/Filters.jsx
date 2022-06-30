import React from "react";
import {
  filterCategories,
  getAllCategories,
  getPublicationsByCategory,
} from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import stylefilter from "./Filter.module.scss";
import { filterprice, filterbyCountry, getPublicationsByUserName } from "../../redux/action";

function RadioButtonsGroup2() {
  const categories = useSelector((state) => state.Publications_by_categories);
  const [value, setValue] = useState("female");
  const dispatch = useDispatch();
  const handleChanges = (event) => {
    setValue(event.target.value);
    dispatch(filterprice(event.target.value));
  };

  return categories.length > 0 ? (
    <div className={stylefilter.box_filter}>
      <p>Select Range Price</p>
      <select
        className={stylefilter.selectcss}
        onChange={(e) => handleChanges(e)}
      >
        <option key="all" value="all">
          All
        </option>
        <option key="range1" value="range1">
          0 to 500.
        </option>
        <option key="range2" value="range2">
          500 to 2000
        </option>
        <option key="range3" value="range3">
          2000 to 4000
        </option>
        <option key="range4" value="range4">
          more than 4000
        </option>
      </select>
    </div>
  ) : (
    <div></div>
  );
}

//-------------------------------------------------------------------
function RadioButtonsGroup3() {
  const categories = useSelector((state) => state.Publications_by_categories);
  const [value, setValue] = useState("female");
  const dispatch = useDispatch();
  const handleChanges = (event) => {
    setValue(event.target.value);
    dispatch(filterbyCountry(event.target.value));
  };

  return categories.length > 0 ? (
    <div className={stylefilter.box_filter}>
      <p>Filter by Country</p>
      <select
        className={stylefilter.selectcss}
        onChange={(e) => handleChanges(e)}
      >
        <option key="all" value="all">
          All
        </option>
        <option key="Argentina" value="Argentina">
        Argentina
        </option>
        <option key="Bolivia" value="Bolivia">
        Bolivia
        </option>
        <option key="Colombia" value="Colombia">
        Colombia
        </option>
        <option key="Mexico" value="Mexico">
        México
        </option>
        <option key="Peru" value="Peru">
        Perú
        </option>
        <option key="Uruguay" value="Uruguay">
        Uruguay
        </option>
        <option key="Others" value="Others">
        Others
        </option>
      </select>
    </div>
  ) : (
    <div></div>
  );
}

//-----------------------------------------------------------------------------------


function SearchByPublicationName() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const categories = useSelector((state) => state.Publications_by_categories);

  function handleInputChange(e) {
     e.preventDefault(); 
     setName(e.target.value)
    
 }

 function handleSubmit(e) {
     e.preventDefault();
     dispatch(getPublicationsByUserName(name))
     setName("");

 }


 return categories.length > 0 ? ( 

      
     <div >
    <p>Filter by User Name</p>
     <form onSubmit={handleSubmit}>
         <input
         className={stylefilter.searchss}
         onChange={(e) => handleInputChange(e)}
         type= 'text'
         placeholder="Filter usr.name..."
         value={name}
         />
         {/*<button  onClick={(e)=> handleSubmit(e)} type="submit">Buscar</button> */}
         {/* <button className='btn-search' type="submit"></button> */}
     {/* //</div> */}
     
     </form>
     
     
     </div>
     
 ) : (
  <div></div>
);
}





//--------------------------------------------------------

const FilterByCategories = () => {
  const dispatch = useDispatch();

  const all = [{ id: 0, name: "All Categories" }];
  const allCategories = [...all, ...useSelector((state) => state.categories)];
  const [value, setValue] = useState();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    if (!allCategories[value]) dispatch(filterCategories("all"));
    else dispatch(getPublicationsByCategory(allCategories[value].id));
  }, [value]);

  function handleChange(event, newevent) {
    event.preventDefault();
    setValue(newevent);
  }

  return (
    
    <Tabs className={stylefilter.tabsf}
      
      value={value}
      onChange={handleChange}
      scrollButtons="auto"
    >
      {allCategories.map((e, index) => {
        return (
          <Tab
            className={stylefilter.tabf}
            scrollButtons="auto"
            label={e.name}
          />
        );
      })}
    </Tabs>
  )
};

//----------------------------------------------------------------
//Filter by Price

export { FilterByCategories, RadioButtonsGroup2, RadioButtonsGroup3, SearchByPublicationName };
