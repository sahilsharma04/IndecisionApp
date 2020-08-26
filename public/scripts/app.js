'use strict';

console.log("running");

//JSX
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ' ';
        appRender();
    }
};

var onMakeDecision = function onMakeDecision() {
    var random = Math.floor(Math.random() * app.options.length);
    var option = app.options[random];
    alert(option);
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    appRender();
};
var appRoot = document.getElementById("app");
var appRender = function appRender() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No Options'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'button',
            { onClick: onMakeDecision, disabled: app.options.length === 0 },
            'What should I do?'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Button'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

appRender();
