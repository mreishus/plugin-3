import React from "react";

(function (wp) {
  var registerPlugin = wp.plugins.registerPlugin;
  var PluginSidebar = wp.editPost.PluginSidebar;
  var el = wp.element.createElement;

  registerPlugin("my-plugin-sidebar", {
    render: () => {
      return (
        <PluginSidebar
          name="my-plugin-sidebar"
          icon="admin-post"
          title="My plugin sidebar 99"
        >
          Meta Field 99
        </PluginSidebar>
      );
    },
  });
})(window.wp);
