import { directionType, tipType } from "@/lib/type";

const DIRECTION_URL = "http://localhost:5001/direction";
const TIP_URL = "http://localhost:5001/tip";

export const getDirectionList = async (): Promise<directionType[]> => {
  try {
    const response = await fetch(DIRECTION_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch directions: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error("Failed to fetch directions: " + error.message);
  }
};

export const getTipList = async (): Promise<tipType[]> => {
  try {
    const response = await fetch(TIP_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch directions: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error("Failed to fetch directions: " + error.message);
  }
};
