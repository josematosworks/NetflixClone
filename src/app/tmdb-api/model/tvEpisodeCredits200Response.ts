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
import { TvEpisodeCredits200ResponseCrewInner } from './tvEpisodeCredits200ResponseCrewInner';
import { TvSeriesCredits200ResponseCastInner } from './tvSeriesCredits200ResponseCastInner';
import { TvEpisodeCredits200ResponseGuestStarsInner } from './tvEpisodeCredits200ResponseGuestStarsInner';


export interface TvEpisodeCredits200Response { 
    cast?: Array<TvSeriesCredits200ResponseCastInner>;
    crew?: Array<TvEpisodeCredits200ResponseCrewInner>;
    guest_stars?: Array<TvEpisodeCredits200ResponseGuestStarsInner>;
    id?: number;
}
