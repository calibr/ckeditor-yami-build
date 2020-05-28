import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import icon from './curly-brackets.svg';

export default class ShowTagsPlugin extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('showTags', locale => {
      const view = new ButtonView( locale );

      view.set({
        label: 'Insert tag',
        icon,
        tooltip: true
      })

      view.on('execute', () => {
        editor.model.change(writer => {
          const insertPosition = editor.model.document.selection.getFirstPosition()
          writer.insertText('{', insertPosition)
        })
      });

      return view
    });
  }
}