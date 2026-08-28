import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ViewAllPage from "@/components/viewAll/ViewAllPage";
import { categoriesData, getCategoryBySlug } from "@/data/categories";

/* ================================================================
   DYNAMIC VIEW ALL CATEGORY ROUTE
   File: app/viewall/[category]/page.tsx
   ================================================================ */

export async function generateStaticParams() {
  return Object.keys(categoriesData).map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }> | { category: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const categorySlug = resolvedParams?.category;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: "Category Not Found | HVTI",
    };
  }

  return {
    title: `${category.title} | HVTI High-Voltage Product Catalogue`,
    description: category.description,
  };
}

export default async function CategoryRoute({
  params,
}: {
  params: Promise<{ category: string }> | { category: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const categorySlug = resolvedParams?.category;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return <ViewAllPage category={category} />;
}
