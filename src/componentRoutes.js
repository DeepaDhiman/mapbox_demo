import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ListingIndex from "./components/Listing";
import MapIndex from "./components/Map";

function ComponentRoutes() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListingIndex />}></Route>
          <Route path="/map/:id" element={<MapIndex />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default ComponentRoutes;