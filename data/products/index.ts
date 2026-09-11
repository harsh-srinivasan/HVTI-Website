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

import industrialThermalCameras from "./industrial-thermal-cameras";
import automotiveThermalImagingSystems from "./automotive-thermal-imaging-systems";
import thermalSurveillanceObservationSystems from "./thermal-surveillance-observation-systems";
import satV90GasDetectionCamera from "./sat-v90-gas-detection-camera";
import coronaCameras from "./corona-cameras";
import thermalImagingCameras from "./thermal-imaging-cameras";

import highVoltageAcDcTestingSystems from "./high-voltage-ac-dc-testing-systems";
import highVoltageMeasurementDividers from "./high-voltage-measurement-dividers";
import currentInjectionProtectionTesting from "./current-injection-protection-testing";
import circuitBreakerTestingAnalysis from "./circuit-breaker-testing-analysis";
import partialDischargeSolutions from "./partial-discharge-solutions";
import transformerTestingDiagnostics from "./transformer-testing-diagnostics";
import cableFaultLocationTesting from "./cable-fault-location-testing";
import specializedElectricalTestingEquipment from "./specialized-electrical-testing-equipment";

/* ================================================================
   HVTI MASTER PRODUCT REGISTRY
   File: data/products/index.ts

   Central registry of all authentic HVTI product datasets.
   ================================================================ */

export const allProductsData: Record<string, ProductData> = {
  // Electrical Testing Equipment — Complete 8 Destination Suite
  "high-voltage-ac-dc-testing-systems": highVoltageAcDcTestingSystems,
  "high-voltage-ac-dc-testing-kits-hipot-kits": highVoltageAcDcTestingSystems,
  "high-voltage-measurement-dividers": highVoltageMeasurementDividers,
  "high-voltage-ac-dc-dividers": highVoltageMeasurementDividers,
  "current-injection-protection-testing": currentInjectionProtectionTesting,
  "primary-secondary-current-injection-testing-sets": currentInjectionProtectionTesting,
  "circuit-breaker-testing-analysis": circuitBreakerTestingAnalysis,
  "circuit-breaker-testing": circuitBreakerTestingAnalysis,
  "partial-discharge-solutions": partialDischargeSolutions,
  "partial-discharge-testing-of-transformer-localization-system": partialDischargeSolutions,
  "transformer-testing-diagnostics": transformerTestingDiagnostics,
  "transformer-testing-benches": transformerTestingDiagnostics,
  "transformer-testing": transformerTestingDiagnostics,
  "cable-fault-location-testing": cableFaultLocationTesting,
  "cable-fault-locating-equipment": cableFaultLocationTesting,
  "miscellaneous-testing-equipment": cableFaultLocationTesting,
  "specialized-electrical-testing-equipment": specializedElectricalTestingEquipment,
  "dc-earth-fault-locator": specializedElectricalTestingEquipment,

  // Legacy Electrical Testing Equipment routes / Single datasets
  "high-voltage-ac-testing-kits": highVoltageACTestingKits,
  "ultra-light-hv-dc-test-sets": ultraLightHVDCTestSets,
  "ultra-light-high-voltage-dc-test-sets": ultraLightHVDCTestSets,
  "partial-discharge-transformer-testing": partialDischargeSolutions,

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

  // Cameras and Imaging Systems — 5 Core Architecture Destinations
  "industrial-thermal-cameras": industrialThermalCameras,
  "industrial-electrical-thermal-imaging-cameras": industrialThermalCameras,
  "automotive-thermal-imaging-systems": automotiveThermalImagingSystems,
  "thermal-surveillance-observation-systems": thermalSurveillanceObservationSystems,
  "thermal-surveillance-systems": thermalSurveillanceObservationSystems,
  "sat-v90-gas-detection-camera": satV90GasDetectionCamera,
  "gas-detection-camera": satV90GasDetectionCamera,
  "corona-cameras": coronaCameras,

  // Legacy fallbacks
  "thermal-imaging-cameras": industrialThermalCameras,
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
  industrialThermalCameras,
  automotiveThermalImagingSystems,
  thermalSurveillanceObservationSystems,
  satV90GasDetectionCamera,
  coronaCameras,
  thermalImagingCameras,
  highVoltageAcDcTestingSystems,
  highVoltageMeasurementDividers,
  currentInjectionProtectionTesting,
  circuitBreakerTestingAnalysis,
  partialDischargeSolutions,
  transformerTestingDiagnostics,
  cableFaultLocationTesting,
  specializedElectricalTestingEquipment,
};
