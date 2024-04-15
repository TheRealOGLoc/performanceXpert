import sendRequest from './send-request';

const BASE_URL = '/image-upload'

export function upload(data) {
    return sendRequest(BASE_URL, 'POST', data, true);
}