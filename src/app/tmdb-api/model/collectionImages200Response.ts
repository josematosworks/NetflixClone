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
import { CollectionImages200ResponsePostersInner } from './collectionImages200ResponsePostersInner';
import { CollectionImages200ResponseBackdropsInner } from './collectionImages200ResponseBackdropsInner';


export interface CollectionImages200Response { 
    id?: number;
    backdrops?: Array<CollectionImages200ResponseBackdropsInner>;
    posters?: Array<CollectionImages200ResponsePostersInner>;
}

