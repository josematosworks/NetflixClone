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
import { MovieWatchProviders200ResponseResultsFRRentInner } from './movieWatchProviders200ResponseResultsFRRentInner';


export interface MovieWatchProviders200ResponseResultsFR { 
    link?: string;
    rent?: Array<MovieWatchProviders200ResponseResultsFRRentInner>;
    buy?: Array<MovieWatchProviders200ResponseResultsFRRentInner>;
    flatrate?: Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>;
}
