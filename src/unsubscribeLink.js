import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
import icon from './unsubscribe.svg'

export default class PreviewPlugin extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('unsubscribeLink', locale => {
      const view = new ButtonView( locale );

      view.set({
        label: 'Add unsubscribe link',
        icon,
        tooltip: true
      })

      view.on('execute', () => {
        editor.model.change( writer => {
          const insertPosition = editor.model.document.selection.getFirstPosition();
          writer.insertText( 'Unsubscribe', {linkHref: 'https://yamiadvisor.com/unsubscribe'}, insertPosition );
        } )
      });

      return view
    });
  }
}