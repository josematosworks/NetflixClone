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
import { MovieWatchProviders200ResponseResultsAUFlatrateInner } from './movieWatchProviders200ResponseResultsAUFlatrateInner';
import { MovieWatchProviders200ResponseResultsBGRentInner } from './movieWatchProviders200ResponseResultsBGRentInner';


export interface MovieWatchProviders200ResponseResultsBG { 
    link?: string;
    rent?: Array<MovieWatchProviders200ResponseResultsBGRentInner>;
    buy?: Array<MovieWatchProviders200ResponseResultsBGRentInner>;
    flatrate?: Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>;
}
