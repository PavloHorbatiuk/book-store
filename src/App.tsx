import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Routing } from "./routes/routing";
import { AppThunkDispatch } from "./store/store";
import { useDispatch } from "react-redux";
import { fetchBooks } from "./store/slices/book/fetchBooks";

function App() {
    const dispatch = useDispatch<AppThunkDispatch>();

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return (
        <div className='bg-black h-auto  object-center py-6'>
            <RouterProvider router={Routing} />
        </div>
    );
}

export default App;
