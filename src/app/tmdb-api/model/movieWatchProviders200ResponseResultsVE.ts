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
import { MovieWatchProviders200ResponseResultsCOBuyInner } from './movieWatchProviders200ResponseResultsCOBuyInner';
import { MovieWatchProviders200ResponseResultsARFlatrateInner } from './movieWatchProviders200ResponseResultsARFlatrateInner';


export interface MovieWatchProviders200ResponseResultsVE { 
    link?: string;
    rent?: Array<MovieWatchProviders200ResponseResultsCOBuyInner>;
    flatrate?: Array<MovieWatchProviders200ResponseResultsARFlatrateInner>;
    buy?: Array<MovieWatchProviders200ResponseResultsCOBuyInner>;
}

