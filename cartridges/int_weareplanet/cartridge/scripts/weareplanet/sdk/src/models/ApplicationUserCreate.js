"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

exports.ApplicationUserCreate = void 0;
var AbstractApplicationUserUpdate = require("./AbstractApplicationUserUpdate");
var ApplicationUserCreate = /** @class */ (function (_super) {
    __extends(ApplicationUserCreate, _super);
    function ApplicationUserCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplicationUserCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(ApplicationUserCreate.attributeTypeMap);
    };
    ApplicationUserCreate.discriminator = undefined;
    ApplicationUserCreate.attributeTypeMap = [
        {
            "name": "primaryAccount",
            "baseName": "primaryAccount",
            "type": "number"
        }
    ];
    return ApplicationUserCreate;
}(AbstractApplicationUserUpdate));
exports.ApplicationUserCreate = ApplicationUserCreate;
module.exports = ApplicationUserCreate;
