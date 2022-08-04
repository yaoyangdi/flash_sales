import home from "../assets/images/home.webp"
import school from "../assets/images/school.webp"

import hoodie1 from "../assets/images/hoodie1.webp"
import sweatshirt1 from "../assets/images/sweatshirt1.webp"
import sweatshirt2 from "../assets/images/sweatshirt2.webp"
import sweatshirt3 from "../assets/images/sweatshirt3.webp"
import sweatshirt4 from "../assets/images/sweatshirt4.webp"
import sweatshirt5 from "../assets/images/sweatshirt5.webp"
import jacket1 from '../assets/images/jacket1.webp'
import jacket2 from '../assets/images/jacket2.webp'

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

export const products = [
    {
        id: 1,
        img:hoodie1,
        title: "Men Cartoon & Slogan Graphic Kangaroo Pocket Thermal Lined Drawstring Hoodie",
        price: 21.95,
    },
    {
        id: 2,
        img: sweatshirt1,
        title: "Men Bear Print Thermal Lined Sweatshirt",
        price: 25.95,
    },
    {
        id: 3,
        img: sweatshirt2,
        title: "ROMWE Guys Cartoon Bear Graphic Sweatshirt",
        price: 21.95,
    },
    {
        id: 4,
        img: sweatshirt3,
        title: "Men Cartoon Face Print Sweatshirt",
        price: 50.95,
    }
];

export const flashsales = [
    {
        "id": 0,
        "status": 1,
        "startTime": "2022-08-02T13:30:00.000+00:00",
        "endTime": "2022-08-05T17:00:00.000+00:00",
        "lock_stock": 0,
        "products": [{
            id: 1,
            img:hoodie1,
            title: "Men Cartoon & Slogan Graphic Kangaroo Pocket Thermal Lined Drawstring Hoodie",
            prev_price: 59.95,
            price: 21.95,
            totalStock: 70,
            availableStock: 10,
        },
        {
            id: 2,
            img: sweatshirt1,
            title: "Men Bear Print Thermal Lined Sweatshirt",
            prev_price: 68.95,
            price: 25.95,
            totalStock: 70,
            availableStock: 32,
        },
        {
            id: 3,
            img: sweatshirt2,
            title: "ROMWE Guys Cartoon Bear Graphic Sweatshirt",
            prev_price: 60.95,
            price: 21.95,
            totalStock: 70,
            availableStock: 54,
        },
        {
            id: 4,
            img: sweatshirt3,
            title: "Men Cartoon Face Print Sweatshirt",
            prev_price: 99.95,
            price: 50.95,
            totalStock: 70,
            availableStock: 64,
        },
    ]
    },
    {
        "id": 1,
        "status": 0,
        "startTime": "2022-08-05T13:30:00.000+00:00",
        "endTime": "2022-08-05T17:00:00.000+00:00",
        "totalStock": 70,
        "availableStock": 0,
        "lock_stock": 0,
        "products": [
        {
            id: 5,
            img: sweatshirt4,
            title: "Men Letter Graphic Thermal Lined Sweatshirt",
            prev_price: 45.95,
            price: 18.95,
            totalStock: 70,
            availableStock: 64,
        },
        {
            id: 6,
            img: sweatshirt5,
            title: "Men Playing Card Print Sweatshirt",
            prev_price: 60.95,
            price: 21.95,
            totalStock: 70,
            availableStock: 64,
        },
        {
            id: 7,
            img: jacket1,
            title: "Men 1pc Striped Drawstring Hooded 2 In 1 Jacket",
            prev_price: 60.95,
            price: 23.95,
            totalStock: 70,
            availableStock: 64,
        },
        {
            id: 8,
            img: jacket2,
            title: "Men Letter Patch Detail Two Tone Bomber Jacket",
            prev_price: 60.95,
            price: 35.95,
            totalStock: 70,
            availableStock: 64,
        }]
    },

]