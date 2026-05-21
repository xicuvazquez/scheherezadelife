"use client";

import Link from "next/link";

const allProducts = [
  {
    slug: "mamba-ring",
    category: "rings",
    name: "Mamba Ring",
    price: "89€",
    href: "/shop/rings/mamba-ring",
    editorial: "/images/products/mamba-editorial.png",
    worn: "/images/products/mamba-worn.png",
  },

  {
    slug: "cara-ring",
    category: "rings",
    name: "Cara Ring",
    price: "39€",
    href: "/shop/rings/cara-ring",
    editorial: "/images/products/cararing-editorial.png",
    worn: "/images/products/cararing-worn.png",
  },

  {
    slug: "fortuna-ring",
    category: "rings",
    name: "Fortuna Ring",
    price: "69€",
    href: "/shop/rings/fortuna-ring",
    editorial: "/images/products/fortuna-editorial.png",
    worn: "/images/products/fortuna-worn.png",
  },

  {
    slug: "abstra-earrings",
    category: "earrings",
    name: "Abstra Earrings",
    price: "49€",
    href: "/shop/earrings/abstra-earrings",
    editorial: "/images/products/abstra-editorial.png",
    worn: "/images/products/abstra-worn.png",
  },

  {
    slug: "lovehoops",
    category: "earrings",
    name: "Lovehoops",
    price: "59€",
    href: "/shop/earrings/lovehoops",
    editorial: "/images/products/lovehoops-editorial.png",
    worn: "/images/products/lovehoops-worn.png",
  },

  {
    slug: "moonface-pendant",
    category: "pendants",
    name: "Moonface Pendant",
    price: "79€",
    href: "/shop/pendants/moonface-pendant",
    editorial: "/images/products/colgante-moonface-editorial.png",
    worn: "/images/products/colgante-moonface-worn.png",
  },
];

type Props = {
  category: string;
  currentProduct: string;
};

export default function RelatedProducts({
  category,
  currentProduct,
}: Props) {

  const related = allProducts.filter(
    (product) =>
      product.category === category &&
      product.slug !== currentProduct
  );

  return (

    <section className="px-8 md:px-14 pb-32">

      <div className="flex items-center justify-between mb-14">

        <h2
          className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.06em]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          You may also like
        </h2>

      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {related.map((product) => (

          <Link
            key={product.slug}
            href={product.href}
            className="group block"
          >

            <div className="relative overflow-hidden rounded-[2.2rem] bg-[#ebe7e2] aspect-[3/4]">

              <img
                src={product.editorial}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:opacity-0"
              />

              <img
                src={product.worn}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-700 group-hover:opacity-100"
              />

            </div>

            <div className="flex items-end justify-between mt-5 px-1">

              <h3
                className="text-[1.8rem] tracking-[-0.04em]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {product.name}
              </h3>

              <p className="text-sm opacity-55 mb-2">
                {product.price}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );
}