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
import { TvSeriesWatchProviders200ResponseResultsCHFlatrateInner } from './tvSeriesWatchProviders200ResponseResultsCHFlatrateInner';
import { MovieWatchProviders200ResponseResultsPERentInner } from './movieWatchProviders200ResponseResultsPERentInner';


export interface TvSeasonWatchProviders200ResponseResultsCH { 
    link?: string;
    buy?: Array<MovieWatchProviders200ResponseResultsPERentInner>;
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsCHFlatrateInner>;
}

