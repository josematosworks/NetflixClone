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
import { MovieWatchProviders200ResponseResultsATBuyInner } from './movieWatchProviders200ResponseResultsATBuyInner';
import { MovieWatchProviders200ResponseResultsATFlatrateInner } from './movieWatchProviders200ResponseResultsATFlatrateInner';


export interface MovieWatchProviders200ResponseResultsAT { 
    link?: string;
    flatrate?: Array<MovieWatchProviders200ResponseResultsATFlatrateInner>;
    buy?: Array<MovieWatchProviders200ResponseResultsATBuyInner>;
    rent?: Array<MovieWatchProviders200ResponseResultsATBuyInner>;
}
