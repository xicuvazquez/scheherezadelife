import Link from "next/link";
import SelectionBadge from "@/components/SelectionBadge";

const selectionProducts = [
  {
  id: 1,
  slug: "moonface-pendant",
  category: "pendants",
  name: "Moonface Pendant",
  price: "79€",
  editorial: "/images/products/colgante-moonface-editorial.png",
  worn: "/images/products/colgante-moonface-worn.png",
},
  {
    id: 2,
    slug: "sunrise-pendant",
    category: "pendants",
    name: "Sunrise",
    price: "59€",
    editorial: "/images/products/sunrise-editorial.png",
    worn: "/images/products/sunrise-worn.png",
  },
  {
    id: 3,
    slug: "mamba-ring",
    category: "rings",
    name: "Mamba Ring",
    price: "89€",
    editorial: "/images/products/mamba-editorial.png",
    worn: "/images/products/mamba-worn.png",
  },
  {
    id: 4,
    slug: "fortuna-ring",
    name: "Venus Ring",
    price: "59,99€",
    editorial: "/images/products/fortuna-editorial.png",
    worn: "/images/products/fortuna-worn.png",
    selection: true,
  },
  {
    id: 5,
    slug: "lovehoops-earrings",
    category: "earrings",
    name: "Lovehoops",
    price: "59€",
    editorial: "/images/products/lovehoops-editorial.png",
    worn: "/images/products/lovehoops-worn.png",
    
  },
  {
  id: 6,
  slug: "samantha-bracelet",
  name: "Samantha Bracelet",
  price: "39,99€",
  href: "/shop/bracelets/samantha-bracelet",
  editorial: "/images/products/samantha-bracelet-editorial.png",
  worn: "/images/products/samantha-bracelet-worn.png",
},
];

export default function ScheherezadeSelectionPage() {
  return (
    <main className="min-h-screen bg-[#f5f1eb] px-6 pt-32 pb-20 text-[#2b2b2b] font-serif md:px-20 md:pt-36 md:pb-28">
      <section className="mx-auto max-w-[1040px]">
        {/* HEADER */}
        <div className="mb-12 md:mb-14">
          <div className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-black/40">
            <Link href="/" className="transition-opacity hover:opacity-55">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="transition-opacity hover:opacity-55">
              Shop
            </Link>
            <span>/</span>
            <span>Scheherezade Selection</span>
          </div>

          <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-black/45">
            Scheherezade Selection
          </p>

          <h1 className="max-w-[620px] text-[2.7rem] leading-[1.02] tracking-[-0.04em] md:text-[3.5rem] lg:text-[3.9rem]">
            Piezas especiales dentro de la colección.
          </h1>

          <p className="mt-7 max-w-[520px] text-[1.02rem] leading-8 text-neutral-600">
            La S identifica piezas seleccionadas por su presencia, acabado,
            composición o carácter visual.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {selectionProducts.map((product) => (
            <div key={product.id} className="group relative overflow-hidden">
              <Link
                href={`/shop/${product.category}/${product.slug}`}
                className="block"
              >
                <img
                  src={product.editorial}
                  alt={product.name}
                  className="h-[300px] w-full object-cover transition duration-[1600ms] group-hover:opacity-0 md:h-[360px]"
                />

                <img
                  src={product.worn}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-[1600ms] group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white drop-shadow-md">
                    {product.name} →
                  </p>

                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/85 drop-shadow-md">
                    {product.price}
                  </p>
                </div>
              </Link>

              <SelectionBadge />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}