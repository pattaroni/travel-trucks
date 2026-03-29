type Transmission = "automatic" | "manual";
type Form = "alcove" | "fullyIntegrated" | "panelTruck";

export interface Filters {
  location?: string;
  ac?: boolean;
  transmission?: Transmission;
  kitchen?: boolean;
  tv?: boolean;
  bathroom?: boolean;
  form?: Form;
}
