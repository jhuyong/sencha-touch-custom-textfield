/**
 * Created by Carrot on 4/8/2018.
 */
Ext.define('hnpostVisiting.ux.InputPhoto', {
    extend: 'Ext.field.Input',
    xtype : 'inputphoto',
    config:{},
    // @private
    getTemplate: function() {
        var items = [
            {
                reference: 'input',
                tag: this.tag
            },
            {
                reference: 'mask',
                classList: [this.config.maskCls]
            },
            {
                reference: 'clearIcon',
                cls: 'x-clear-icon'
            },
            {
                reference: 'photoIcon',
                cls: 'x-photo-icon'
            }
        ];
        return items;
    },
    initElement: function() {
        var me = this;

        me.callParent();

        if (me.photoIcon) {
            me.photoIcon.on({
                tap: 'onPhotoIconTap',
                touchstart: 'onPhotoIconPress',
                touchend: 'onPhotoIconRelease',
                scope: me
            });
        }
    },
    // @private
    onPhotoIconTap: function(e) {
        this.fireEvent('photoicontap', this, e);

        //focus the field after cleartap happens, but only on android.
        //this is to stop the keyboard from hiding. TOUCH-2064
        if (Ext.os.is.Android) {
            this.focus();
        }
    },
});