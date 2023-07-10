import React from 'react';

const store = [
  { name: 'mjölk', id: 1, sort: 'dairy' },
  { name: 'banan', id: 2, sort: 'fruit' },
  { name: 'ersättning', id: 3, sort: 'baby' },
  { name: 'bröd', id: 4, sort: 'bread' },
  { name: 'ost', id: 5, sort: 'cheese' },
  { name: 'kyckling', id: 6, sort: 'meat' },
  { name: 'pasta', id: 7, sort: 'dry' },
  { name: 'lindt', id: 8, sort: 'candy' },
  { name: 'lax', id: 9, sort: 'frozen' },
  { name: 'cola', id: 10, sort: 'drinks' },
  { name: 'tvättmedel', id: 11, sort: 'cleaning'},
  { name: 'bars', id: 12, sort: 'misc' },
  { name: 'blöjor', id: 13, sort: 'baby' },
  { name: 'sås', id: 14, sort: 'cheese' },
  { name: 'sallad', id: 15, sort: 'fruit' },
  { name: 'tomat', id: 16, sort: 'fruit' },
  { name: 'babytomat', id: 17, sort: 'fruit' },
  { name: 'kaffe', id: 18, sort: 'dry' },
  { name: 'havregryn', id: 19, sort: 'dry' },
  { name: 'hushållspapper', id: 20, sort: 'cleaning' },
  { name: 'toapapper', id: 21, sort: 'cleaning' },
  { name: 'pyttipanna', id: 22, sort: 'frozen' },
  { name: 'ägg', id: 23, sort: 'dairy' },
  { name: 'yoghurt', id: 24, sort: 'dairy' },
  { name: 'gurka', id: 25, sort: 'fruit' },
  { name: 'hallon', id: 26, sort: 'frozen' },
  { name: 'rödkål', id: 27, sort: 'fruit' },
  { name: 'kebab', id: 28, sort: 'meat' },
  { name: 'isberg', id: 29, sort: 'fruit' },
  { name: 'rödlök', id: 30, sort: 'fruit' },
  { name: 'lök', id: 31, sort: 'fruit' },
  { name: 'vitlök', id: 32, sort: 'fruit' },
  { name: 'gullök', id: 33, sort: 'fruit' },
  { name: 'grädde', id: 34, sort: 'dairy' },
  { name: 'laktofri grädde', id: 35, sort: 'dairy' },
  { name: 'matlagningsgrädde', id: 36, sort: 'dairy' },
  { name: 'tvättlappar', id: 37, sort: 'baby' },
  { name: 'mörk choklad', id: 38, sort: 'candy' },
  { name: '', id: 39, sort: '' },
  { name: '', id: 40, sort: '' },
  { name: '', id: 41, sort: '' },
  { name: '', id: 42, sort: '' },
  { name: '', id: 43, sort: '' },
  { name: '', id: 44, sort: '' },
  { name: '', id: 45, sort: '' },
  { name: '', id: 46, sort: '' },
  { name: '', id: 47, sort: '' },
  { name: '', id: 48, sort: '' },
  { name: '', id: 49, sort: '' },
  { name: '', id: 50, sort: '' },
  { name: '', id: 51, sort: '' },
  { name: '', id: 52, sort: '' },
  { name: '', id: 53, sort: '' },
  { name: '', id: 54, sort: '' },
  { name: '', id: 55, sort: '' },
  { name: '', id: 56, sort: '' },
  { name: '', id: 57, sort: '' },
  { name: '', id: 58, sort: '' },
  { name: '', id: 59, sort: '' },
  { name: '', id: 60, sort: '' },
  { name: '', id: 61, sort: '' },
  { name: '', id: 62, sort: '' },
  { name: '', id: 63, sort: '' },
  { name: '', id: 64, sort: '' },
  { name: '', id: 65, sort: '' },
  { name: '', id: 66, sort: '' },
  { name: '', id: 67, sort: '' },
  { name: '', id: 68, sort: '' },
  { name: '', id: 69, sort: '' },
  { name: '', id: 70, sort: '' },
  
  

  
];

function Edit(props) {
  const { orderList } = props;

  const logList = () => {
    console.log(store);
  };
  orderList(store);

  return (
    <div className="edit">
      
      <h3 className='hover-trigger'>Misc</h3>
        <ul className='hover-content'>
          {store.map((item) => {
            if (item.sort === 'misc') {
              return <li key={item.id}>{item.name}</li>;
            }
            return null;
          })}
        </ul>
      
        <h3 className='hover-trigger'>Baby</h3>
        <ul className='hover-content'>
          {store.map((item) => {
            if (item.sort === 'baby') {
              return <li key={item.id}>{item.name}</li>;
            }
            return null;
          })}
        </ul>
      
        <h3 className='hover-trigger'>Bread</h3>
        <ul className='hover-content'>
          {store.map((item) => {
            if (item.sort === 'bread') {
              return <li key={item.id}>{item.name}</li>;
            }
            return null;
          })}
        </ul>
      
        <h3 className='hover-trigger'>Cheese</h3>
        <ul className='hover-content'>
          {store.map((item) => {
            if (item.sort === 'cheese') {
              return <li key={item.id}>{item.name}</li>;
            }
            return null;
          })}
        </ul>
     
        <h3 className='hover-trigger'>Meat</h3>
        <ul className='hover-content'>
          {store.map((item) => {
            if (item.sort === 'meat') {
              return <li key={item.id}>{item.name}</li>;
            }
            return null;
          })}
        </ul>
      
        <h3 className='hover-trigger'>Fruit</h3>
        <ul className='hover-content'>
          {store.map((item) => {
            if (item.sort === 'fruit') {
              return <li key={item.id}>{item.name}</li>;
            }
            return null;
          })}
        </ul>
      
        <h3 className='hover-trigger'>Dairy</h3>
        <ul className='hover-content'>
          {store.map((item) => {
            if (item.sort === 'dairy') {
              return <li key={item.id}>{item.name}</li>;
            }
            return null;
          })}
        </ul>
      
        <h3 className='hover-trigger'>Dry Products</h3>
        <ul className='hover-content'>
          {store.map((item) => {
            if (item.sort ==='dry') {
              return <li key={item.id}>{item.name}</li>;
            }
            return null;
          })}
        </ul>
      
        <h3 className='hover-trigger'>Candy</h3>
        <ul className='hover-content'>
          {store.map((item) => {
            if (item.sort === 'candy') {
              return <li key={item.id}>{item.name}</li>;
            }
            return null;
          })}
        </ul>
      
        <h3 className='hover-trigger'>Frozen</h3>
        <ul className='hover-content'>
          {store.map((item) => {
            if (item.sort === 'frozen') {
              return <li key={item.id}>{item.name}</li>;
            }
            return null;
          })}
        </ul>
      
        <h3 className='hover-trigger'>Drinks</h3>
        <ul className='hover-content'>
          {store.map((item) => {
            if (item.sort === 'drinks') {
              return <li key={item.id}>{item.name}</li>;
            }
            return null;
          })}
        </ul>
      
        <h3 className='hover-trigger'>Cleaning</h3>
        <ul className='hover-content'>
          {store.map((item) => {
            if (item.sort === 'cleaning') {
              return <li key={item.id}>{item.name}</li>;
            }
            return null;
          })}
        </ul>
     
    </div>
  );
}

export default Edit;
