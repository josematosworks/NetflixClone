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
import { MovieWatchProviders200ResponseResultsBHBuyInner } from './movieWatchProviders200ResponseResultsBHBuyInner';
import { MovieWatchProviders200ResponseResultsAUFlatrateInner } from './movieWatchProviders200ResponseResultsAUFlatrateInner';


export interface MovieWatchProviders200ResponseResultsOM { 
    link?: string;
    buy?: Array<MovieWatchProviders200ResponseResultsBHBuyInner>;
    rent?: Array<MovieWatchProviders200ResponseResultsBHBuyInner>;
    flatrate?: Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>;
}

