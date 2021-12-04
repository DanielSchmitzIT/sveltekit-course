/* tslint:disable */
/* eslint-disable */
/**
 * Blog - for Svelte Course
 * Svelte Blog
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface ViewControllerCreateRequest {
    body: object;
}

export interface ViewControllerFindOneRequest {
    id: string;
}

export interface ViewControllerRemoveRequest {
    id: string;
}

export interface ViewControllerUpdateRequest {
    id: string;
    body: object;
}

/**
 * 
 */
export class ViewApi extends runtime.BaseAPI {

    /**
     */
    async viewControllerCreateRaw(requestParameters: ViewControllerCreateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling viewControllerCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/views`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async viewControllerCreate(requestParameters: ViewControllerCreateRequest, initOverrides?: RequestInit): Promise<string> {
        const response = await this.viewControllerCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async viewControllerFindAllRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/views`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async viewControllerFindAll(initOverrides?: RequestInit): Promise<string> {
        const response = await this.viewControllerFindAllRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async viewControllerFindOneRaw(requestParameters: ViewControllerFindOneRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling viewControllerFindOne.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/views/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async viewControllerFindOne(requestParameters: ViewControllerFindOneRequest, initOverrides?: RequestInit): Promise<string> {
        const response = await this.viewControllerFindOneRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async viewControllerRemoveRaw(requestParameters: ViewControllerRemoveRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling viewControllerRemove.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/views/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async viewControllerRemove(requestParameters: ViewControllerRemoveRequest, initOverrides?: RequestInit): Promise<string> {
        const response = await this.viewControllerRemoveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async viewControllerUpdateRaw(requestParameters: ViewControllerUpdateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling viewControllerUpdate.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling viewControllerUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/views/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async viewControllerUpdate(requestParameters: ViewControllerUpdateRequest, initOverrides?: RequestInit): Promise<string> {
        const response = await this.viewControllerUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
