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
import { MovieWatchProviders200ResponseResultsGBBuyInner } from './movieWatchProviders200ResponseResultsGBBuyInner';
import { MovieWatchProviders200ResponseResultsBEFlatrateInner } from './movieWatchProviders200ResponseResultsBEFlatrateInner';


export interface MovieWatchProviders200ResponseResultsGB { 
    link?: string;
    flatrate?: Array<MovieWatchProviders200ResponseResultsBEFlatrateInner>;
    buy?: Array<MovieWatchProviders200ResponseResultsGBBuyInner>;
    rent?: Array<MovieWatchProviders200ResponseResultsGBBuyInner>;
}

