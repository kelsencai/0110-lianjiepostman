"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplianceTrainingModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const compliance_training_controller_1 = require("./compliance-training.controller");
const compliance_training_service_1 = require("./compliance-training.service");
const compliance_training_entity_1 = require("./compliance-training.entity");
let ComplianceTrainingModule = class ComplianceTrainingModule {
};
exports.ComplianceTrainingModule = ComplianceTrainingModule;
exports.ComplianceTrainingModule = ComplianceTrainingModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([compliance_training_entity_1.ComplianceTraining])],
        controllers: [compliance_training_controller_1.ComplianceTrainingController],
        providers: [compliance_training_service_1.ComplianceTrainingService],
    })
], ComplianceTrainingModule);
//# sourceMappingURL=compliance-training.module.js.map