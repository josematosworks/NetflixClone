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
import { TvSeriesWatchProviders200ResponseResultsJPBuyInner } from './tvSeriesWatchProviders200ResponseResultsJPBuyInner';
import { TvSeriesWatchProviders200ResponseResultsJPFlatrateInner } from './tvSeriesWatchProviders200ResponseResultsJPFlatrateInner';


export interface TvSeriesWatchProviders200ResponseResultsJP { 
    link?: string;
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsJPFlatrateInner>;
    buy?: Array<TvSeriesWatchProviders200ResponseResultsJPBuyInner>;
    rent?: Array<TvSeriesWatchProviders200ResponseResultsJPBuyInner>;
}

