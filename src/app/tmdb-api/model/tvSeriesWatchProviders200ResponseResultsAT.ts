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
import { TvSeriesWatchProviders200ResponseResultsATFlatrateInner } from './tvSeriesWatchProviders200ResponseResultsATFlatrateInner';


export interface TvSeriesWatchProviders200ResponseResultsAT { 
    link?: string;
    buy?: Array<MovieWatchProviders200ResponseResultsATBuyInner>;
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsATFlatrateInner>;
}

