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
import { CollectionDetails200ResponsePartsInner } from './collectionDetails200ResponsePartsInner';


export interface CollectionDetails200Response { 
    id?: number;
    name?: string;
    overview?: string;
    poster_path?: string;
    backdrop_path?: string;
    parts?: Array<CollectionDetails200ResponsePartsInner>;
}

