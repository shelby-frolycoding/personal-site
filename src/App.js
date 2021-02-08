import "./App.css"
import { Route, Switch} from "react-router-dom";
import Landing from "./screens/landing/Landing";
// import Detail from "./screens/Detail/Detail";
// import { useEffect, useState } from "react";
// import About from "./screens/About/About";
// import Contact from "./screens/Contact/Contact";


function App() {
  return (
      <div className="App">
         <Switch>
         <Route exact path="/">
           
            <Landing  />
           
          </Route>
          {/* <Route path="/sign-up">
            <ScrollToTop>
            <SignUp user={user} setUser={setUser} />
            </ScrollToTop>
          </Route>
          <Route path="/sign-in">
            <ScrollToTop>
              <SignIn user={user} setUser={setUser} />
            </ScrollToTop>
          </Route>
          <Route path="/sign-out">
            <ScrollToTop>
            <SignOut user={user} setUser={setUser} clearUser={clearUser} />
            </ScrollToTop>
          </Route>
          <Route path="/listing-page/:filter">
            <ScrollToTop>
            <Listing user={user} />
            </ScrollToTop>
          </Route>
          <Route path="/detail/:id">
            <ScrollToTop>
              <Detail user={user} />
            </ScrollToTop>
          </Route>
          <Route path="/about">
            <ScrollToTop>
            <About user={user} />
            </ScrollToTop>
          </Route>
          <Route path="/contact">
          <ScrollToTop>
            <Contact user={user} />
          </ScrollToTop>
          </Route>
          <Route path="/add-product">
            {user ? <ProductCreate user={user} /> : <Redirect to="/sign-up" />}
          </Route>
          <Route path="/edit-product/:id">
            {user ? <ProductEdit user={user} /> : <Redirect to="/sign-up" />}
          </Route>
          <Route path="/shopping-cart">
            <ScrollToTop>
              <ShoppingCart user={user} />
            </ScrollToTop>
          </Route>
          <Route path="/sale">
            <ScrollToTop>
            <Sale user={user} />
            </ScrollToTop>
          </Route> */} 
        </Switch> 
       
      </div>

  );
}

export default App;
