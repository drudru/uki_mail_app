(function() {
// define namespace
uki_mail_app = {};

// all core modules
include('frameworks/uki/uki-core.js');

// used views, comment out unused ones
include('frameworks/uki/uki-view/view/box.js');
include('frameworks/uki/uki-view/view/image.js');
include('frameworks/uki/uki-view/view/button.js');
// include('frameworks/uki/uki-view/view/checkbox.js');
// include('frameworks/uki/uki-view/view/radio.js');
include('frameworks/uki/uki-view/view/textField.js');
include('frameworks/uki/uki-view/view/label.js');
include('frameworks/uki/uki-view/view/list.js');
include('frameworks/uki/uki-view/view/table.js');
// include('frameworks/uki/uki-view/view/slider.js');
include('frameworks/uki/uki-view/view/splitPane.js');
include('frameworks/uki/uki-view/view/scrollPane.js');
// include('frameworks/uki/uki-view/view/popup.js');
include('frameworks/uki/uki-view/view/flow.js');
// include('frameworks/uki/uki-view/view/toolbar.js');

// theme
include('uki_mail_app/theme.js');

// data
include('frameworks/uki/uki-data/ajax.js');
include('frameworks/uki/uki-data/model.js');

include('uki_mail_app/view/toolbarButton.js');
include('uki_mail_app/view/messageTable.js');
include('uki_mail_app/view/searchField.js');
include('uki_mail_app/view/messageTable/column.js');
include('uki_mail_app/view/main.js');
include('uki_mail_app/view/messageTable/dateColumn.js');
include('uki_mail_app/view/toolbar.js');
include('uki_mail_app/model/message.js');
include('uki_mail_app/model/messageList.js');
include('uki_mail_app/view/folders.js');
include('uki_mail_app/view/folders/render.js');
include('uki_mail_app/view/messageTable/drag.js');


uki_mail_app.theme.imagePath = 'i/';

// skip interface creation if we're testing
if (window.TESTING) return;

uki(
    { view: 'uki_mail_app.view.Main', rect: '1000 1000', anchors: 'left top right bottom' }
).attachTo(window, '1000 1000');

if (window.messages) {
    uki('MessageTable').data(window.messages);
} else {
    uki.ajax({ url: '/messages/?callback=?', dataType: 'jsonp', success: function(data) { 
        uki('MessageTable').data(data);
    } })
}
})();
