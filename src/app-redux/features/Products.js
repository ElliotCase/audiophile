import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "carts",
  initialState: {
    products: {
      headphones: [
        {
          id: 1,
          image: require("../../assets/category-headphones/mobile/image-xx99-mark-two.jpg")
            .default,
          title: true,
          heading: "XX99 MARK II HEADPHONES",
          description:
            "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
          path: "/products/headphones/xx99-mark-ii",
        },
        {
          id: 2,
          image: require("../../assets/category-headphones/mobile/image-xx99-mark-one.jpg")
            .default,
          title: false,
          heading: "XX99 MARK I HEADPHONES",
          description:
            "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
          path: "/products/headphones/xx99-mark-i",
        },
        {
          id: 3,
          image: require("../../assets/category-headphones/mobile/image-xx59.jpg")
            .default,
          title: false,
          heading: "XX59 HEADPHONES",
          description:
            "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
          path: "/products/headphones/xx59",
        },
      ],

      speakers: [
        {
          id: 1,
          image: require("../../assets/category-speakers/mobile/image-zx9.jpg")
            .default,
          title: true,
          heading: "ZX9 speaker",
          description:
            "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
          path: "/products/speakers/zx9",
        },
        {
          id: 2,
          image: require("../../assets/category-speakers/mobile/image-zx7.jpg")
            .default,
          title: false,
          heading: "ZX7 SPEAKER",
          description:
            "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
          path: "/products/speakers/zx7",
        },
      ],

      earphones: [
        {
          id: 1,
          image: require("../../assets/category-earphones/mobile/image-yx1-earphones.jpg")
            .default,
          title: true,
          heading: "YX1 WIRELESS EARPHONES",
          description:
            "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
          path: "/products/earphones/yx1",
        },
      ],
    },
  },
  reducers: {
    addItem: () => {},
  },
});

export const { addItem } = productSlice.actions;

export default productSlice.reducer;
