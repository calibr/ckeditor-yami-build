import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
import icon from './eye-open.svg'

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
        editor.execute( 'link', 'https://yamiadvisor.com/unsubscribe' );
      });

      return view
    });
  }
}