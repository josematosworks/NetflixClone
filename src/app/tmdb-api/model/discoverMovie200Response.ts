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
import { DiscoverMovie200ResponseResultsInner } from './discoverMovie200ResponseResultsInner';


export interface DiscoverMovie200Response { 
    page?: number;
    results?: Array<DiscoverMovie200ResponseResultsInner>;
    total_pages?: number;
    total_results?: number;
}
