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
import { TvSeriesWatchProviders200ResponseResultsFIBuyInner } from './tvSeriesWatchProviders200ResponseResultsFIBuyInner';
import { TvSeriesWatchProviders200ResponseResultsCRFlatrateInner } from './tvSeriesWatchProviders200ResponseResultsCRFlatrateInner';


export interface TvSeriesWatchProviders200ResponseResultsFI { 
    link?: string;
    buy?: Array<TvSeriesWatchProviders200ResponseResultsFIBuyInner>;
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsCRFlatrateInner>;
}

