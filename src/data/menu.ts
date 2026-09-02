import type { ImageMetadata } from "astro";
import chimmiMakis from "../assets/menu-img/Chimmi Makis.jpg";
import migiriSushi from "../assets/menu-img/Migiri Sushi.jpg";
import togarashiMakis from "../assets/menu-img/Togarashi Makis.jpg";
import salmonRoll from "../assets/menu-img/Salmon Roll.jpg";
import macarons from "../assets/menu-img/macrons.jpeg";
import dorayaki from "../assets/menu-img/dorayaki.jpeg";
import tofuPancake from "../assets/menu-img/tofuPancake.jpeg";
import honeyCookies from "../assets/menu-img/honeyCookies.jpg";
import coffee from "../assets/menu-img/coffee.jpeg";
import matchaTea from "../assets/menu-img/Matcha_Tea.jpg";
import amazake from "../assets/menu-img/Amazake.jpg";
import sake from "../assets/menu-img/sake.png";
import tunaPokeBowl from "../assets/menu-img/Tuna Poke Bowl.jpg";
import sardineStew from "../assets/menu-img/Sardine Stew.jpg";
import vegetarianRamen from "../assets/menu-img/Vegetarian Ramen.jpg";
import vegetarianSoup from "../assets/menu-img/Vegetarian Soup.jpg";

export type MenuCategory = "sushi" | "desserts" | "drinks" | "dishes";

export interface MenuItem {
  name: string;
  category: MenuCategory;
  image: ImageMetadata;
  price: number;
  originalPrice?: number;
}

export const menuItems: MenuItem[] = [
  { name: "Chimmi Makis", category: "sushi", image: chimmiMakis, price: 17500, originalPrice: 35000 },
  { name: "Migiri Sushi", category: "sushi", image: migiriSushi, price: 25000, originalPrice: 50000 },
  { name: "Togarashi Makis", category: "sushi", image: togarashiMakis, price: 15000, originalPrice: 30000 },
  { name: "Salmon Roll", category: "sushi", image: salmonRoll, price: 25000, originalPrice: 50000 },
  { name: "Macarons", category: "desserts", image: macarons, price: 16000, originalPrice: 20000 },
  { name: "Dorayaki", category: "desserts", image: dorayaki, price: 22000, originalPrice: 27500 },
  { name: "Tofu Pancake", category: "desserts", image: tofuPancake, price: 24000, originalPrice: 32000 },
  { name: "Honey Cookies", category: "desserts", image: honeyCookies, price: 14250, originalPrice: 15000 },
  { name: "Coffee", category: "drinks", image: coffee, price: 5000 },
  { name: "Matcha Tea", category: "drinks", image: matchaTea, price: 5000 },
  { name: "Amazake", category: "drinks", image: amazake, price: 5000 },
  { name: "Sake", category: "drinks", image: sake, price: 5000 },
  { name: "Tuna Poke Bowl", category: "dishes", image: tunaPokeBowl, price: 30000 },
  { name: "Sardine Stew", category: "dishes", image: sardineStew, price: 35000 },
  { name: "Vegetarian Ramen", category: "dishes", image: vegetarianRamen, price: 40000 },
  { name: "Vegetarian Soup", category: "dishes", image: vegetarianSoup, price: 20000 },
];
