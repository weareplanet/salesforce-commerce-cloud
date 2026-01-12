"use strict";
/* global dw empty session */

exports.Refund = void 0;
var WeArePlanet = require("~/cartridge/scripts/weareplanet/sdk/index");
/**
 * Transaction Helper
 */
var Refund = /** @class */ (function () {
    /**
     * Constructor
     * @param { dw.order.Basket | dw.order.LineItemCtnr } currentBasket
     */
    function Refund(currentBasket) {
        this.UtilityHelper = new (require("~/cartridge/scripts/weareplanet/helpers/Utility"));
        this.spaceId = this.UtilityHelper.getConfigs().spaceId;
        this.ApiClient = new (require("~/cartridge/scripts/weareplanet/helpers/ApiClient"));
        this.PaymentMethodConfigurationService = new WeArePlanet.api.PaymentMethodConfigurationService(this.ApiClient);
        this.TransactionIframeService = new WeArePlanet.api.TransactionIframeService(this.ApiClient);
        this.TransactionService = new WeArePlanet.api.TransactionService(this.ApiClient);
        this.RefundService = new WeArePlanet.api.RefundService(this.ApiClient);
        this.currentBasket = currentBasket;
    }
    /**
     * Get WeArePlanet.model.Refund by id
     *
     * @param { number } spaceId
     * @param { number } refundId
     * @return { WeArePlanet.model.Refund }
     */
    Refund.prototype.getRefundById = function (spaceId, refundId) {
        return this.RefundService.read(spaceId, refundId);
    };
    return Refund;
}());
exports.Refund = Refund;
module.exports = Refund;
