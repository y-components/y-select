/** @jsx React.DOM */
'use strict';

var React = require('react');
var YSelect = require('./index.jsx!');

React.render((
    <div>
        <YSelect value="Select">
            <YSelect.Option value="First"/>
            <YSelect.Option value="Second"/>
            <YSelect.Option value="Third"/>
        </YSelect>
        <br/><br/>
        <YSelect value="Select" size="s">
            <YSelect.Option value="First"/>
            <YSelect.Option value="Second"/>
            <YSelect.Option value="Third"/>
        </YSelect>
        <br/><br/>
        <YSelect value="Select" opened>
            <YSelect.Option value="First"/>
            <YSelect.Option value="Second"/>
            <YSelect.Option value="Third"/>
        </YSelect>
    </div>
), document.getElementById('content'));
