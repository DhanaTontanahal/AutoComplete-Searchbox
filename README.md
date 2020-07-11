# AutoComplete-Searchbox
AutoComplete-Searchbox deployed to npm using React JS

#Demo
![alt text](https://github.com/DhanaTontanahal/AutoComplete-Searchbox/blob/master/autocompletedemo.PNG)

```
npm i tds-react-autocomplete
```

#USAGE:

```
import React from 'react';
import search from './search.svg';
import './App.css';
import AutoCompleteSearchBox from './AutoCompleteSearchBox';
import {stocksData} from './data/stocks'

function App() {

  const symbols = stocksData.map((stockObj) =>{
    return stockObj["symbol"]
  });

  const onClick = (suggestion) =>{
    alert(suggestion["name"])
  }



  return (
    <div className="App">
      <AutoCompleteSearchBox
        placeHolderSearchLabel={"Search.."} //optional
        primaryIndex={"symbol"}            //required  
        secondaryIndex={"name"}            //optional
        showSecondarySearchCriterion={true}//optional
        secondarySearchClassName="secondarySearchClassName"//optional
        tertiaryIndex={"price"}             //optional
        showTertiarySearchCriterion={true}  //optional
        tertiarySearchClassName="tertiarySearchClassName" //optional
        suggestions={stocksData}  //required    
        onClick={onClick}         //required
        showSearchBtn={true}      //optional
        searchImg={search}        //optional
        />
      
    </div>
  );
}

export default App;



```

#If the samle data is like below primary index is the key by which you want the user to search in auto complete corresponding to auto suggestions retrieved pivoted by this key 
```
export const stocksData=
[
     {
    "symbol" : "SPY",           //primaryIndex
    "name" : "SPDR S&P 500",    //secondaryIndex
    "price" : 315.36,           //tertiaryIndex
    "exchange" : "NYSE Arca"
  }, {
    "symbol" : "CMCSA",
    "name" : "Comcast Corporation Class A Common Stock",
    "price" : 39.83,
    "exchange" : "Nasdaq Global Select"
  }, {
    "symbol" : "KMI",
    "name" : "Kinder Morgan Inc.",
    "price" : 13.97,
    "exchange" : "New York Stock Exchange"
  }, {
    "symbol" : "INTC",
    "name" : "Intel Corporation",
    "price" : 59.215,
    "exchange" : "Nasdaq Global Select"
  }...
  
```
