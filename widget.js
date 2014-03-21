WAF.define('CustomTextField', ['waf-core/widget'], function(widget) {

    var CustomTextField = widget.create('CustomTextField', {
        /** TextField
         * 
         * @param value       -> The text displayed in the field
         * @param placeholder -> the text displayed as placeholder Api
         * 
         */
        /* the tag type  'input '*/
        tagName: 'input',
        placeholder: widget.property({
            type: 'string',
            defaultValue: 'Tape SomeThing'
        }),
        value: widget.property({
            type: 'string',
            defaultValue: ''
        }),



        init: function() {
            /* set the Attribute placeholder to the input*/
            this.node.setAttribute("placeholder", this.placeholder());
           
            /*  onChange  Attributes  */
            this.value.onChange(function() {
                this.node.value = this.value();
            });

            this.placeholder.onChange(function() {
            	this.node.placeholder = this.placeholder();
            });

        }

    });


    return CustomTextField;

});