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
import { TvSeriesWatchProviders200ResponseResultsPLRentInner } from './tvSeriesWatchProviders200ResponseResultsPLRentInner';
import { TvSeriesWatchProviders200ResponseResultsPLFlatrateInner } from './tvSeriesWatchProviders200ResponseResultsPLFlatrateInner';


export interface TvSeasonWatchProviders200ResponseResultsPL { 
    link?: string;
    rent?: Array<TvSeriesWatchProviders200ResponseResultsPLRentInner>;
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsPLFlatrateInner>;
}

