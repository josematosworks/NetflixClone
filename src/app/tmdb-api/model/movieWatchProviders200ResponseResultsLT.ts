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
import { MovieWatchProviders200ResponseResultsLTRentInner } from './movieWatchProviders200ResponseResultsLTRentInner';
import { MovieWatchProviders200ResponseResultsCZBuyInner } from './movieWatchProviders200ResponseResultsCZBuyInner';
import { MovieWatchProviders200ResponseResultsAUFlatrateInner } from './movieWatchProviders200ResponseResultsAUFlatrateInner';


export interface MovieWatchProviders200ResponseResultsLT { 
    link?: string;
    rent?: Array<MovieWatchProviders200ResponseResultsLTRentInner>;
    buy?: Array<MovieWatchProviders200ResponseResultsCZBuyInner>;
    flatrate?: Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>;
}
