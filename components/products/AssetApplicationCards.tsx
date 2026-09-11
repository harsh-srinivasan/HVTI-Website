"use client";

import React from "react";
import {
  MotorIcon,
  GeneratorIcon,
  SwitchgearIcon,
  CableIcon,
  TransformerIcon,
  SubstationFieldIcon,
  VoltageIcon,
  MaintenanceWrenchIcon,
  SensorIcon,
} from "./ProductIcons";

interface ApplicationItem {
  id?: string;
  name: string;
  icon?: string;
  description?: string;
}

interface AssetApplicationCardsProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  applications: (string | { name?: string; title?: string; id?: string; icon?: string; description?: string } | any)[];
}

export default function AssetApplicationCards({
  eyebrow = "APPLICATIONS",
  title = "Used across critical equipment.",
  subtitle,
  applications,
}: AssetApplicationCardsProps) {
  if (!applications || applications.length === 0) return null;

  const items: ApplicationItem[] = applications.map((app: any) => {
    if (typeof app === "string") {
      return {
        id: app.toLowerCase().replace(/[^a-z0-9]/g, "-"),
        name: app,
      };
    }
    return {
      id: app.id || (app.name || app.title || "").toLowerCase().replace(/[^a-z0-9]/g, "-"),
      name: app.name || app.title || "",
      icon: app.icon,
      description: app.description,
    };
  });

  return (
    <section className="relative w-full py-20 bg-neutral-950/80 overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-950/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full" />
            <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">
              {eyebrow}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-gray-400 max-w-2xl">{subtitle}</p>
          )}
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-950/20 hover:shadow-lg hover:shadow-purple-950/40 hover:-translate-y-1 text-center"
            >
              {/* Icon Container with Neon Glow on Hover */}
              <div className="w-14 h-14 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-purple-400 group-hover:text-orange-400 group-hover:border-orange-500/40 group-hover:scale-110 transition-all duration-300 mb-3 shadow-inner">
                {renderAppIcon(item.name)}
              </div>

              {/* Title */}
              <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors leading-tight">
                {item.name}
              </span>

              {item.description && (
                <span className="text-xs text-gray-400 mt-1 line-clamp-2">
                  {item.description}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function renderAppIcon(name: string) {
  const lower = name.toLowerCase();

  if (lower.includes("motor")) {
    return <MotorIcon className="w-7 h-7" />;
  }
  if (lower.includes("generator")) {
    return <GeneratorIcon className="w-7 h-7" />;
  }
  if (lower.includes("switchgear") || lower.includes("disconnector")) {
    return <SwitchgearIcon className="w-7 h-7" />;
  }
  if (lower.includes("cable")) {
    return <CableIcon className="w-7 h-7" />;
  }
  if (lower.includes("transformer")) {
    return <TransformerIcon className="w-7 h-7" />;
  }
  if (lower.includes("substation") || lower.includes("grid") || lower.includes("distribution") || lower.includes("transmission")) {
    return <SubstationFieldIcon className="w-7 h-7" />;
  }
  if (lower.includes("relay") || lower.includes("protection")) {
    return (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    );
  }
  if (lower.includes("busbar") || lower.includes("mcc") || lower.includes("pcc")) {
    return (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    );
  }
  if (lower.includes("heavy industry") || lower.includes("industrial") || lower.includes("factory")) {
    return (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    );
  }
  if (lower.includes("calibration") || lower.includes("testing") || lower.includes("lab")) {
    return <MaintenanceWrenchIcon className="w-7 h-7" />;
  }
  if (lower.includes("voltage") || lower.includes("high-voltage") || lower.includes("measurement")) {
    return <VoltageIcon className="w-7 h-7" />;
  }

  return <SensorIcon className="w-7 h-7" />;
}
