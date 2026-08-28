import { ProductData } from "@/types/product";

import highVoltageACTestingKits from "./high-voltage-ac-testing-kits";
import ultraLightHVDCTestSets from "./ultra-light-hv-dc-test-sets";
import hvACDCDividers from "./hv-ac-dc-dividers";
import currentInjectionTestingSets from "./current-injection-testing-sets";
import dcEarthFaultLocator from "./dc-earth-fault-locator";
import partialDischargeTransformerTesting from "./partial-discharge-transformer-testing";
import transformerTestingBenches from "./transformer-testing-benches";
import circuitBreakerTesting from "./circuit-breaker-testing";
import miscellaneousTestingEquipment from "./miscellaneous-testing-equipment";

import highVoltageDetectorTPS9 from "./high-voltage-detector-tp-s9";
import insulatedOperatingSticks from "./insulated-operating-sticks";
import dischargeRods from "./discharge-rods";
import portableEarthingEquipment from "./portable-earthing-equipment";
import dropoutFuseOperatingRods from "./dropout-fuse-operating-rods";
import phasingOutSticks from "./phasing-out-sticks";
import helmetMountedVoltageDetector from "./helmet-mounted-voltage-detector";
import rescueSticks from "./rescue-sticks";

import temperatureMonitoringSystem from "./temperature-monitoring-system";
import partialDischargeOnlineMonitoring from "./partial-discharge-online-monitoring";

import thermalImagingCameras from "./thermal-imaging-cameras";
import coronaCameras from "./corona-cameras";

/* ================================================================
   HVTI MASTER PRODUCT REGISTRY
   File: data/products/index.ts

   Central registry of all authentic HVTI product datasets.
   ================================================================ */

export const allProductsData: Record<string, ProductData> = {
  // Electrical Testing Equipment
  "high-voltage-ac-testing-kits": highVoltageACTestingKits,
  "ultra-light-hv-dc-test-sets": ultraLightHVDCTestSets,
  "hv-ac-dc-dividers": hvACDCDividers,
  "current-injection-testing-sets": currentInjectionTestingSets,
  "dc-earth-fault-locator": dcEarthFaultLocator,
  "partial-discharge-transformer-testing": partialDischargeTransformerTesting,
  "transformer-testing-benches": transformerTestingBenches,
  "circuit-breaker-testing": circuitBreakerTesting,
  "miscellaneous-testing-equipment": miscellaneousTestingEquipment,

  // Electrical Safety Equipments
  "high-voltage-detector-tp-s9": highVoltageDetectorTPS9,
  "insulated-operating-sticks": insulatedOperatingSticks,
  "discharge-rods": dischargeRods,
  "portable-earthing-equipment": portableEarthingEquipment,
  "dropout-fuse-operating-rods": dropoutFuseOperatingRods,
  "phasing-out-sticks": phasingOutSticks,
  "helmet-mounted-voltage-detector": helmetMountedVoltageDetector,
  "rescue-sticks": rescueSticks,

  // Condition Monitoring
  "temperature-monitoring-system": temperatureMonitoringSystem,
  "partial-discharge-online-monitoring": partialDischargeOnlineMonitoring,

  // Cameras and Imaging Systems
  "thermal-imaging-cameras": thermalImagingCameras,
  "corona-cameras": coronaCameras,
};

export const allProductsList: ProductData[] = Object.values(allProductsData);

export function getProductBySlug(slug: string): ProductData | undefined {
  if (allProductsData[slug]) {
    return allProductsData[slug];
  }

  // Fallback normalize for potential aliases or hyphenation differences
  const normalized = slug.toLowerCase().replace(/_|\s+/g, "-");
  if (allProductsData[normalized]) {
    return allProductsData[normalized];
  }

  return undefined;
}

export {
  highVoltageACTestingKits,
  ultraLightHVDCTestSets,
  hvACDCDividers,
  currentInjectionTestingSets,
  dcEarthFaultLocator,
  partialDischargeTransformerTesting,
  transformerTestingBenches,
  circuitBreakerTesting,
  miscellaneousTestingEquipment,
  highVoltageDetectorTPS9,
  insulatedOperatingSticks,
  dischargeRods,
  portableEarthingEquipment,
  dropoutFuseOperatingRods,
  phasingOutSticks,
  helmetMountedVoltageDetector,
  rescueSticks,
  temperatureMonitoringSystem,
  partialDischargeOnlineMonitoring,
  thermalImagingCameras,
  coronaCameras,
};
