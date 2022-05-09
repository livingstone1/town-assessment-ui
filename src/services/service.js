
import ApiService from './apiService';

export default class AnalyticsPageAPI {
    static algorithmItemsUrl = '/algorithm';
    static analyticPageUrl = '/analytics';


    static algorithmItems() {
        return ApiService.get(AnalyticsPageAPI.algorithmItemsUrl);
    }
    
    static algorithm(key) {
        return ApiService.get(AnalyticsPageAPI.analyticPageUrl, {algorithm: key});
    }
}