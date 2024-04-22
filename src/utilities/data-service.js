import sendRequest from './send-request';

export function createLocation(data) {
    return sendRequest("/create-location", 'POST', data);
}

export function getLocations() {
    return sendRequest("/get-locations", "GET", null)
}

export function createBrand(data) {
    return sendRequest("/create-brand", "POST", data)
}

export function getBrands() {
    return sendRequest("/get-brands", "GET", null)
}

export function createPart(data) {
    return sendRequest("/create-part", "POST", data)
}

export function getParts() {
    return sendRequest("/get-parts", "GET", null)
}

export function createCommodity(data) {
    return sendRequest("/create-commodity", "POST", data)
}

export function getCommodities() {
    return sendRequest("/get-commodities", "GET", null)
}

export function searchCommodities(data) {
    return sendRequest("/search-commodities", "POST", data)
}

export function filterCommodities(data) {
    return sendRequest("/filter-commodities", "POST", data)
}

export function findCommodity(data) {
    return sendRequest("/find-commodity", "POST", data)
}

export function findPromotion(data) {
    return sendRequest("/find-promotion", "POST", data)
}

export function findBrandCommodity(data) {
    return sendRequest("/find-brand-commodity", "POST", data)
}

export function findPartCommodity(data) {
    return sendRequest("/find-part-commodity", "POST", data)
}

export function findBrand(data) {
    return sendRequest("/find-brand", "POST", data)
}