"use strict";
/* global dw empty session */

var WeArePlanet = require("~/cartridge/scripts/weareplanet/sdk/index");
/**
 * WebHook class
 */
var WebHook = /** @class */ (function () {
    /**
     * Constructor
     */
    function WebHook() {
        /**
         * WebHook configs
         */
        this.WebHookEntity = {
            /**
             * Transaction WebHook Entity Id
             * @link https://paymentshub.weareplanet.com/doc/api/webhook-entity/view/1472041829003
             */
            Transaction: {
                id: 1472041829003,
                name: "SalesForce::WebHook::Transaction",
                url: dw.web.URLUtils.https("WeArePlanet-WebHookTransaction").toString()
            },
            /**
             * Transaction WebHook Entity Id
             * @link https://paymentshub.weareplanet.com/doc/api/webhook-entity/view/1472041829003
             */
            Refund: {
                id: 1472041839405,
                name: "SalesForce::WebHook::Refund",
                url: dw.web.URLUtils.https("WeArePlanet-WebHookRefund").toString()
            }
        };
        this.UtilityHelper = new (require("~/cartridge/scripts/weareplanet/helpers/Utility"));
        this.spaceId = this.UtilityHelper.getConfigs().spaceId;
        this.ApiClient = new (require("~/cartridge/scripts/weareplanet/helpers/ApiClient"));
        this.WebHookListenerService = new WeArePlanet.api.WebhookListenerService(this.ApiClient);
        this.WebHookUrlService = new WeArePlanet.api.WebhookUrlService(this.ApiClient);
    }
    /**
     * Create WebHook URL
     *
     * @param { { id: number, name: string, url: string } } WebHookConfig
     * @return { WeArePlanet.model.WebhookUrl }
     */
    WebHook.prototype.getUrl = function (WebHookConfig) {
        var webHookUrl;
        // let entityQueryFilter = new WeArePlanet.model.EntityQueryFilter();
        // entityQueryFilter.fieldName = "name";
        // entityQueryFilter.value = WebHookConfig.name;
        // entityQueryFilter.state = WeArePlanet.model.CreationEntityState.ACTIVE;
        // entityQueryFilter.type = WeArePlanet.model.EntityQueryFilterType.LEAF;
        // entityQueryFilter.operator = WeArePlanet.model.CriteriaOperator.EQUALS;
        //
        // let query: WeArePlanet.model.EntityQuery = new WeArePlanet.model.EntityQuery();
        // query.filter = entityQueryFilter;
        //
        // let webHookUrls: Array<WeArePlanet.model.WebhookUrl> = this.WebHookUrlService.search(this.spaceId, query);
        // if (webHookUrls.length > 0) {
        //     webHookUrl = webHookUrls[0];
        // } else {
        var entity = new WeArePlanet.model.WebhookUrlCreate();
        entity.name = WebHookConfig.name;
        entity.url = WebHookConfig.url;
        entity.state = WeArePlanet.model.CreationEntityState.CREATE;
        webHookUrl = this.WebHookUrlService.create(this.spaceId, entity);
        //}
        return webHookUrl;
    };
    /**
     * Get Transaction WebHook Listener
     *
     * @return { WeArePlanet.model.WebhookListener }
     */
    WebHook.prototype.getTransactionListener = function () {
        var webHookListener;
        // let entityQueryFilter: WeArePlanet.model.EntityQueryFilter = new WeArePlanet.model.EntityQueryFilter();
        // entityQueryFilter.fieldName = "name";
        // entityQueryFilter.value = this.WebHookEntity.Transaction.name;
        // entityQueryFilter.type = WeArePlanet.model.EntityQueryFilterType.LEAF;
        // entityQueryFilter.operator = WeArePlanet.model.CriteriaOperator.EQUALS;
        //
        // let query: WeArePlanet.model.EntityQuery = new WeArePlanet.model.EntityQuery();
        // query.filter = entityQueryFilter;
        //
        // let webHookListeners: Array<WeArePlanet.model.WebhookListener> = this.WebHookListenerService.search(this.spaceId, query);
        // if (webHookListeners.length > 0) {
        //     webHookListener = webHookListeners[0];
        // } else {
        var entity = new WeArePlanet.model.WebhookListenerCreate();
        entity.name = this.WebHookEntity.Transaction.name;
        entity.entity = this.WebHookEntity.Transaction.id;
        entity.notifyEveryChange = false;
        entity.state = WeArePlanet.model.CreationEntityState.CREATE;
        entity.entityStates = [
            WeArePlanet.model.TransactionState.CONFIRMED,
            WeArePlanet.model.TransactionState.AUTHORIZED,
            WeArePlanet.model.TransactionState.DECLINE,
            WeArePlanet.model.TransactionState.FAILED,
            WeArePlanet.model.TransactionState.FULFILL,
            WeArePlanet.model.TransactionState.VOIDED,
            WeArePlanet.model.TransactionState.COMPLETED,
            WeArePlanet.model.TransactionState.PROCESSING,
        ];
        entity.url = this.getUrl(this.WebHookEntity.Transaction).id;
        webHookListener = this.WebHookListenerService.create(this.spaceId, entity);
        //}
        return webHookListener;
    };
    /**
     * Get WebHook Listener
     *
     * @return { WeArePlanet.model.WebhookListener }
     */
    WebHook.prototype.getRefundListener = function () {
        var webHookListener;
        // let entityQueryFilter: WeArePlanet.model.EntityQueryFilter = new WeArePlanet.model.EntityQueryFilter();
        // entityQueryFilter.fieldName = "name";
        // entityQueryFilter.value = this.WebHookEntity.Refund.name;
        // entityQueryFilter.type = WeArePlanet.model.EntityQueryFilterType.LEAF;
        // entityQueryFilter.operator = WeArePlanet.model.CriteriaOperator.EQUALS;
        //
        // let query: WeArePlanet.model.EntityQuery = new WeArePlanet.model.EntityQuery();
        // query.filter = entityQueryFilter;
        //
        // let webHookListeners: Array<WeArePlanet.model.WebhookListener> = this.WebHookListenerService.search(this.spaceId, query);
        //if (webHookListeners.length > 0) {
        //    webHookListener = webHookListeners[0];
        //} else {
        var entity = new WeArePlanet.model.WebhookListenerCreate();
        entity.name = this.WebHookEntity.Refund.name;
        entity.entity = this.WebHookEntity.Refund.id;
        entity.notifyEveryChange = false;
        entity.state = WeArePlanet.model.CreationEntityState.CREATE;
        entity.entityStates = [
            WeArePlanet.model.RefundState.FAILED,
            WeArePlanet.model.RefundState.SUCCESSFUL,
        ];
        entity.url = this.getUrl(this.WebHookEntity.Refund).id;
        webHookListener = this.WebHookListenerService.create(this.spaceId, entity);
        //}
        return webHookListener;
    };
    return WebHook;
}());
exports.WebHook = WebHook;
module.exports = WebHook;
