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
import { MovieSimilar200ResponseResultsInner } from './movieSimilar200ResponseResultsInner';


export interface MovieSimilar200Response { 
    page?: number;
    results?: Array<MovieSimilar200ResponseResultsInner>;
    total_pages?: number;
    total_results?: number;
}

