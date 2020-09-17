import React from "react";

(function (wp) {
  var registerPlugin = wp.plugins.registerPlugin;
  //var el = wp.element.createElement;
  const { Fragment } = wp.element;
  const { PluginPreviewMoreMenuItem, PluginPreview } = wp.blockEditor;

  console.log("v3.3 running");

  const PluginPreviewTest = () => (
    <Fragment>
      <PluginPreviewMoreMenuItem target="preview-abc" icon="admin-post">
        Preview ABC3.3
      </PluginPreviewMoreMenuItem>
      <PluginPreview name="preview-abc">Content of the ABC3.3</PluginPreview>
    </Fragment>
  );

  registerPlugin("plugin-preview-test", {
    render: PluginPreviewTest,
  });
})(window.wp);
