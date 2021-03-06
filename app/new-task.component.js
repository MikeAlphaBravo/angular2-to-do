"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_model_1 = require("./task.model");
var NewTaskComponent = (function () {
    function NewTaskComponent() {
        this.newTaskSender = new core_1.EventEmitter();
    }
    NewTaskComponent.prototype.submitForm = function (description, priority) {
        var newTaskToAdd = new task_model_1.Task(description, priority);
        this.newTaskSender.emit(newTaskToAdd);
    };
    return NewTaskComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewTaskComponent.prototype, "newTaskSender", void 0);
NewTaskComponent = __decorate([
    core_1.Component({
        selector: 'new-task',
        template: "\n  <h1>New Task</h1>\n  <div>\n    <label>Enter Task Description:</label>\n    <input #newDescription>\n  </div>\n  <div>\n    <label>Task Priority:</label>\n    <select #newPriority>\n      <option [value]=\"1\"> Low Priority </option>\n      <option [value]=\"2\"> Medium Priority </option>\n      <option [value]=\"3\"> High Priority </option>\n    </select>\n    <button (click)=\"submitForm(newDescription.value, newPriority.value); newDescription.value='';\">Add</button>\n  </div>\n  "
    })
], NewTaskComponent);
exports.NewTaskComponent = NewTaskComponent;
//# sourceMappingURL=new-task.component.js.map