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
import { MovieWatchProviders200ResponseResultsBERentInner } from './movieWatchProviders200ResponseResultsBERentInner';
import { TvSeriesWatchProviders200ResponseResultsCAFlatrateInner } from './tvSeriesWatchProviders200ResponseResultsCAFlatrateInner';


export interface TvSeasonWatchProviders200ResponseResultsCA { 
    link?: string;
    buy?: Array<MovieWatchProviders200ResponseResultsBERentInner>;
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsCAFlatrateInner>;
}

