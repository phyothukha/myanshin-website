import type { ImageMetadata } from "astro";
import blogImg1 from "../assets/blog-img/blogImg1.jpg";
import blogImg2 from "../assets/blog-img/blogImg2.png";
import blogImg3 from "../assets/blog-img/blogImg3.jpeg";
import blogImg4 from "../assets/blog-img/blogImg4.jpeg";
import sophieMoore from "../assets/about-page/sophieMoore.png";
import johnCarter from "../assets/about-page/johnCarter.png";

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image" };

export interface Author {
  role: string;
  bio: string;
  avatar: ImageMetadata;
}

export const authors: Record<string, Author> = {
  "Sophie Moore": {
    role: "Co Founder & Chef",
    bio: "Sophie Moore, Co-Founder and Chef, is the heart of our culinary vision. With passion and creativity, she blends tradition and innovation to deliver unforgettable flavors.",
    avatar: sophieMoore,
  },
  "John Carter": {
    role: "Sous Chef",
    bio: "John Carter brings years of kitchen discipline to every dish he prepares. He believes great food starts with patience, precise technique, and respect for quality ingredients.",
    avatar: johnCarter,
  },
};

export interface BlogPost {
  slug: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  content: ContentBlock[];
  author: string;
  date: string;
  image: ImageMetadata;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "gluten-free-sushi",
    title: "How to prepare a delicious gluten-free sushi",
    shortTitle: "Gluten-Free Sushi",
    excerpt:
      "Discover the essentials of making gluten-free sushi at home! From seasoned rice to fresh fillings and the right tools, learn how to create flavorful, restaurant-quality sushi in your kitchen.",
    content: [
      {
        type: "heading",
        text: "What do you need to prepare a gluten-free sushi?",
      },
      {
        type: "paragraph",
        text: "Making sushi at home is fun and rewarding! Here's what you'll need to get started:",
      },
      {
        type: "list",
        items: [
          "Sushi Rice: Short-grain or medium-grain rice, seasoned with rice vinegar, sugar, and salt.",
          "Nori (Seaweed Sheets): Essential for rolling sushi.",
          "Fresh Ingredients: Choose your favorite fillings like raw fish (salmon, tuna), cooked shrimp, crab sticks, cucumber, avocado, or pickled radish.",
          "Rolling Mat (Makisu): A bamboo mat to roll your sushi tightly.",
          "Sharp Knife: For cleanly slicing rolls without squishing them.",
          "Wasabi & Pickled Ginger: Traditional condiments for authentic flavor.",
          "Optional Toppings: Sesame seeds, fish roe, or spicy mayo for extra flair.",
        ],
      },
      {
        type: "heading",
        text: "What are the right ingredients to prepare a delicious gluten-free sushi?",
      },
      {
        type: "paragraph",
        text: "Cooking sushi at home is an enjoyable process that combines creativity and precision. Start by preparing sushi rice, which is the foundation of every sushi dish. Rinse short-grain rice thoroughly until the water runs clear, then cook it with the right amount of water for a fluffy texture. Once cooked, season the rice with a mixture of rice vinegar, sugar, and salt to achieve the signature tangy flavor.",
      },
      {
        type: "paragraph",
        text: "Next, gather fresh ingredients like fish, vegetables, and seaweed sheets (nori). Slice the fish and vegetables into thin, uniform strips to make rolling easier. Lay a nori sheet on a bamboo rolling mat, spread a layer of seasoned rice evenly, and add your chosen fillings. Roll it tightly using the mat, ensuring the roll is firm and secure. Finally, slice the roll into bite-sized pieces with a sharp knife, and serve it with soy sauce, wasabi, and pickled ginger for a complete sushi experience.",
      },
      { type: "image" },
      {
        type: "heading",
        text: "What's the art behind preparing a delicious gluten-free sushi?",
      },
      {
        type: "paragraph",
        text: "Creating gluten-free sushi is about balance, precision, and quality ingredients. Here's the secret:",
      },
      {
        type: "list",
        items: [
          "Perfecting the Rice: The heart of sushi lies in perfectly cooked sushi rice, seasoned with gluten-free rice vinegar for a delicate tang.",
          "Selecting Fresh Ingredients: Use the freshest fish, vegetables, and gluten-free condiments to enhance flavor and authenticity.",
          "Checking for Gluten-Free Certification: Ensure all components — nori, soy sauce (tamari), wasabi, and pickled ginger — are certified gluten-free.",
          "Mastering the Roll: Rolling sushi is an art; practice makes perfect. Use a bamboo mat to achieve tight, even rolls.",
          "Presentation Matters: Slice cleanly and arrange beautifully, as sushi is as much about visual appeal as taste.",
        ],
      },
    ],
    author: "Sophie Moore",
    date: "Sep 30, 2024",
    image: blogImg1,
  },
  {
    slug: "perfect-ramen-broth",
    title: "Discover the Secrets of Perfect Ramen Broth",
    shortTitle: "Ramen Broth",
    excerpt:
      "Learn how to create a rich, flavorful ramen broth from scratch! This guide explores different broth styles, tips for seasoning, and the best ingredients for a comforting bowl of ramen.",
    content: [
      { type: "heading", text: "What do you need to make a rich ramen broth?" },
      {
        type: "paragraph",
        text: "A great bowl of ramen starts long before the noodles go in. Here's what you'll need to build a proper broth from scratch:",
      },
      {
        type: "list",
        items: [
          "Bones or Vegetables: Pork bones, chicken carcasses, or kombu and shiitake for a vegetarian base.",
          "Aromatics: Garlic, ginger, scallions, and onion to build depth.",
          "A Heavy Stockpot: Enough room for a long, gentle simmer without scorching.",
          "Tare (Seasoning Base): Soy sauce, miso, or salt, prepared separately from the broth itself.",
          "Fresh Noodles: Ramen noodles hold up to hot broth far better than substitutes.",
          "Toppings: Soft-boiled eggs, scallions, nori, and chili oil to finish the bowl.",
        ],
      },
      { type: "heading", text: "What makes a broth taste truly authentic?" },
      {
        type: "paragraph",
        text: "Authentic ramen broth is built on time, not shortcuts. Start by blanching bones briefly to remove impurities, then rinse them clean before the real simmer begins — this single step is what keeps a broth clear instead of murky.",
      },
      {
        type: "paragraph",
        text: "Simmer gently for several hours, skimming regularly, and add aromatics only in the final stretch so they stay fragrant instead of turning bitter. The broth is ready when it coats the back of a spoon and smells rounder than when you started.",
      },
      { type: "image" },
      {
        type: "heading",
        text: "What's the secret to balancing a bowl of ramen?",
      },
      {
        type: "paragraph",
        text: "Balance is everything once the broth is done. Keep these in mind when assembling each bowl:",
      },
      {
        type: "list",
        items: [
          "Season the Tare Separately: Mix seasoning into each bowl individually so every serving tastes consistent.",
          "Time the Noodles Precisely: Fresh ramen noodles overcook in seconds — have your bowls ready before they're done.",
          "Layer the Toppings: Build height and color, not just flavor, for a bowl that looks as good as it tastes.",
          "Serve Immediately: Ramen waits for no one; broth, noodles, and toppings are best assembled just before serving.",
        ],
      },
    ],
    author: "John Carter",
    date: "Sep 30, 2024",
    image: blogImg2,
  },
  {
    slug: "fluffy-pancakes",
    title: "Fluffy Pancakes: The Secret to Perfect Morning Breakfasts",
    shortTitle: "Fluffy Pancakes",
    excerpt:
      "Unlock the secrets to making light, fluffy pancakes every time! From choosing the right ingredients to mastering the perfect flip, this guide will make your breakfast routine delicious and fun.",
    content: [
      {
        type: "heading",
        text: "What do you need to make truly fluffy pancakes?",
      },
      {
        type: "paragraph",
        text: "Great pancakes come down to a handful of basics, used the right way:",
      },
      {
        type: "list",
        items: [
          "Flour: All-purpose flour gives the right structure without becoming dense.",
          "Baking Powder: Fresh, not expired — this is what gives pancakes their lift.",
          "Buttermilk: Its acidity reacts with the baking powder for extra rise and flavor.",
          "Eggs: Room-temperature eggs incorporate more evenly into the batter.",
          "A Well-Seasoned Griddle: Even heat is essential for a golden, consistent cook.",
          "A Light Hand: A spatula and the patience not to press down while cooking.",
        ],
      },
      { type: "heading", text: "What actually makes pancakes light and airy?" },
      {
        type: "paragraph",
        text: "The biggest culprit behind flat pancakes is overmixing. Stirring the batter until it's perfectly smooth develops gluten, which fights against the rise you're trying to achieve — a few visible lumps are a good sign, not a mistake.",
      },
      {
        type: "paragraph",
        text: "Letting the batter rest for ten minutes before cooking gives the baking powder time to activate and the flour time to hydrate fully, both of which noticeably improve texture without any extra effort.",
      },
      { type: "image" },
      { type: "heading", text: "What's the secret to the perfect flip?" },
      {
        type: "paragraph",
        text: "Technique matters just as much as the batter itself:",
      },
      {
        type: "list",
        items: [
          "Watch for Bubbles: Wait until bubbles form across the surface and stay open before flipping.",
          "Check the Edges: Set, matte edges mean the bottom has cooked through properly.",
          "Flip Once: Flipping repeatedly deflates the batter and leads to dense pancakes.",
          "Don't Press Down: Pressing squeezes out the air you worked to build in.",
          "Serve Immediately: Pancakes are at their fluffiest straight off the griddle.",
        ],
      },
    ],
    author: "Sophie Moore",
    date: "Sep 30, 2024",
    image: blogImg3,
  },
  {
    slug: "cooking-gadgets",
    title: "5 great cooking gadgets you can buy to save time while cooking",
    shortTitle: "Cooking Gadgets",
    excerpt:
      "Streamline your cooking process with these five game-changing gadgets. From speedy blenders to efficient multi-cookers, these tools will help you save time while creating delicious meals.",
    content: [
      { type: "heading", text: "Why invest in the right kitchen gadgets?" },
      {
        type: "paragraph",
        text: "The right gadgets don't just save time — they make it easier to cook consistently well, even on a busy night. Here are five worth having in any kitchen:",
      },
      {
        type: "list",
        items: [
          "A Programmable Multi-Cooker: It braises, steams, and pressure-cooks in one pot, turning a two-hour broth into a 30-minute job with almost no attention needed.",
          "A High-Powered Blender: Smooth sauces, dressings, and soups in seconds, with enough power to handle ice and frozen fruit without leaving chunks behind.",
          "A Digital Kitchen Scale: Measuring ingredients by weight instead of volume makes recipes far more consistent, especially for rice, dough, and seasoning.",
          "A Quality Chef's Knife With a Magnetic Strip: A sharp, well-balanced knife stored somewhere visible and within reach cuts prep time more than almost any other single tool.",
          "An Instant-Read Thermometer: No more guessing whether fish, meat, or fried food is done; a few seconds against the thickest part gives you a precise answer every time.",
        ],
      },
      {
        type: "heading",
        text: "How do you choose the right gadget for your kitchen?",
      },
      {
        type: "paragraph",
        text: "Not every gadget deserves counter space. The best ones do more than one job well, are easy enough to clean that you'll actually use them, and solve a problem you run into often — not one you might face once a year.",
      },
      {
        type: "paragraph",
        text: "Start with whichever tool addresses your biggest daily bottleneck, whether that's slow prep, inconsistent seasoning, or guessing when food is done, and build your collection from there.",
      },
      { type: "image" },
      {
        type: "heading",
        text: "What's the best way to build a habit around new tools?",
      },
      {
        type: "paragraph",
        text: "A gadget only saves time if it's actually part of your routine:",
      },
      {
        type: "list",
        items: [
          "Keep It Visible: Store new tools within reach, not in the back of a cabinet.",
          "Use It Immediately: Try a new gadget the same week you get it, while the excitement is still fresh.",
          "Pair It With a Task: Attach each tool to a specific recurring job, like weighing rice or checking fish for doneness.",
          "Clean as You Go: A gadget that's a hassle to clean quickly falls out of rotation.",
          "Give It a Month: Some tools take a few uses before they truly earn their place in your kitchen.",
        ],
      },
    ],
    author: "Sophie Moore",
    date: "Sep 30, 2024",
    image: blogImg4,
  },
];
