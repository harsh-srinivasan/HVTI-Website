import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ProductPage from "@/components/products/ProductPage";
import { ProductData } from "@/types/product";
import { allProductsData, getProductBySlug } from "@/data/products";
import { categoriesData } from "@/data/categories";

/* ================================================================
   HVTI DYNAMIC PRODUCT ROUTE
   File: app/products/[slug]/page.tsx
   ================================================================ */

function resolveProduct(slug: string): ProductData | undefined {
  // Check our master typed product registry first
  const product = getProductBySlug(slug);
  if (product) {
    return product;
  }

  // Fallback: search across all categories in taxonomy if new dynamic items are added
  for (const cat of Object.values(categoriesData)) {
    for (const prod of cat.products) {
      if (prod.slug === slug || prod.id === slug) {
        return {
          slug: prod.slug || prod.id,
          title: prod.title,
          category: prod.categoryTitle || cat.title,
          description: prod.description,
          overview: prod.subtitle || prod.description,
          image: prod.image,
          renderType: "image",
          highlights: [
            prod.badge || "Industrial Grade",
            "100% Indigenous High-Voltage Engineering",
            "IEC / IEEE Standard Compliant",
          ],
          features: prod.features?.map((f) => ({
            title: f.title,
            description: f.description,
          })),
          applications: [
            { title: "Power Substations", icon: "switchgear" },
            { title: "Generators & Motors", icon: "generator" },
            { title: "Power Transformers", icon: "transformer" },
            { title: "Transmission Utilities", icon: "cable" },
          ],
          cta: {
            title: `Ready to Inquire about ${prod.title}?`,
            description:
              "Our high-voltage application engineers are ready to assist with custom engineering specifications and rapid quotations.",
            primaryButtonText: "REQUEST A QUOTE",
            primaryButtonLink: `/contact?subject=${encodeURIComponent(prod.title)}`,
          },
        };
      }
    }
  }

  return undefined;
}

export async function generateStaticParams() {
  const allSlugs = new Set<string>(Object.keys(allProductsData));
  for (const cat of Object.values(categoriesData)) {
    for (const prod of cat.products) {
      if (prod.slug) allSlugs.add(prod.slug);
      if (prod.id) allSlugs.add(prod.id);
    }
  }
  return Array.from(allSlugs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug;
  const product = resolveProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found | HVTI",
    };
  }

  return {
    title: `${product.title} | HVTI High Voltage Equipment`,
    description: product.description,
  };
}

export default async function ProductRoute({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug;

  const product = resolveProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}