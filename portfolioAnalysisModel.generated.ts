/* tslint:disable */
/* eslint-disable */
/**
/* This file was automatically generated from pydantic models by running pydantic2ts.
/* Do not modify it by hand - just update the pydantic models and then re-run the script
*/

export type DrillingMethod = "diagonal" | "normal" | "not_possible" | "unknown";

export interface PortfolioAnalysisError {
  BUILDING_id: string;
  error: string;
}
export interface PortfolioAnalysisResult {
  BUILDING_address: string;
  BUILDING_area_km2: number;
  BUILDING_area_m2: number;
  BUILDING_construction_decade: number;
  BUILDING_electricity_mwh: number;
  BUILDING_footprint_sqm?: number;
  BUILDING_groundwater_area?: boolean;
  BUILDING_heat_mwh: number;
  BUILDING_heat_peak_power: number;
  BUILDING_id: string;
  BUILDING_lot_sqm?: number;
  BUILDING_number_of_floors?: number;
  BUILDING_type: string;
  BUILDING_underground_zoning?: boolean;
  BUILDING_ventilation_units: number;
  DH_co2: number;
  DH_total_energy_eur: number;
  DH_HEAT_RECOVERY_captured_energy_mwh: number;
  DH_HEAT_RECOVERY_dh_eur: number;
  DH_HEAT_RECOVERY_dh_mwh: number;
  DH_HEAT_RECOVERY_hp_electricity_eur: number;
  DH_HEAT_RECOVERY_hp_electricity_mwh: number;
  DH_HEAT_RECOVERY_hp_total_mwh: number;
  DH_HEAT_RECOVERY_capex: number;
  DH_HEAT_RECOVERY_co2: number;
  DH_HEAT_RECOVERY_elec_upgrade_capex: number;
  DH_HEAT_RECOVERY_hp_power: number;
  DH_HEAT_RECOVERY_irr: number;
  DH_HEAT_RECOVERY_opex: number;
  DH_HEAT_RECOVERY_pmt: number;
  DH_HEAT_RECOVERY_pp?: number;
  GS_borehole_count: number;
  GS_borehole_mwh: number;
  GS_borehole_sqm: number;
  GS_capex: number;
  GS_co2: number;
  GS_drill_depth_per_borehole: number;
  GS_drill_method: DrillingMethod;
  GS_drillcost: number;
  GS_elec_upgrade_capex: number;
  GS_electric_boiler_power: number;
  GS_hp_power: number;
  GS_hp_electricity_eur: number;
  GS_hp_electricity_mwh: number;
  GS_irr: number;
  GS_opex: number;
  GS_pmt: number;
  GS_pp?: number;
  GS_HEAT_RECOVERY_borehole_count: number;
  GS_HEAT_RECOVERY_borehole_mwh: number;
  GS_HEAT_RECOVERY_borehole_sqm: number;
  GS_HEAT_RECOVERY_capex: number;
  GS_HEAT_RECOVERY_co2: number;
  GS_HEAT_RECOVERY_drill_depth_per_borehole: number;
  GS_HEAT_RECOVERY_drill_method: DrillingMethod;
  GS_HEAT_RECOVERY_drillcost: number;
  GS_HEAT_RECOVERY_elec_upgrade_capex: number;
  GS_HEAT_RECOVERY_hp_electricity_eur: number;
  GS_HEAT_RECOVERY_hp_electricity_mwh: number;
  GS_HEAT_RECOVERY_irr: number;
  GS_HEAT_RECOVERY_opex: number;
  GS_HEAT_RECOVERY_pmt: number;
  GS_HEAT_RECOVERY_pp?: number;
}
