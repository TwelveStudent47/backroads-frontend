import image1 from "./images/tour-1.jpeg"
import image2 from "./images/tour-2.jpeg"
import image3 from "./images/tour-3.jpeg"
import image4 from "./images/tour-4.jpeg"

export const pageLinks = [
    {
        id: 1,
        href: "#home",
        value: "home"
    }, 
    {
        id: 2,
        href: "#about",
        value: "about"
    },
    {
        id: 3,
        href: "#services",
        value: "services"
    },
    {
        id: 4,
        href: "#tours",
        value: "tours"
    }, 
];

export const socialLinks = [
    {
        id: 1,
        class: "fab fa-facebook",
        href: "https://www.twitter.com"
    },
    {
        id: 2,
        class: "fab fa-twitter",
        href: "https://www.twitter.com"
    },
    {
        id: 3,
        class: "fab fa-squarespace",
        href: "https://www.twitter.com"
    }
]

export const services = [
    {
        id: 1,
        icon: "fas fa-wallet fa-fw",
        title: "saving money",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    },
    {
        id: 2,
        icon: "fas fa-tree fa-fw",
        title: "endless hiking",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    },{
        id: 3,
        icon: "fas fa-socks fa-fw",
        title: "amazing comfort",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    }
]

export const tours = [
    {
        id: 1,
        image: image1,
        date: "august 26th, 2020",
        title: "Tibet Adventure",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis",
        icon: "fas fa-map",
        place: "china",
        dayCount: 6,
        price: 2100
    },
    {
        id: 2,
        image: image2,
        date: "october 1th, 2020",
        title: "best of java",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis",
        icon: "fas fa-map",
        place: "indonesia",
        dayCount: 11,
        price: 1400
    },
    {
        id: 3,
        image: image3,
        date: "september 15th, 2020",
        title: "explore hong kong",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis",
        icon: "fas fa-map",
        place: "hong kong",
        dayCount: 8,
        price: 5000
    },
    {
        id: 4,
        image: image4,
        date: "december 5th, 2020",
        title: "kenya highlights",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis",
        icon: "fas fa-map",
        place: "kenya",
        dayCount: 20,
        price: 3300
    }
]