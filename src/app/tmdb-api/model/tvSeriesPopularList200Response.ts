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
import { TvSeriesAiringTodayList200ResponseResultsInner } from './tvSeriesAiringTodayList200ResponseResultsInner';


export interface TvSeriesPopularList200Response { 
    page?: number;
    results?: Array<TvSeriesAiringTodayList200ResponseResultsInner>;
    total_pages?: number;
    total_results?: number;
}

