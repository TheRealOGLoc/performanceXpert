import sendRequest from './send-request';

export function createLocation(data) {
    return sendRequest("/create-location", 'POST', data);
}

export function getLocations() {
    return sendRequest("/get-locations", "GET", null)
}