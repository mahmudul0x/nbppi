import productWoven from "@/assets/product-woven.jpg";
import productBopp from "@/assets/product-bopp.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import weavingImg from "@/assets/weaving.jpg";
import manufacturingExtrusion from "@/assets/manufacturing-extrusion.jpg";
import factoryAerial from "@/assets/factory-aerial.jpg";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Manufacturing", to: "/manufacturing" },
  { label: "Quality", to: "/quality" },
  { label: "Industries", to: "/industries" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Career", to: "/career" },
  { label: "Contact", to: "/contact" },
] as const;

export type Product = {
  slug: string;
  name: string;
  short: string;
  description: string;
  applications: string[];
  features: string[];
  image: string;
  category: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "plain-pp-woven-bags",
    name: "Unlaminated (Plain) PP Woven Bags",
    category: "Standard",
    image: productWoven,
    short:
      "Lightweight breathable polypropylene woven bags that allow airflow to reduce moisture accumulation.",
    description:
      "Engineered for ventilated storage of perishable produce, our plain PP woven bags balance high tensile strength with the breathability that root vegetables and coarse grain demand.",
    applications: ["Potatoes", "Onions", "Garlic", "Vegetables", "Coarse Grain", "Agricultural Products"],
    features: ["Breathable", "Lightweight", "Cost Effective", "Reusable", "Eco Friendly"],
  },
  {
    slug: "laminated-coated-bags",
    name: "Laminated (Coated) Bags",
    category: "Industrial",
    image: weavingImg,
    short: "Protective laminated woven bags resistant to moisture, humidity and rain.",
    description:
      "A polypropylene lamination layer is fused over the woven structure to deliver a moisture barrier suited for outdoor stockpiling and demanding construction material logistics.",
    applications: ["Cement", "Sand", "Fertilizer", "Construction Materials", "Minerals"],
    features: ["Water Resistant", "Strong", "Durable", "Long Storage"],
  },
  {
    slug: "pp-bags-inner-liner",
    name: "PP Bags with Inner Liners",
    category: "Food Grade",
    image: warehouseImg,
    short:
      "Premium woven bags equipped with polyethylene liners to protect powders from moisture and leakage.",
    description:
      "Inner PE liners create a sealed barrier ideal for fine powders, food-grade contents and hygroscopic chemicals — extending shelf life and shipping integrity.",
    applications: ["Flour", "Sugar", "Salt", "Chemical Powder", "Animal Feed"],
    features: ["Moisture Barrier", "Leak Proof", "Food Grade", "High Protection"],
  },
  {
    slug: "bopp-laminated-bags",
    name: "BOPP Laminated Bags",
    category: "Premium Retail",
    image: productBopp,
    short:
      "Premium glossy printed packaging with superior branding and high-definition graphics.",
    description:
      "Up to 8-color BOPP printing on a laminated woven substrate produces retail-grade, scratch-resistant packaging worthy of premium consumer brands and export programs.",
    applications: ["Premium Rice", "Seed", "Pet Food", "Retail Packaging", "Export Products"],
    features: ["Photo Quality Printing", "Luxury Finish", "Scratch Resistant", "Retail Branding"],
  },
  {
    slug: "gusseted-bags",
    name: "Gusseted Bags",
    category: "Bulk Storage",
    image: manufacturingExtrusion,
    short:
      "Side-gusset engineered packaging designed for efficient stacking and warehouse storage.",
    description:
      "The reinforced side-gusset geometry maximises pallet density and structural stability — purpose-built for bulk grain, feed and high-volume industrial flows.",
    applications: ["Grain", "Animal Feed", "Bulk Products", "Industrial Packaging"],
    features: ["Better Stacking", "Large Capacity", "Warehouse Friendly", "Stable Structure"],
  },
  {
    slug: "bulk-custom-export",
    name: "Bulk & Custom Export Packaging",
    category: "Export",
    image: factoryAerial,
    short: "FIBC, container liners and bespoke industrial packaging engineered for export programs.",
    description:
      "Full custom development from substrate to print, including FIBC, container liners and program-specific specifications for international supply chains.",
    applications: ["Export", "Container Logistics", "OEM Brands", "Distribution"],
    features: ["Custom Engineering", "Export-Ready", "FIBC Capable", "Program Scale"],
  },
];

export const INDUSTRIES = [
  { name: "Agriculture", desc: "Rice, grain, vegetables and produce.", icon: "Sprout" },
  { name: "Food Processing", desc: "Flour, sugar, salt, food-grade powders.", icon: "Wheat" },
  { name: "Rice & Flour Mills", desc: "Premium BOPP and lined bags for milling.", icon: "Wheat" },
  { name: "Chemical Industry", desc: "Liner bags for powders and granules.", icon: "FlaskConical" },
  { name: "Construction", desc: "Cement, sand, aggregates and minerals.", icon: "HardHat" },
  { name: "Fertilizer", desc: "Laminated UV-stable industrial sacks.", icon: "Leaf" },
  { name: "Feed Mills", desc: "Breathable bags for livestock feed.", icon: "Beef" },
  { name: "Exporters", desc: "Export-grade FIBC and container liners.", icon: "Ship" },
  { name: "Retail Packaging", desc: "Premium BOPP for shelf-ready retail.", icon: "ShoppingBag" },
  { name: "Government", desc: "Tender-compliant industrial packaging.", icon: "Landmark" },
];

export const PROCESS = [
  ["01", "Raw Material", "Certified virgin PP granules from global petrochemical partners."],
  ["02", "Extrusion", "Tape extrusion calibrated to denier and tensile spec."],
  ["03", "Tape Stretching", "Mono-axial stretching for optimal warp / weft strength."],
  ["04", "Circular Weaving", "Starlinger / Lohia looms produce uniform fabric tubes."],
  ["05", "Lamination", "Optional BOPP / PE lamination for moisture barrier."],
  ["06", "Printing", "Up to 8-color flexo / BOPP with brand-grade color matching."],
  ["07", "Cutting", "Automated, precision cutting to programmed dimensions."],
  ["08", "Stitching", "Reinforced load-rated seams with double-needle finish."],
  ["09", "Quality Inspection", "100% pre-shipment QC under ISO-aligned protocols."],
  ["10", "Packing", "Pallet- and container-ready export packaging."],
  ["11", "Delivery", "FCL / LCL logistics to 22+ countries."],
] as const;

export const CLIENTS = [
  "BRAC", "Pran Group", "Akij Group", "ACI", "Square", "Bashundhara",
  "City Group", "Meghna", "Olympic", "Abul Khair", "ACME", "Beximco",
];

export const TRUST_BAR = [
  "ISO 9001 Certified",
  "Premium Raw Materials",
  "Export Quality",
  "Custom Manufacturing",
  "Fast Delivery",
  "Customer Satisfaction",
];