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
import { FindById200ResponseMovieResultsInner } from './findById200ResponseMovieResultsInner';


export interface FindById200Response { 
    movie_results?: Array<FindById200ResponseMovieResultsInner>;
    person_results?: Array<string>;
    tv_results?: Array<string>;
    tv_episode_results?: Array<string>;
    tv_season_results?: Array<string>;
}

