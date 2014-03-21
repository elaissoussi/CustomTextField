(function(CustomTextField) {

//    /* Default width and height of your widget */
    CustomTextField.setWidth('130');
    CustomTextField.setHeight('22');

    /* Define custom event for your widget */
    CustomTextField.addEvent('click');

//    /* Customize existing properties */
//    CustomTextField.customizeProperty('test', {
//        sourceTitle: 'Test Source',
//        title: 'Test Static Value',
//        description: 'Add a datasource to this property.'
//    });

    /* Add a Label property */
    CustomTextField.addLabel({
        'defaultValue': 'Label',
        'position': 'left'
    });

//    /* Set the Design and Styles panels */
//    CustomTextField.setPanelStyle({
//        'fClass': true,
//        'text': true,
//        'background': true,
//        'border': true,
//        'sizePosition': true,
//        'label': true,
//        'disabled': ['border-radius']
//    });

//    /* Override widget's initialization */
//    CustomTextField.prototype.init = function() {
//        this.node.innerHTML = "Widget Text"; /* Include text inside the widget */
//    }

});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html