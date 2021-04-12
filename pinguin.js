const assert = require("assert");

/* CONTROLLER */

// controller holds the view and the model  to delegate them different tasks
const PenguinController = function PenguinController(
    penguinView,
    penguinModel
) {
    this.penguinView = penguinView;
    this.penguinModel = penguinModel;
};
// controller takes the model data, builds the view model and delegates the view to render the model view
PenguinController.prototype.showPenguin = function showPenguin(
    penguinModelData
) {
    const penguinViewModel = {
        name: penguinModelData.name,
        imageUrl: penguinModelData.imageUrl,
        size: penguinModelData.size,
        favoriteFood: penguinModelData.favoriteFood
    };

    penguinViewModel.previousIndex = penguinModelData.index - 1;
    penguinViewModel.nextIndex = penguinModelData.index + 1;

    if (penguinModelData.index === 0) {
        penguinViewModel.previousIndex = penguinModelData.count - 1;
    }

    if (penguinModelData.index === penguinModelData.count - 1) {
        penguinViewModel.nextIndex = 0;
    }

    this.penguinView.render(penguinViewModel);
};
// the controler collects the event data from the user so to pass it later
PenguinController.prototype.onClickGetPenguin = function onClickGetPenguin(e) {
    const target = e.currentTarget;
    const index = parseInt(target.dataset.penguinIndex, 10);

    this.penguinModel.getPenguin(index, this.showPenguin.bind(this));
};

// create the controller and delegate the event collection responibility to view
PenguinController.prototype.initialize = function initialize() {
    console.log("this", this);
    this.penguinView.onClickGetPenguin = this.onClickGetPenguin.bind(this);
};

/* ********************************     TESTING THE CONTROLLER  *****************************/

const PenguinViewMock = function PenguinViewMock() {
    this.calledRenderWith = null;
};

// mock the render method
PenguinViewMock.prototype.render = function (penguinViewModel) {
    this.calledRenderWith = penguinViewModel;
};

// Arrange
const penguinViewMock = new PenguinViewMock();
const penguinModelData = {
    name: "Chinstrap",
    imageUrl: "http://chinstrapl.jpg",
    size: "5.0kg (m), 4.8kg (f)",
    favoriteFood: "krill",
    index: 2,
    count: 5
};
const controller = new PenguinController(penguinViewMock, penguinModelData);

// Act : testing the show method
controller.showPenguin(penguinModelData);

// Assert
assert.strictEqual(penguinViewMock.calledRenderWith.name, "Chinstrap");
assert.strictEqual(
    penguinViewMock.calledRenderWith.imageUrl,
    "http://chinstrapl.jpg"
);
assert.strictEqual(
    penguinViewMock.calledRenderWith.size,
    "5.0kg (m), 4.8kg (f)"
);
assert.strictEqual(penguinViewMock.calledRenderWith.favoriteFood, "krill");
assert.strictEqual(penguinViewMock.calledRenderWith.previousIndex, 1);
assert.strictEqual(penguinViewMock.calledRenderWith.nextIndex, 3);

/* VIEW */

const PenguinView = function PenguinView(element) {
    this.element = element;
    this.onClickGetPenguin = null;
};

/* the view takes the model data and renders it as html */
PenguinView.prototype.render = function render(viewModel) {
    this.element.innerHTML =
        "<h3>" +
        viewModel.name +
        "</h3>" +
        '<img class="penguin-image" src="' +
        viewModel.imageUrl +
        '" alt="' +
        viewModel.name +
        '" />' +
        "<p><b>Size:</b> " +
        viewModel.size +
        "</p>" +
        "<p><b>Favorite food:</b> " +
        viewModel.favoriteFood +
        "</p>" +
        '<a id="previousPenguin" class="previous button" href="javascript:void(0);"' +
        ' data-penguin-index="' +
        viewModel.previousIndex +
        '">Previous</a> ' +
        '<a id="nextPenguin" class="next button" href="javascript:void(0);"' +
        ' data-penguin-index="' +
        viewModel.nextIndex +
        '">Next</a>';

    this.previousIndex = viewModel.previousIndex;
    this.nextIndex = viewModel.nextIndex;

    /* set event listeners on buttons
    event listeners are provided by controller within controller initialization */

    const previousPenguin = this.element.querySelector("#previousPenguin");
    previousPenguin.addEventListener("click", this.onClickGetPenguin);

    const nextPenguin = this.element.querySelector("#nextPenguin");
    nextPenguin.addEventListener("click", this.onClickGetPenguin);
    nextPenguin.focus();
};

/* ********************************     TESTING THE MOCK  *****************************/

const ElementMock = function ElementMock() {
    this.innerHTML = null;
};

// mock functions
ElementMock.prototype.querySelector = function querySelector() {
    return this;
};
ElementMock.prototype.addEventListener = function addEventListener() {};
ElementMock.prototype.focus = function focus() {};

// Arrange
const elementMock = new ElementMock();

const view = new PenguinView(elementMock);

const viewModel = {
    name: "Chinstrap",
    imageUrl: "http://chinstrap1.jpg",
    size: "5.0kg (m), 4.8kg (f)",
    favoriteFood: "krill",
    previousIndex: 1,
    nextIndex: 2
};

// Act testing the render method of the view
view.render(viewModel);

// Assert
assert(elementMock.innerHTML.indexOf(viewModel.name) > 0);
assert(elementMock.innerHTML.indexOf(viewModel.imageUrl) > 0);
assert(elementMock.innerHTML.indexOf(viewModel.size) > 0);
assert(elementMock.innerHTML.indexOf(viewModel.favoriteFood) > 0);
assert(elementMock.innerHTML.indexOf(viewModel.previousIndex) > 0);
assert(elementMock.innerHTML.indexOf(viewModel.nextIndex) > 0);
