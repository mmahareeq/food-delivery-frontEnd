import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
const Home = lazy(() => import("./components/Home/Home"));
const Login = lazy(() => import("./components/Login/Login"));
const Signup = lazy(() => import("./components/Signup/Signup"));
const Layout = lazy(() => import("./pages/layout/Layout"));
const AddItem = lazy(() => import("./features/items/AddItem/AddItem"));
const ListItem = lazy(() => import("./features/items/ListItem/ListItem"));
const ForgetPassword = lazy(() =>
  import("./components/ForgetPassword/ForgetPassword")
);
const Menu = lazy(() => import("./pages/Menu/Menu"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const RequiredAuth = lazy(() => import("./components/RequiredAuth/index"));
const Spinner = lazy(() => import("./shared/Spinner/Spinner"));
const NewPassword = lazy(()=>import("./components/NewPassword/index"));

export default function AppRouting() {
  const { userinfo } = useSelector((state) => state.users);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Spinner />}>
            <Layout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="menu"
          element={
            <Suspense fallback={<Spinner />}>
              <Menu />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Spinner />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<Spinner />}>
              <Cart />
            </Suspense>
          }
        />

        <Route
          element={
            <Suspense fallback={<Spinner />}>
              <RequiredAuth allowRole="admin" />
            </Suspense>
          }
        >
          <Route
            path="item"
            element={
              <Suspense fallback={<Spinner />}>
                <ListItem />
              </Suspense>
            }
          />
          <Route
            path="item/add"
            element={
              <Suspense fallback={<Spinner />}>
                <AddItem></AddItem>
              </Suspense>
            }
          />
          <Route
            path="item/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <AddItem></AddItem>
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route
        path="login"
        element={
          <Suspense fallback={<Spinner />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="register"
        element={
          <Suspense fallback={<Spinner />}>
            <Signup />
          </Suspense>
        }
      />
      <Route
        path="/forgetpassword"
        element={
          <Suspense fallback={<Spinner />}>
            <ForgetPassword />
          </Suspense>
        }
      />
      <Route path="/reset-password/:token" element={
        <Suspense fallback={<Spinner />}>
           <NewPassword />
        </Suspense>
      } />
    </Routes>
  );
}
