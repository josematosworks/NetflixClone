/**
 * TMDB API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ListsCopy200ResponseResultsInner } from './listsCopy200ResponseResultsInner';


export interface ListsCopy200Response { 
    id?: number;
    page?: number;
    results?: Array<ListsCopy200ResponseResultsInner>;
    total_pages?: number;
    total_results?: number;
}
