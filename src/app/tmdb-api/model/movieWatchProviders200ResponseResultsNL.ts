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
import { MovieWatchProviders200ResponseResultsNLBuyInner } from './movieWatchProviders200ResponseResultsNLBuyInner';
import { MovieWatchProviders200ResponseResultsBEFlatrateInner } from './movieWatchProviders200ResponseResultsBEFlatrateInner';


export interface MovieWatchProviders200ResponseResultsNL { 
    link?: string;
    buy?: Array<MovieWatchProviders200ResponseResultsNLBuyInner>;
    rent?: Array<MovieWatchProviders200ResponseResultsNLBuyInner>;
    flatrate?: Array<MovieWatchProviders200ResponseResultsBEFlatrateInner>;
}
