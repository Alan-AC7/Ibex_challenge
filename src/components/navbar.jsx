import '../index.css'
import React from 'react'

class Navbar extends React.Component {
    render() {
        return(
            
            <><nav class="bg-[rgb(4,7,12)] border-gray-200 ">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://www.poweredbyibex.io" class="flex items-center">
                        <img src="https://assets-global.website-files.com/6352f3f8c86d72406a59c8d8/6365553273e625ca45b3f745_IBEX_Horizontal_Negative-p-500.png" class="h-10 w-32 mr-3" alt="Flowbite Logo"></img>
                        
                    </a>
                    <div class="flex items-center">
                        <a class="mr-6 text-3xl  text-white dark:text-white">Intership Challenge</a>
                        
                    </div>
                </div>
            </nav></>

        )
    }
}

export default Navbar;