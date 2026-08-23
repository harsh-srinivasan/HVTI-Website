import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ProductPage from "@/components/products/ProductPage";
import highVoltageACTestingKits from "@/data/products/high-voltage-ac-testing-kits";

/* ================================================================
   PRODUCT ROUTE
   File: app/products/[slug]/page.tsx
   ================================================================ */

const products: Record<string, typeof highVoltageACTestingKits> = {
  "high-voltage-ac-testing-kits": highVoltageACTestingKits,
};

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug;
  const product = products[slug];

  if (!product) {
    return {
      title: "Product Not Found | HVTI",
    };
  }

  return {
    title: `${product.title} | HVTI High Voltage Testing Equipment`,
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

  const product = products[slug];

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}