/**
 * Created by Carrot on 4/4/2018.
 */
Ext.define('hnpostVisiting.ux.CardIdField', {
    extend: 'Ext.field.Text',
    requires:['hnpostVisiting.ux.InputPhoto'],
    xtype: 'cardidfield',
    alternateClassName: 'Ext.form.CardId',
    config: {
        component: {
            xtype: 'inputphoto',
            type: 'text',
            fastFocus: true
        }
    },
    // @private
    initialize: function() {
        var me = this;

        me.callParent();
        me.element.addCls(Ext.baseCSSPrefix + 'field-photoable');

        me.getComponent().on({
            scope: this,
            photoicontap: 'onPhotoIconTap'
        });
    },
    onPhotoIconTap: function(input, e) {
        this.fireAction('photoicontap', [this, input, e]);
    }
});