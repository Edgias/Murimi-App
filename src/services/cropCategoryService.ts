import httpClient from "./httpService";

const apiEndPoint = "/crop-categories";

export interface ICropCategory {
  name: string;
  description: string;
}

function cropCategoryUrl(id: string) {
  return `${apiEndPoint}/${id}`;
}

export function getAllCropCategories() {
  return httpClient.get(apiEndPoint);
}

export function getCropCategories(
  skip: number,
  take: number,
  searchQuery: string
) {
  return httpClient.get(`${apiEndPoint}/${skip}/${take}/${searchQuery}`);
}

export function getCropCategory(id: string) {
  return httpClient.get(cropCategoryUrl(id));
}

export function createCropCategory(cropCategory: ICropCategory) {
  return httpClient.post(apiEndPoint, cropCategory);
}

export function updateCropCategory(id: string, cropCategory: ICropCategory) {
  return httpClient.put(cropCategoryUrl(id), cropCategory);
}

export function deleteCropCategory(id: string) {
  return httpClient.delete(cropCategoryUrl(id));
}
