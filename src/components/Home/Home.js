import React from 'react' 
import Card from '../Card/Card';
import PieGraph from '../Graph/PieGraph';
import BarGraph from '../Graph/BarGraph';
import Product from '../Product/Product';


function Home() {   

  return (
    <main className='main-container'>
        <Card></Card>
        <div className='charts'>
        <BarGraph></BarGraph>
        <PieGraph></PieGraph>
        <Product></Product>
        </div>
    </main>
  )
}

export default Home
