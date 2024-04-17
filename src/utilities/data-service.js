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

export function getCommodities(data) {
    return sendRequest("/get-commodities", "POST", data)
}