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
import { SearchPerson200ResponseResultsInnerKnownForInner } from './searchPerson200ResponseResultsInnerKnownForInner';


export interface SearchPerson200ResponseResultsInner { 
    adult?: boolean;
    gender?: number;
    id?: number;
    known_for_department?: string;
    name?: string;
    original_name?: string;
    popularity?: number;
    profile_path?: string;
    known_for?: Array<SearchPerson200ResponseResultsInnerKnownForInner>;
}

