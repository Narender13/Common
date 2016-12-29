import { Headers, RequestOptions } from '@angular/http';

export function xhrRequestOptions() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('X-Requested-With', 'XMLHttpRequest');

    headers.append('Authorization', 'Basic ' + btoa('ccmsdba:ccmsdba'));
    return new RequestOptions({ headers: headers });
} 