import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
// import LoginScreen from "../../pages/login-screen"
// import ForgotPasswordScreen from "../../pages/forgotPassword"
// import registerScreen from "../../pages/registerScreen"
import HomeScreen from "../../pages/AfterLoginRoutes/home-screen"
import AboutScreen from "../../pages/AfterLoginRoutes/about-screen"
import SettingScreen from "../../pages/AfterLoginRoutes/setting-screen"
import InvalidScreen from "../../pages/Invalid-screen"
import ProductDetails from "../../pages/AfterLoginRoutes/product-details"

const NavigationStack = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" Component={LoginScreen}></Route>
                <Route path="/register" Component={registerScreen}></Route>
                <Route path="/forgot-password" Component={ForgotPasswordScreen}></Route> */}
                <Route path="/" Component={HomeScreen}></Route>
                <Route path="/about" Component={AboutScreen}></Route>
                <Route path="/settings" Component={SettingScreen}></Route>
                <Route path="/invalid" Component={InvalidScreen}></Route>
                <Route path="/product/:id/:id" Component={ProductDetails}></Route>
               
            </Routes>

        </BrowserRouter>
    )
}
export default NavigationStack