import './index.css'
import Navbar from './components/navbar';
import Footer from './components/footer';




import React, { useState, useEffect } from 'react';



function BlockInfo() {
  const apiUrl = 'https://mempool.space/api/v1/blocks/';
  const [blockData, setBlockData] = useState({currentheight: '' , prevheight: '', currentid: '', previd: ''});


  useEffect(() => {
    fetch(apiUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const currentheight = data[0].height;
        const currentid = data [0].id
        const prevheight = data[1].height;
        const previd = data [1].id
        setBlockData({ currentheight, prevheight, currentid, previd });
      })
  }, []);

  function copyHeight () {
let currentheight = document.getElementById('currentheight');
let copyHeight = document.getElementById('copyHeight');



navigator.clipboard.writeText(currentheight.textContent);
copyHeight.textContent='copied!';


  }

  function reloadPage(){

window.location.reload();

  }

  return (


    <div >
      <Navbar></Navbar>

    <div class="bg-gradient-to-r from-[rgb(2,0,36)] via-[rgba(24,26,67,1)] to-[rgba(20,23,30,1)] pt-20 ">

      
    <div class="flex justify-center items-center">
  <div class="inline-flex rounded-md shadow-sm" role="group">
    <button onClick={reloadPage} type="button" class="px-6 py-4 text-md font-medium text-white  border  rounded-l-lg border-white bg-[rgb(4,7,12)] text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
      Refresh
    </button>
    <a href='https://mempool.space/es/'>
    <button type="button"  class="px-6 py-4 text-md font-medium text-white  border  rounded-r-md  border-white bg-[rgb(4,7,12)] text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
     Go to Mempool
    </button>
    </a>
  </div>
</div>
<br></br>

   
    <div class="mx-auto max-w-screen-md mt-12 flex flex-col items-center bg-white border rounded-lg shadow md:flex-row md:max-w-screen-lg border-white bg-[rgb(4,7,12)]">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="./src/img/block.gif" alt=""></img>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Current Block</h5>
        <p class="mb-3 text-xl font-normal text-gray-400">Current Block Height: <span id='currentheight'>{blockData.currentheight}</span> <button type="button" id='copyHeight' onClick={copyHeight} class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
</svg>
  <span class="sr-only">Icon description</span>
</button> </p>
        <p class="mb-3 text-xl font-normal text-gray-400">Current Block ID: <span id='currentid'>{blockData.currentid}</span> </p>
        </div>
        </div>
        <br></br>
        <div class="mx-auto max-w-screen-md flex flex-col items-center bg-white border rounded-lg shadow md:flex-row md:max-w-screen-lg border-white bg-[rgb(4,7,12)]">
   
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Previous Block</h5>
        <p class="mb-3 text-xl font-normal text-gray-400">Previous Block Height: <span id='prevheight'>{blockData.prevheight}</span> </p>
        <p class="mb-3 text-xl font-normal text-gray-400">Previous Block ID: <span id='previd'>{blockData.previd}</span> </p>
        </div>
        </div>


      <br></br>
      
      
    </div>
<Footer></Footer>
    </div>

  );
}

export default BlockInfo;
