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
import { MovieWatchProviders200ResponseResultsDKRentInner } from './movieWatchProviders200ResponseResultsDKRentInner';
import { MovieWatchProviders200ResponseResultsBEFlatrateInner } from './movieWatchProviders200ResponseResultsBEFlatrateInner';


export interface MovieWatchProviders200ResponseResultsDK { 
    link?: string;
    rent?: Array<MovieWatchProviders200ResponseResultsDKRentInner>;
    flatrate?: Array<MovieWatchProviders200ResponseResultsBEFlatrateInner>;
    buy?: Array<MovieWatchProviders200ResponseResultsDKRentInner>;
}

