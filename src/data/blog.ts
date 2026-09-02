import type { ImageMetadata } from "astro";
import blogImg1 from "../assets/blog-img/blogImg1.jpg";
import blogImg2 from "../assets/blog-img/blogImg2.png";
import blogImg3 from "../assets/blog-img/blogImg3.jpeg";
import blogImg4 from "../assets/blog-img/blogImg4.jpeg";
import sophieMoore from "../assets/about-page/sophieMoore.png";
import johnCarter from "../assets/about-page/johnCarter.png";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  author: string;
  avatar: ImageMetadata;
  date: string;
  image: ImageMetadata;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "gluten-free-sushi",
    title: "How to prepare a delicious gluten-free sushi",
    excerpt:
      "Discover the essentials of making gluten-free sushi at home! From seasoned rice to fresh fillings and the right tools, learn how to create flavorful, restaurant-quality sushi in your kitchen.",
    body: [
      "Gluten hides in more sushi ingredients than most home cooks expect — regular soy sauce, imitation crab, and some seasoned rice vinegars can all contain wheat. The good news is that swapping each one for a gluten-free version doesn't cost you any flavor.",
      "Start with the rice: rinse it until the water runs clear, then season it with a gluten-free rice vinegar, sugar, and salt while it's still warm so the grains absorb the seasoning evenly. For fillings, fresh fish, avocado, cucumber, and cream cheese are naturally gluten-free — just double-check any sauces or tempura-style toppings.",
      "Swap regular soy sauce for tamari, which is brewed without wheat but tastes nearly identical. Keep your cutting board and hands lightly wetted with rice vinegar water when rolling, and serve with wasabi, pickled ginger, and a small dish of tamari on the side.",
    ],
    author: "Sophie Moore",
    avatar: sophieMoore,
    date: "Sep 30, 2024",
    image: blogImg1,
  },
  {
    slug: "perfect-ramen-broth",
    title: "Discover the Secrets of Perfect Ramen Broth",
    excerpt:
      "Learn how to create a rich, flavorful ramen broth from scratch! This guide explores different broth styles, tips for seasoning, and the best ingredients for a comforting bowl of ramen.",
    body: [
      "A great bowl of ramen is built from the broth up. Whether you're going for a light shoyu base or a rich, cloudy tonkotsu, the broth needs hours of gentle simmering to pull flavor and body from bones, aromatics, and vegetables without turning bitter.",
      "Keep the simmer low and steady, skimming impurities off the top in the first hour — a rolling boil will emulsify fat too aggressively and cloud a broth that's meant to stay clear, while a tonkotsu broth actually wants that emulsification for its signature richness.",
      "Finish with a seasoning base, or tare, built separately from soy sauce, miso, or salt, so you can control the saltiness of each bowl independently. A drizzle of chili oil, fresh scallions, and a soft-boiled egg at the end turn a good broth into a complete bowl.",
    ],
    author: "John Carter",
    avatar: johnCarter,
    date: "Sep 30, 2024",
    image: blogImg2,
  },
  {
    slug: "fluffy-pancakes",
    title: "Fluffy Pancakes: The Secret to Perfect Morning Breakfasts",
    excerpt:
      "Unlock the secrets to making light, fluffy pancakes every time! From choosing the right ingredients to mastering the perfect flip, this guide will make your breakfast routine delicious and fun.",
    body: [
      "Dense, flat pancakes are almost always a mixing problem. Overworking the batter develops gluten and knocks the air back out of it, so stir just until the dry and wet ingredients come together — a few lumps are exactly what you want to see.",
      "Let the batter rest for ten minutes before cooking; this gives the baking powder time to start working and the flour time to fully hydrate, both of which make a noticeably lighter pancake. A hot, evenly heated pan matters just as much as the batter itself.",
      "Wait for bubbles to form across the surface and the edges to look set before flipping — resist the urge to press down afterward, which just squeezes out the air you worked to build in. Serve warm with butter and maple syrup while they're at their fluffiest.",
    ],
    author: "Sophie Moore",
    avatar: sophieMoore,
    date: "Sep 30, 2024",
    image: blogImg3,
  },
  {
    slug: "cooking-gadgets",
    title: "5 great cooking gadgets you can buy to save time while cooking",
    excerpt:
      "Streamline your cooking process with these five game-changing gadgets. From speedy blenders to efficient multi-cookers, these tools will help you save time while creating delicious meals.",
    body: [
      "1. A programmable multi-cooker — it braises, steams, and pressure-cooks in one pot, turning a two-hour broth into a 30-minute job with almost no attention needed.",
      "2. A high-powered blender — smooth sauces, dressings, and soups in seconds, with enough power to handle ice and frozen fruit without leaving chunks behind.",
      "3. A digital kitchen scale — measuring ingredients by weight instead of volume makes recipes far more consistent, especially for rice, dough, and seasoning.",
      "4. A quality chef's knife with a magnetic strip — a sharp, well-balanced knife stored somewhere visible and within reach cuts prep time more than almost any other single tool.",
      "5. An instant-read thermometer — no more guessing whether fish, meat, or fried food is done; a few seconds against the thickest part gives you a precise answer every time.",
    ],
    author: "Sophie Moore",
    avatar: sophieMoore,
    date: "Sep 30, 2024",
    image: blogImg4,
  },
];
