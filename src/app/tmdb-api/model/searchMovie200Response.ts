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
import { SearchMovie200ResponseResultsInner } from './searchMovie200ResponseResultsInner';


export interface SearchMovie200Response { 
    page?: number;
    results?: Array<SearchMovie200ResponseResultsInner>;
    total_pages?: number;
    total_results?: number;
}

