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
  sizes?: string[];
  printing?: string[];
  lamination?: string[];
  customization?: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "printed-pp-woven-bags",
    name: "Printed PP Woven Bags",
    category: "Custom Printed",
    image: productBopp,
    short:
      "Custom-designed woven bags printed with your branding, logos, product information and artwork using high-quality flexo printing.",
    description:
      "Our flagship offering — fully custom printed PP woven bags engineered to each client's specification. Up to 8-color flexographic printing on a tailored woven substrate, sized and stitched to suit feed mills, rice mills, seed companies and agri brands across Bangladesh.",
    applications: [
      "Poultry Feed",
      "Fish Feed",
      "Cattle Feed",
      "Rice Mills",
      "Flour Mills",
      "Seed Companies",
      "Agricultural Products",
    ],
    features: [
      "Multi-color Printing",
      "Custom Branding",
      "Durable Ink",
      "High Visibility",
      "Excellent Shelf Appearance",
    ],
    sizes: ["25 kg", "40 kg", "50 kg", "Custom dimensions on request"],
    printing: ["Up to 8-color flexo", "Pantone-matched brand colors", "Logo & artwork registration", "Variable text / batch coding"],
    lamination: ["Optional BOPP overlay", "PE inner liner add-on", "Plain (unlaminated) finish"],
    customization: ["GSM 55–120", "Fabric color & weave", "Handle / valve options", "Hot-cut or stitched bottom"],
  },
  {
    slug: "plain-pp-woven-bags",
    name: "Unlaminated (Plain) PP Woven Bags",
    category: "Standard",
    image: productWoven,
    short:
      "Economical woven polypropylene bags with excellent breathability for produce and grain.",
    description:
      "Cost-effective plain PP woven bags engineered for ventilated storage of perishable produce. High tensile strength with the airflow that root vegetables and coarse grain demand.",
    applications: ["Potatoes", "Onion", "Garlic", "Vegetables", "Grain"],
    features: ["Breathable", "Lightweight", "Cost-Effective", "Reusable"],
    sizes: ["25 kg", "50 kg", "Custom"],
    printing: ["Plain unprinted", "1–2 color stencil branding (optional)"],
    lamination: ["None (breathable weave)"],
    customization: ["GSM 50–80", "Fabric color", "Hot-cut or stitched mouth"],
  },
  {
    slug: "laminated-coated-bags",
    name: "Laminated (Coated) PP Woven Bags",
    category: "Industrial",
    image: weavingImg,
    short: "Protective laminated woven bags resistant to moisture, humidity and rough handling.",
    description:
      "A polypropylene lamination layer is fused over the woven structure to deliver a moisture barrier suited for fertilizer, construction materials, industrial powders and outdoor stockpiling.",
    applications: ["Fertilizer", "Construction Materials", "Industrial Products", "Animal Feed", "Agricultural Products"],
    features: ["Water Resistant", "Durable", "Long Shelf Life", "Premium Finish"],
    sizes: ["25 kg", "40 kg", "50 kg", "Custom"],
    printing: ["Up to 6-color flexo over lamination", "Brand logo & specification panel"],
    lamination: ["Inside BOPP", "Outside BOPP", "Two-side lamination"],
    customization: ["Anti-slip coating", "UV-stable resin", "Heavy-duty stitching"],
  },
  {
    slug: "pp-bags-inner-liner",
    name: "PP Bags with Inner Liners",
    category: "Food Grade",
    image: warehouseImg,
    short:
      "Premium woven bags with PE inner liners for moisture protection and leak prevention of fine powders.",
    description:
      "Inner PE liners create a sealed barrier ideal for fine powders, food-grade contents and hygroscopic chemicals — extending shelf life and shipping integrity.",
    applications: ["Flour", "Sugar", "Salt", "Chemical Powder", "Fine Animal Feed"],
    features: ["Moisture Barrier", "Leak Resistant", "Food-Grade Option", "Fine Powder Protection"],
    sizes: ["10 kg", "25 kg", "50 kg", "Custom"],
    printing: ["Brand printing on outer woven layer"],
    lamination: ["Inner PE liner", "Optional outer BOPP"],
    customization: ["Liner micron thickness", "Heat-sealed or loose liner"],
  },
  {
    slug: "bopp-laminated-bags",
    name: "BOPP Laminated Bags",
    category: "Premium Retail",
    image: productBopp,
    short:
      "Premium glossy bags with high-definition printing for retail packaging and premium branding.",
    description:
      "Up to 8-color BOPP printing on a laminated woven substrate produces retail-grade, scratch-resistant packaging worthy of premium consumer brands and export programs.",
    applications: ["Premium Rice", "Pet Food", "Export Products", "Branded Food Products", "Retail Packaging"],
    features: ["High-Resolution Printing", "Gloss Finish", "Premium Appearance", "Scratch Resistant"],
    sizes: ["1 kg", "5 kg", "10 kg", "25 kg", "50 kg"],
    printing: ["Up to 8-color photo-grade BOPP", "Pantone matching", "Matte / gloss finish"],
    lamination: ["BOPP film laminated woven"],
    customization: ["Window patch", "Tear notch", "Easy-open seal"],
  },
  {
    slug: "gusseted-bags",
    name: "Gusseted Bags",
    category: "Bulk Storage",
    image: manufacturingExtrusion,
    short:
      "Side-gusset bags engineered for efficient stacking, larger capacity and warehouse-friendly storage.",
    description:
      "The reinforced side-gusset geometry maximises pallet density and structural stability — purpose-built for bulk grain, feed and high-volume industrial flows.",
    applications: ["Grain", "Animal Feed", "Bulk Packaging", "Industrial Products"],
    features: ["Better Pallet Stacking", "Stable Shape", "Large Capacity", "Warehouse Efficient"],
    sizes: ["25 kg", "50 kg", "Custom bulk"],
    printing: ["Branding on front & back panels"],
    lamination: ["Laminated or unlaminated"],
    customization: ["Gusset width", "Bottom stitching style", "Load rating"],
  },
];

export const INDUSTRIES = [
  { name: "Agriculture", desc: "Breathable PP sacks for produce, vegetables and grain.", icon: "Sprout" },
  { name: "Feed Industry", desc: "Custom printed feed bags for the wider animal feed sector.", icon: "Beef" },
  { name: "Poultry Industry", desc: "Brand-grade printed sacks for hatcheries and poultry feed mills.", icon: "Beef" },
  { name: "Fish Feed", desc: "Moisture-resistant lined and laminated bags for aquaculture.", icon: "Ship" },
  { name: "Cattle Feed", desc: "Reinforced woven sacks with multi-color flexo printing.", icon: "Beef" },
  { name: "Food Processing", desc: "Lined and laminated bags for sugar, salt, flour and food powders.", icon: "ShoppingBag" },
  { name: "Rice Mills", desc: "Premium BOPP and lined bags for branded rice programmes.", icon: "Wheat" },
  { name: "Seed Companies", desc: "High-impact printed packaging for branded seed lines.", icon: "Sprout" },
  { name: "Chemical Industry", desc: "Lined and laminated sacks for fine powders and granules.", icon: "FlaskConical" },
  { name: "Retail Packaging", desc: "Photo-grade BOPP bags engineered for shelf appeal.", icon: "ShoppingBag" },
  { name: "Industrial Packaging", desc: "OEM bulk packaging for industrial powders and granules.", icon: "FlaskConical" },
  { name: "Export Packaging", desc: "Container-ready packaging built to international export specs.", icon: "Ship" },
  { name: "Construction Materials", desc: "Laminated woven bags suited to moisture-sensitive industrial materials.", icon: "HardHat" },
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
  "Custom Manufacturing",
  "Premium Raw Materials",
  "Flexible Production",
  "Strict Quality Control",
  "Bulk Order Capability",
  "Reliable Delivery",
];