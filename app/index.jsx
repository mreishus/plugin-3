import React from "react";

(function (wp) {
  var registerPlugin = wp.plugins.registerPlugin;
  //var el = wp.element.createElement;
  const { Fragment } = wp.element;
  const { PluginPreviewMenuItem, PluginPreview } = wp.blockEditor;

  console.log("v3.4 running");

  const PluginPreviewTest = () => (
    <Fragment>
      <PluginPreviewMenuItem previewId="preview-custom-1">
        Custom Preview 1 Menu Text
      </PluginPreviewMenuItem>
      <PluginPreview previewId="preview-custom-1">
        <div>
          <h4>Custom Preview 1 Content</h4>
        </div>
      </PluginPreview>

      <PluginPreviewMenuItem previewId="preview-custom-2">
        Custom Preview 2 Menu Text
      </PluginPreviewMenuItem>
      <PluginPreview previewId="preview-custom-2">
        <div>
          <h4>Custom Preview 2 Content:</h4>
        </div>
      </PluginPreview>
    </Fragment>
  );

  registerPlugin("plugin-preview-test", {
    render: PluginPreviewTest,
  });
})(window.wp);
