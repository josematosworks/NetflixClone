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
import { MovieWatchProviders200ResponseResultsCZBuyInner } from './movieWatchProviders200ResponseResultsCZBuyInner';
import { MovieWatchProviders200ResponseResultsAUFlatrateInner } from './movieWatchProviders200ResponseResultsAUFlatrateInner';
import { MovieWatchProviders200ResponseResultsCZRentInner } from './movieWatchProviders200ResponseResultsCZRentInner';


export interface MovieWatchProviders200ResponseResultsCZ { 
    link?: string;
    flatrate?: Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>;
    rent?: Array<MovieWatchProviders200ResponseResultsCZRentInner>;
    buy?: Array<MovieWatchProviders200ResponseResultsCZBuyInner>;
}

