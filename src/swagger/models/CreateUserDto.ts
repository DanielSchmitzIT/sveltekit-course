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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateUserDto
 */
export interface CreateUserDto {
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    street: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    streetNr: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    zip: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    password: string;
}

export function CreateUserDtoFromJSON(json: any): CreateUserDto {
    return CreateUserDtoFromJSONTyped(json, false);
}

export function CreateUserDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': json['firstName'],
        'email': json['email'],
        'username': json['username'],
        'lastName': json['lastName'],
        'street': json['street'],
        'streetNr': json['streetNr'],
        'zip': json['zip'],
        'city': json['city'],
        'country': json['country'],
        'password': json['password'],
    };
}

export function CreateUserDtoToJSON(value?: CreateUserDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'email': value.email,
        'username': value.username,
        'lastName': value.lastName,
        'street': value.street,
        'streetNr': value.streetNr,
        'zip': value.zip,
        'city': value.city,
        'country': value.country,
        'password': value.password,
    };
}

