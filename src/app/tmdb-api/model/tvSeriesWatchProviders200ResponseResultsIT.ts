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
import { TvSeriesWatchProviders200ResponseResultsIEFlatrateInner } from './tvSeriesWatchProviders200ResponseResultsIEFlatrateInner';
import { TvSeriesWatchProviders200ResponseResultsITBuyInner } from './tvSeriesWatchProviders200ResponseResultsITBuyInner';


export interface TvSeriesWatchProviders200ResponseResultsIT { 
    link?: string;
    buy?: Array<TvSeriesWatchProviders200ResponseResultsITBuyInner>;
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsIEFlatrateInner>;
}

