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
import { PersonPopularList200ResponseResultsInnerKnownForInner } from './personPopularList200ResponseResultsInnerKnownForInner';


export interface PersonPopularList200ResponseResultsInner { 
    adult?: boolean;
    gender?: number;
    id?: number;
    known_for?: Array<PersonPopularList200ResponseResultsInnerKnownForInner>;
    known_for_department?: string;
    name?: string;
    popularity?: number;
    profile_path?: string;
}
