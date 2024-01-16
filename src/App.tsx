import React from "react";
import { RouterProvider } from "react-router-dom";
import { Routing } from "./routes/routing";

function App() {
    return (
        <div className='bg-black h-screen  object-center py-6'>
            <RouterProvider router={Routing} />
        </div>
    );
}

export default App;
