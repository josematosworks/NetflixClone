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
import { AccountWatchlistMovies200ResponseResultsInner } from './accountWatchlistMovies200ResponseResultsInner';


export interface AccountWatchlistMovies200Response { 
    page?: number;
    results?: Array<AccountWatchlistMovies200ResponseResultsInner>;
    total_pages?: number;
    total_results?: number;
}
