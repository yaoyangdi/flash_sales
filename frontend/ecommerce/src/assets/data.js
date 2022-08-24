import home from "../assets/images/home.webp"
import school from "../assets/images/school.webp"

export const sliderItems = [
    {
        id: 1,
        title: "SUMMER FLASH SALES",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        img: home,
        bg: "f5fafd",
    },
    {
        id: 2,
        title: "SCHOOL SEASON\n"+"UP to 70% OFF",
        desc: "GET SCHOLL READY WITH MORE SAVINGS!",
        img: school,
        bg: "F7F1F1",
    }
];


const DOMAIN = "https://flashsales-api.herokuapp.com";
// const DOMAIN = "http://localhost:8080/";

const TEMP_TOKEN = "2c92816a82c67f980182c68064660000";
/* CART API */
export const CART_API =  DOMAIN + "/cart" + "?token=" + TEMP_TOKEN;
export const CART_INCREASE = DOMAIN + "/cart/increase" + "?token=" + TEMP_TOKEN;
export const CART_DECREASE = DOMAIN + "/cart/decrease" + "?token=" + TEMP_TOKEN;

/* USER API */
export const USER_API = DOMAIN + "/user";
export const USER_SIGNIN = USER_API + "/signin";
export const USER_SIGNUP = USER_API + "/signup";

/* PRODUCT */
export const PRODUCT_API = DOMAIN + "/product";

/* FLASH SALE */
export const FLASHSALE_API = DOMAIN + "/flashsale";
export const FLASHSALE_PROCESS = FLASHSALE_API + "/process";
